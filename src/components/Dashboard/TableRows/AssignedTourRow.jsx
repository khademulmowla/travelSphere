import { FcAcceptDatabase } from 'react-icons/fc';
import { RxCross1 } from 'react-icons/rx';

const AssignedTourRow = ({ assignedTour, refetch }) => {
    const { packageName, userName, startDate, price, status } = assignedTour;
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
                <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                <button className="btn mr-2 hover:bg-green-400 hover:text-white"><FcAcceptDatabase
                    className='text-2xl'></FcAcceptDatabase ></button>
                <button className="btn hover:bg-red-400 hover:text-white"><RxCross1 className='text-2xl'></RxCross1></button>

                {/* <DeleteModal handleDelete={handleDelete} isOpen={isOpen} closeModal={closeModal} /> */}
            </td>
        </tr>
    );
};

export default AssignedTourRow;