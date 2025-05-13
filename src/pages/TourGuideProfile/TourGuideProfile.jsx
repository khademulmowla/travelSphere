import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const fetchGuideDetails = async (id) => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tour-guides/${id}`);
    return data;
};

const fetchGuideStories = async (email) => {
    if (!email) return [];
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/stories/${email}`);
    return data;
};

const TourGuideProfile = () => {
    const { id } = useParams();

    // Fetch tour guide details
    const { data: guide, isLoading: isGuideLoading } = useQuery({
        queryKey: ["tourGuide", id],
        queryFn: () => fetchGuideDetails(id),
    });

    // Fetch stories only when guide data is available
    const { data: stories = [], isLoading: isStoriesLoading } = useQuery({
        queryKey: ["stories", guide?.email],
        queryFn: () => fetchGuideStories(guide?.email),
        enabled: !!guide?.email,
    });

    if (isGuideLoading || isStoriesLoading) return <LoadingSpinner />;

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <img src={guide?.image} alt={guide?.name} className="w-full h-56 object-cover rounded-lg" />
                <h1 className="text-2xl dark:text-gray-700 font-bold mt-4">{guide?.name}</h1>
                {/* <p className="text-gray-700">{guide?.experience} years of experience</p> */}
                <p className="text-gray-600">{guide?.description}</p>
            </div>

            <div className="mt-8 dark:text-gray-700">
                <h2 className="text-xl ml-4 font-bold">Stories by {guide?.name}</h2>
                {stories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {stories.map((story) => (
                            <div key={story._id} className="bg-gray-100 p-4 rounded-lg shadow">
                                <img
                                    src={story.images?.[0] || "/default-placeholder.jpg"}
                                    alt={story.name}
                                    className="w-full h-56 object-cover rounded-lg"
                                />
                                <h3 className="text-lg font-bold">{story.name}</h3>
                                <p>{story.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No stories available</p>
                )}
            </div>
        </div>
    );
};

export default TourGuideProfile;
