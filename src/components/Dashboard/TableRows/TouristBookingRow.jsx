import React from 'react';
import { FaAmazonPay, FaPaypal, FaTrashAlt } from 'react-icons/fa';

const TouristBookingRow = () => {
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>NAME</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>GUIDE NAME</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>DATE</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>PRICE</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>STATUS</p>
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