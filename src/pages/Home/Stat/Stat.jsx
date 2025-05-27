import CountUp from 'react-countup';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Stat = () => {
    return (
        <div className='px-8 py-12'>
            <SectionTitle
                subHeading={"Transforming Dreams into Journey"}
                heading={"Statsphere of TravelSphere"}
            ></SectionTitle>
            {/* Horizontal line at the top */}
            <hr className="border-t-2 border-gray-200 mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 bg-white dark:bg-gray-700  rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-base-300">
                    <p className="text-3xl font-semibold text-black dark:text-white">
                        <CountUp start={0} end={40000} duration={6} />+
                    </p>
                    <h3 className="text-lg font-thin text-black dark:text-white">happy traveller</h3>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-base-300">
                    <p className="text-3xl font-semibold text-black dark:text-white">
                        <CountUp start={0} end={24} duration={6} />/<CountUp start={0} end={7} duration={4} />
                    </p>
                    <h3 className="text-lg font-thin text-black dark:text-white">support</h3>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-base-300">
                    <p className="text-3xl font-semibold text-black dark:text-white">
                        <CountUp start={0} end={10} duration={6} />
                    </p>
                    <h3 className="text-lg font-thin text-black dark:text-white">years of experience</h3>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-base-300">
                    <p className="text-3xl font-semibold text-black dark:text-white">
                        <CountUp start={0} end={5000} duration={6} />+
                    </p>
                    <h3 className="text-lg font-thin text-black dark:text-white">Travel Stories Shared</h3>
                </div>
            </div>

            {/* Horizontal line at the bottom */}
            <hr className="border-t-2 border-gray-200 mt-12" />
        </div>
    );
};

export default Stat;