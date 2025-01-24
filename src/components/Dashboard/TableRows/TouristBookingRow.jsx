import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';

const TouristBookingRow = ({ bookingData, refetch }) => {
    console.log(bookingData)
    const { packageName, price, startDate, guide, status } = bookingData || {}


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

                <button className="btn mr-2 hover:bg-green-400 hover:text-white"><FaAmazonPay className='text-2xl'></FaAmazonPay></button>
                <button className="btn hover:bg-red-400 hover:text-white"><FaTrashAlt className='text-2xl'></FaTrashAlt></button>

                {/* <DeleteModal handleDelete={handleDelete} isOpen={isOpen} closeModal={closeModal} /> */}
            </td>
        </tr>
    );
};

export default TouristBookingRow;