import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Shared/Heading';
import Container from '../../components/Shared/Container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import useAuth from '../../hooks/useAuth';
import BookModal from '../../components/Shared/Modal/BookModal/BookModal';
import toast from 'react-hot-toast';

const PackageDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useAuth()
    // let [isOpen, setIsOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [selectedGuide, setSelectedGuide] = useState('');
    const [modalOpen, setModalOpen] = useState(false);


    const { data: trip = {}, isLoding, refetch } = useQuery({
        queryKey: ['trip', id],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/package/${id}`)
            return data
        }
    })
    // for tour guide //
    const { data: tourGuides = [], isLoading } = useQuery({
        queryKey: ['tourGuides'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tour-guides`);
            return data;
        }
    });

    // for booking form and save a booking //
    const handleBooking = async (e) => {
        e.preventDefault();
        if (!user) {
            navigate('/login');
            return;
        }

        const bookingData = {
            packageId: id,
            packageName: trip.name,
            userName: user.displayName,
            userEmail: user.email,
            guideEmail: trip.guide.email,
            price: trip.price,
            startDate,
            guide: selectedGuide,
            status: 'pending'
        };
        console.log(bookingData)

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/books`, bookingData);
            setModalOpen(true);
            toast.success('Booking successfully')
        } catch (error) {
            console.error('Error booking package:', error);
        }
    };




    console.log()
    const { category, images, price, name } = trip
    if (isLoding) return <LoadingSpinner></LoadingSpinner>
    return (
        <Container>
            <Helmet>
                <title>Money Plant</title>
            </Helmet>

            {/* Image Section */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side Image */}
                {images && images.length > 0 ? (
                    <div className="lg:w-2/3 h-[500px] overflow-hidden rounded-xl">
                        <img
                            className="object-cover w-full h-full"
                            src={images[0]} // First image on the left
                            alt={`Image 1`}
                        />
                    </div>
                ) : (
                    <p>No images available</p>
                )}

                {/* Right Side Images */}
                <div className="flex flex-col gap-6 lg:w-1/3">
                    {images && images.length > 1 ? (
                        <div className="h-[245px] overflow-hidden rounded-xl">
                            <img
                                className="object-cover w-full h-full"
                                src={images[1]} // Second image on the top right
                                alt={`Image 2`}
                            />
                        </div>
                    ) : null}
                    {images && images.length > 2 ? (
                        <div className="h-[245px] overflow-hidden rounded-xl">
                            <img
                                className="object-cover w-full h-full"
                                src={images[2]} // Third image on the bottom right
                                alt={`Image 3`}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
            {/* for tour guide  */}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold">Meet Our Tour Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {tourGuides.map((guide) => (
                            <div key={guide._id} className="p-4 border rounded-lg shadow">
                                <img className="w-24 h-24 rounded-full mx-auto" src={guide.image} alt={guide.name} />
                                <h3 className="text-lg font-semibold text-center mt-2">{guide.name}</h3>
                                <p className="text-gray-500 text-center">{guide.email}</p>
                                <button
                                    onClick={() => navigate(`/guide/${guide._id}`)}
                                    className="mt-3 block w-full text-center text-white bg-blue-500 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}


            {/* Information Section */}
            <div className="mt-12">
                <Heading title={name} subtitle={`Category: ${category}`} />
                <hr className="my-6" />
                <p className="font-bold text-xl text-gray-500">Price: ${price}</p>
                <hr className="my-6" />
            </div>
            {/* booking form  */}

            <section className='p-6 bg-white rounded-md shadow-md'>
                <h2 className='text-lg font-semibold text-gray-700'>Place A Bid</h2>
                <form onSubmit={handleBooking}>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700'>Package Name</label>
                            <input type='text' disabled defaultValue={trip.name} className='block w-full px-4 py-2 border rounded-md' />
                        </div>
                        <div>
                            <label className='text-gray-700'>Tourist Name</label>
                            <input type='text' disabled defaultValue={user?.displayName} className='block w-full px-4 py-2 border rounded-md' />
                        </div>
                        <div>
                            <label className='text-gray-700'>Tourist Email</label>
                            <input type='email' disabled defaultValue={user?.email} className='block w-full px-4 py-2 border rounded-md' />
                        </div>
                        <div>
                            <label className='text-gray-700'>Price</label>
                            <input type='text' disabled defaultValue={trip.price} className='block w-full px-4 py-2 border rounded-md' />
                        </div>
                        <div>
                            <label className='text-gray-700'>Deadline</label>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} className='border p-2 rounded-md w-full' />
                        </div>
                    </div>
                    <div>
                        <label className='text-gray-700'>Select Tour Guide</label>
                        <select value={selectedGuide} onChange={(e) => setSelectedGuide(e.target.value)} className='w-1/2 mt-2 px-4 py-3 border rounded-md'>
                            <option value=''>Select Tour Guide</option>
                            {tourGuides.map(guide => (
                                <option key={guide._id} value={guide.name}>{guide.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button type='submit' className='px-8 py-2.5 text-white bg-gray-700 rounded-md hover:bg-gray-600'>
                            Book Now
                        </button>
                    </div>
                </form>
            </section>
            {modalOpen && (
                <BookModal onClose={() => setModalOpen(false)}>
                    <p>Your booking is confirmed. You can track it on the My Bookings page.</p>
                    <button onClick={() => navigate('/dashboard/my-bookings')} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
                        Go to My Bookings
                    </button>
                </BookModal>
            )}

        </Container>

    );
};

export default PackageDetails;