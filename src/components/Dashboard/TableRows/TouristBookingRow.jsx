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
    // // Handle Pay Function
    // const handlePay = () => {
    //     console.log('clicked')
    //     setIsOpen(true); // Open the modal
    //     console.log(isOpen)
    // }


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
                <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <button onClick={() => setIsOpen(true)} className="btn mr-2 hover:bg-green-400 hover:text-white"><FaAmazonPay className='text-2xl'></FaAmazonPay></button>
                <button onClick={handleDelete} className="btn hover:bg-red-400 hover:text-white"><FaTrashAlt className='text-2xl'></FaTrashAlt></button>
                <PurchaseModal bookingData={bookingData} closeModal={closeModal} isOpen={isOpen} refetch={refetch} />
            </td>

        </tr>
    );
};

export default TouristBookingRow;