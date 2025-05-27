import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaUserPlus, FaSearchLocation, FaCreditCard, FaComments } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <div className='px-8 py-12'>
            <SectionTitle
                subHeading={"Start Exploring in Minutes"}
                heading={"How TravelSphere Works"}
            ></SectionTitle>

            <hr className="border-t-2 border-gray-200 mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition">
                    <FaUserPlus className="text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">1. Sign Up</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Register as a tourist or guide using email or Google account.
                    </p>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition">
                    <FaSearchLocation className="text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">2. Explore</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Tourists can explore packages, choose guides, or apply to become a guide by submitting a CV.
                    </p>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition">
                    <FaCreditCard className="text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">3. Book & Pay</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Use Stripe for fast and secure online payments.
                    </p>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition">
                    <FaComments className="text-4xl mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">4. Connect</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Share stories and be part of the travel community.
                    </p>
                </div>
            </div>

            <hr className="border-t-2 border-gray-200 mt-12" />
        </div>
    );
};

export default HowItWorks;
