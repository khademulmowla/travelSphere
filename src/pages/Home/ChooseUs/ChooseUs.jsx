import { Link } from 'react-router-dom';
import team1 from '../../../assets/images/choose us.png'

import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const ChooseUs = () => {
    return (
        <section className="py-8 px-8">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Find Your Desired Service"}
            ></SectionTitle>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className='flex-1'>
                            <img
                                src={team1}
                                className="max-w-sm w-48 md:w-full rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-gray-700 shadow-2xl mx-auto lg:mx-0"
                            />

                        </div>
                        <h1 className="text-3xl font-bold my-4">Why choose us?</h1>
                        <p className="mt-4">
                            Find out why we lead the travel document industry enabling travelers to fly with ease.
                        </p>
                        <Link to='/trips' className="btn btn-outline border-0 border-b-4 dark:border-b-white dark:hover:bg-gray-500 dark:text-white">
                            Find Trips →
                        </Link>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-base-100 p-8 rounded-lg shadow-md text-center">
                            <div className="mb-4">
                                <i className="fas fa-clock text-4xl text-black"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-black">Fast and hassle-free</h3>
                            <p className="font-thin mt-2 text-black">
                                Enjoy a far simpler process than dealing with foreign governments.
                            </p>
                        </div>
                        <div className="bg-base-300 p-8 rounded-lg shadow-md text-center">
                            <div className="mb-4">
                                <i className="fas fa-shield-alt text-4xl text-black"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-black">Secure and Safe</h3>
                            <p className="font-thin mt-2 text-black">
                                All your information is always protected with best-in-class security.
                            </p>
                        </div>
                        <div className="bg-base-300 p-8 rounded-lg shadow-md text-center">
                            <div className="mb-4">
                                <i className="fas fa-file-alt text-4xl text-black"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-black">Get Approved</h3>
                            <p className="font-thin mt-2 text-black">
                                We have a 98% visa approval rate. Our team is committed to your success!
                            </p>
                        </div>
                        <div className="bg-base-100 p-8 rounded-lg shadow-md text-center">
                            <div className="mb-4">
                                <i className="fas fa-question-circle text-4xl text-black"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-black">Awesome support</h3>
                            <p className="font-thin mt-2 text-black">
                                Don’t worry! <br /> Our customer support is ready to help you 24/7.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChooseUs;