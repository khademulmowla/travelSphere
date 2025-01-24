import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import Heading from '../../components/Shared/Heading';
import Button from '../../components/Shared/Button/Button';
import Container from '../../components/Shared/Container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import useAuth from '../../hooks/useAuth';

const PackageDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useAuth()
    let [isOpen, setIsOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date())

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


    // const closeModal = () => {
    //     setIsOpen(false)
    // }
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
                <div className="flex justify-between">
                    <p className="font-bold text-3xl text-gray-500">Price: ${price}</p>
                    <Button label="Book Now" />
                </div>
                <hr className="my-6" />
            </div>
            {/* booking form  */}

            <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Place A Bid
                </h2>
                <img
                    className='rounded-full'
                    height='30'
                    width='30'
                    alt='Avatar'
                    referrerPolicy='no-referrer'
                    src={user?.photoURL}
                />

                <form>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Tourist Name
                            </label>
                            <input
                                id='touristName'
                                type='text'
                                name='name'
                                disabled
                                defaultValue={user?.displayName}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Tourist Email
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                Price
                            </label>
                            <input
                                id='price'
                                type='text'
                                name='price'
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-700'>Select Tour Guide</label>
                        <select required className='w-2/6 mt-2 px-4 py-3 border focus:outline-lime-500 rounded-md bg-white' name='guide'>
                            <option value=''>Select Tour Guide</option>
                            {tourGuides.map((guide) => (
                                <option key={guide._id} value={guide.name}>{guide.name}</option>
                            ))}
                        </select>

                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                        >
                            Place Bid
                        </button>
                    </div>
                </form>
            </section>
        </Container>

    );
};

export default PackageDetails;