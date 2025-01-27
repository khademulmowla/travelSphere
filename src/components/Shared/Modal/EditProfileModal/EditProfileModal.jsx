import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const EditProfileModal = ({ user, closeModal, role }) => {
    const axiosSecure = useAxiosSecure()
    const { updateUserProfile } = useAuth()
    const [formData, setFormData] = useState({
        displayName: user.displayName || "",
        photoURL: user.photoURL || ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateUserProfile(formData.displayName, formData.photoURL);

        try {
            const response = await axiosSecure.patch(`/update-user/${user.email}`, {
                name: formData.displayName,
                image: formData.photoURL,
            });

            console.log("Profile updated successfully:", response.data);
            closeModal();
        } catch (error) {
            console.error("Error during update:", error);
            alert("Something went wrong ");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">Name:</label>
                    <input
                        type="text"
                        name="displayName"
                        value={formData.displayName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block mb-2">Profile Picture URL:</label>
                    <input
                        type="text"
                        name="photoURL"
                        value={formData.photoURL}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mb-4"
                    />

                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={user.email}
                        disabled
                        className="w-full p-2 border rounded mb-4 bg-gray-200 cursor-not-allowed"
                    />

                    <label className="block mb-2">Role:</label>
                    <input
                        type="text"
                        value={role}
                        disabled
                        className="w-full p-2 border rounded mb-4 bg-gray-200 cursor-not-allowed"
                    />

                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-lime-500 text-white rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
