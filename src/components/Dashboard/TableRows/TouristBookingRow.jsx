import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';
import PurchaseModal from '../../Shared/Modal/PurchaseModal/PurchaseModal';
// import PurchaseModal from '../../Shared/Modal/PurchaseModal/PurchaseModal';

const TouristBookingRow = ({ bookingData, refetch }) => {
    console.log(bookingData)
    const { packageName, price, startDate, guide, status, _id } = bookingData || {}
    const axiosSecure = useAxiosSecure();
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    // Handle Delete Function
    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/books/${_id}`)
                    .then(res => {
                        console.log(res.data)

                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "The booking has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the booking.",
                            icon: "error"
                        });
                        console.error("Delete Error:", error);
                    });
            }
        });
    };



    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{packageName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{guide}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{startDate}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{price}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className={`text-gray-900 whitespace-no-wrap px-2 py-1 rounded 
        ${status === "pending" ? "bg-blue-300" :
                        status === "in-review" ? "bg-yellow-300" :
                            status === "Accepted" ? "bg-green-300" :
                                status === "Rejected" ? "bg-red-300" : ""}`}>
                    {status}
                </p>
            </td>

            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex flex-col sm:flex-row gap-2">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn w-full sm:w-auto hover:bg-green-400 hover:text-white flex items-center justify-center"
                    >
                        <FaAmazonPay className="text-2xl mr-1" /> Pay
                    </button>
                    <button
                        onClick={handleDelete}
                        className="btn w-full sm:w-auto hover:bg-red-400 hover:text-white flex items-center justify-center"
                    >
                        <FaTrashAlt className="text-2xl mr-1" /> Delete
                    </button>
                </div>
                <PurchaseModal bookingData={bookingData} closeModal={closeModal} isOpen={isOpen} refetch={refetch} />
            </td>
        </tr>
    );
};

export default TouristBookingRow;