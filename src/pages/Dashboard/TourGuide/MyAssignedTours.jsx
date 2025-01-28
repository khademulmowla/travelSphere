import { Helmet } from "react-helmet-async";
import AssignedTourRow from "../../../components/Dashboard/TableRows/AssignedTourRow";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const MyAssignedTours = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: assignedTours = [], isLoading, refetch } = useQuery({
        queryKey: ['assignedTours', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/guide-assignments/${user?.email}`);
            return data;
        }
    });

    // Handle status change (Accept/Reject)
    const handleStatusChange = async (tourId, newStatus) => {
        try {
            await axiosSecure.patch(`/update-status/${tourId}`, { status: newStatus });
            refetch();  // Refetch to update the UI
        } catch (error) {
            console.error("Error updating status", error);
        }
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <>
            <Helmet>
                <title>My Bookings</title>
            </Helmet>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                                            Package
                                        </th>
                                        <th className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                                            Tourist Name
                                        </th>
                                        <th className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                                            Tour Date
                                        </th>
                                        <th className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                                            Price
                                        </th>
                                        <th className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                                            Status
                                        </th>
                                        <th className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignedTours.map(assignedTour => (
                                        <AssignedTourRow
                                            key={assignedTour._id}
                                            assignedTour={assignedTour}
                                            refetch={refetch}
                                            handleStatusChange={handleStatusChange}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAssignedTours;

