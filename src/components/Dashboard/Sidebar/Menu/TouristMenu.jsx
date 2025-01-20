import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem'
import { useState } from 'react'
const TouristMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <>
            <MenuItem icon={BsFingerprint} label='My Bookings' address='my-bookings' />

            <div
                onClick={() => setIsOpen(true)}
                className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
            >
                <GrUserAdmin className='w-5 h-5' />

                <span className='mx-4 font-medium'>Join As a Tour Guide</span>
            </div>

            {/* <BecomeSellerModal closeModal={closeModal} isOpen={isOpen} /> */}
        </>
    );
};

export default TouristMenu;