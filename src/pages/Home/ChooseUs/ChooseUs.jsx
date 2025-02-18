import team1 from '../../../assets/images/choose us.png'
// import team2 from '../../../assets/images/con2.png'
// import { motion } from "framer-motion"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import { Typewriter } from 'react-simple-typewriter';


const ChooseUs = () => {
    return (
        <section className="py-12 px-8">
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
                                className="max-w-sm w-48 md:w-full rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl mx-auto lg:mx-0"
                            />

                        </div>
                        <h1 className="text-3xl font-bold my-4">Why choose us?</h1>
                        <p className="mt-4">
                            Find out why we lead the travel document industry enabling travelers to fly with ease.
                        </p>
                        <button className="btn bg-black text-white mt-2 px-6 py-2 rounded-full">
                            Apply Now →
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-teal-100 p-8 rounded-lg shadow-md text-center">
                            <div className="mb-4">
                                <i className="fas fa-clock text-4xl text-black"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-black">Fast and hassle-free</h3>
                            <p className="font-thin mt-2 text-black">
                                Enjoy a far simpler process than dealing with foreign governments.
                            </p>
                        </div>
                        <div className="bg-blue-100 p-8 rounded-lg shadow-md text-center">
                            <div className="mb-4">
                                <i className="fas fa-shield-alt text-4xl text-black"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-black">Secure and Safe</h3>
                            <p className="font-thin mt-2 text-black">
                                All your information is always protected with best-in-class security.
                            </p>
                        </div>
                        <div className="bg-blue-100 p-8 rounded-lg shadow-md text-center">
                            <div className="mb-4">
                                <i className="fas fa-file-alt text-4xl text-black"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-black">Get Approved</h3>
                            <p className="font-thin mt-2 text-black">
                                We have a 98% visa approval rate. Our team is committed to your success!
                            </p>
                        </div>
                        <div className="bg-teal-100 p-8 rounded-lg shadow-md text-center">
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