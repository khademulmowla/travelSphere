import team1 from '../../../assets/images/con1.png'
import team2 from '../../../assets/images/con2.png'
import { motion } from "framer-motion"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const ChooseUs = () => {
    return (
        <section className="py-12 w-11/12 mx-auto">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Find Your Desired Place"}
            ></SectionTitle>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className='flex-1'>
                            <motion.img
                                src={team1}
                                animate={{ y: [50, 100, 50] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="max-w-sm w-48 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl" />
                            <motion.img
                                src={team2}
                                animate={{ x: [100, 150, 100] }}
                                transition={{ duration: 10, delay: 5, repeat: Infinity }}
                                className="max-w-sm w-48 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-500 shadow-2xl" />
                        </div>
                        <motion.h1
                            animate={{ x: 100 }}
                            transition={{ duration: 2, delay: 1, ease: "easeInOut", repeat: Infinity }}
                            className="text-4xl font-bold my-4"><motion.span
                                animate={{ color: ['#349f41', '#dbbe1d', '#077359'] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                            >Why Choose Us?</motion.span></motion.h1>
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