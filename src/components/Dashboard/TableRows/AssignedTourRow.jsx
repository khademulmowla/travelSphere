import { FcAcceptDatabase } from 'react-icons/fc';
import { RxCross1 } from 'react-icons/rx';

const AssignedTourRow = ({ assignedTour, refetch, handleStatusChange }) => {
    const { packageName, userName, startDate, price, status, _id } = assignedTour;

    // Handle Accept action
    const handleAccept = async () => {
        const isConfirmed = window.confirm("Are you sure you want to accept this tour?");
        if (isConfirmed) {
            await handleStatusChange(_id, "Accepted");
            refetch();
        }
    };

    // Handle Reject action
    const handleReject = async () => {
        const isConfirmed = window.confirm("Are you sure you want to reject this tour?");
        if (isConfirmed) {
            await handleStatusChange(_id, "Rejected");
            refetch();
        }
    };

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{packageName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{userName}</p>
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
                        className={`btn w-full sm:w-auto ${status === "pending" ? "bg-gray-300 cursor-not-allowed" : "hover:bg-green-400 hover:text-white"}`}
                        onClick={handleAccept}
                        disabled={status === "pending"}
                    >
                        <FcAcceptDatabase className="text-2xl mr-1" /> Accept
                    </button>
                    <button
                        className="btn w-full sm:w-auto hover:bg-red-400 hover:text-white"
                        onClick={handleReject}
                    >
                        <RxCross1 className="text-2xl mr-1" /> Reject
                    </button>
                </div>
            </td>

        </tr>
    );
};

export default AssignedTourRow;









// import { FcAcceptDatabase } from 'react-icons/fc';
// import { RxCross1 } from 'react-icons/rx';

// const AssignedTourRow = ({ assignedTour, refetch }) => {
//     const { packageName, userName, startDate, price, status } = assignedTour;
//     return (
//         <tr>
//             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                 <p className='text-gray-900 whitespace-no-wrap'>{packageName}</p>
//             </td>
//             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                 <p className='text-gray-900 whitespace-no-wrap'>{userName}</p>
//             </td>
//             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                 <p className='text-gray-900 whitespace-no-wrap'>{startDate}</p>
//             </td>
//             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                 <p className='text-gray-900 whitespace-no-wrap'>{price}</p>
//             </td>
//             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
//                 <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
//             </td>

//             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

//                 <button className="btn mr-2 hover:bg-green-400 hover:text-white"><FcAcceptDatabase
//                     className='text-2xl'></FcAcceptDatabase ></button>
//                 <button className="btn hover:bg-red-400 hover:text-white"><RxCross1 className='text-2xl'></RxCross1></button>

//                 {/* <DeleteModal handleDelete={handleDelete} isOpen={isOpen} closeModal={closeModal} /> */}
//             </td>
//         </tr>
//     );
// };

// export default AssignedTourRow;