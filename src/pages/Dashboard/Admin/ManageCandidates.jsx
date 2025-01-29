import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageCandidates = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: applications = [], isLoading, refetch } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-applications`);
            return data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    // Accept Candidate
    const handleAccept = async (email, applicationId) => {
        try {
            // Update user role to 'tour-guide'
            await axiosSecure.patch(`/users/${email}`, { role: "guide" });

            // Delete the application
            await axiosSecure.delete(`/applications/${applicationId}`);

            Swal.fire("Accepted!", "Candidate is now a tour guide.", "success");
            refetch();
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Failed to accept candidate", "error");
        }
    };

    // Reject Candidate -> Delete Application
    const handleReject = async (applicationId) => {
        try {
            await axiosSecure.delete(`/applications/${applicationId}`);
            Swal.fire("Rejected!", "Application has been removed.", "success");
            refetch();
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Failed to reject candidate", "error");
        }
    };

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>TravelSphere | Manage Candidates</title>
            </Helmet>
            <table className="table w-full table-zebra">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>CV</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application, index) => (
                        <tr key={application._id}>
                            <td>{index + 1}</td>
                            <td>{application.tourist.name}</td>
                            <td>{application.tourist.email}</td>
                            <td>{application.tourist.role}</td>
                            <td>
                                <a href={application.cvUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    View CV
                                </a>
                            </td>
                            <td className="flex gap-2">
                                <button
                                    onClick={() => handleAccept(application.tourist.email, application._id)}
                                    className="btn btn-sm hover:bg-green-400 hover:text-white"
                                >
                                    <FcAcceptDatabase className="text-lg" />
                                </button>
                                <button
                                    onClick={() => handleReject(application._id)}
                                    className="btn btn-sm hover:bg-red-400 hover:text-white"
                                >
                                    <FaTrashAlt className="text-lg" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCandidates;
