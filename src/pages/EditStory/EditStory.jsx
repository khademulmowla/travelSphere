import { TbFidgetSpinner } from "react-icons/tb";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Swal from "sweetalert2";
import { imageUpload } from "../../api/utils";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const EditStory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const [uploadImage, setUploadImage] = useState([]);

    const { data: story, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/story/${id}`);
            return data;
        },
        onError: (err) => {
            console.error("Error fetching story:", err.message);
        },
    });

    if (isError) {
        return <div>Error: {error?.response?.data?.error || "Failed to fetch story."}</div>;
    }

    const handleAddPhoto = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);
        const newPhoto = formData.get("newPhoto");

        // Upload image and get URL
        const imageUrl = await imageUpload(newPhoto);

        // Send the image URL to the backend and update the story
        try {
            const updated = await axiosSecure.patch(`/story/${id}`, {
                action: "addPhoto",
                photoUrl: imageUrl,
            });

            if (updated.data.modifiedCount > 0) {
                refetch();
                Swal.fire("Success", "Photo added successfully", "success");
            } else {
                Swal.fire("Error", "Failed to add photo", "error");
            }
        } catch (error) {
            console.error("Error adding photo:", error);
            Swal.fire("Error", "Something went wrong while adding the photo", "error");
        }
        setLoading(false);
    };


    const handleRemovePhoto = async (photoUrl) => {
        const updated = await axiosSecure.patch(`/story/${id}`, {
            action: "removePhoto",
            photoUrl,
        });
        if (updated.data.modifiedCount > 0) {
            refetch();
            Swal.fire("Success", "Photo removed successfully", "success");
        }
    };

    const handleRemoveNewPhoto = (photoUrl) => {
        setUploadImage(prevState => prevState.filter(img => img.url !== photoUrl));
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">Edit Story</h1>

            {/* Add New Photo Section */}
            <form onSubmit={handleAddPhoto}>
                <label htmlFor="newPhoto" className="block mb-2">Add New Photo:</label>
                <input
                    type="file"
                    id="newPhoto"
                    name="newPhoto"
                    accept="image/*"
                    onChange={e => {
                        const files = Array.from(e.target.files);
                        const newImages = files.map(file => ({
                            image: file,
                            url: URL.createObjectURL(file),
                        }));
                        setUploadImage(newImages);
                    }}
                    required
                    className="border rounded-md px-3 py-2 w-full mb-4"
                />
                <button type="submit" className="btn btn-sm bg-green-500 text-white">
                    {loading ? <TbFidgetSpinner className="animate-spin m-auto" /> : 'Add Photo'}
                </button>
            </form>

            {/* Display Selected Images */}
            {uploadImage.length > 0 && (
                <div className="flex flex-wrap gap-5 items-center mt-5">
                    {uploadImage.map((img, index) => (
                        <div key={index} className="flex gap-2 items-center">
                            <img className="w-20 h-20 object-cover rounded" src={img.url} alt={img.image.name} />
                            <p>{img.image.name} - {img.image.size} Bytes</p>
                            <button
                                onClick={() => handleRemoveNewPhoto(img.url)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Current Photos */}
            <div className="mt-5">
                <h2 className="text-xl font-semibold">Current Photos:</h2>
                <div className="grid grid-cols-3 gap-4 mt-3">
                    {story?.images?.map((photo, index) => (
                        <div key={index} className="relative">
                            <img src={photo} alt="Story" className="w-full h-32 object-cover rounded-md" />
                            <button
                                onClick={() => handleRemovePhoto(photo)}
                                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EditStory;