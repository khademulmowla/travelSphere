import CountUp from 'react-countup';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Stat = () => {
    return (
        <div className='px-8 py-12'>
            <SectionTitle
                subHeading={"Transforming Dreams into Journeys"}
                heading={"Travel Legacy"}
            ></SectionTitle>
            {/* Horizontal line at the top */}
            <hr className="border-t-2 border-gray-200 mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <p className="text-3xl font-semibold text-black">
                        <CountUp start={0} end={40000} duration={6} />+
                    </p>
                    <h3 className="text-lg font-thin text-black">happy traveller</h3>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <p className="text-3xl font-semibold text-black">
                        <CountUp start={0} end={24} duration={6} />/<CountUp start={0} end={7} duration={4} />
                    </p>
                    <h3 className="text-lg font-thin text-black">support</h3>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <p className="text-3xl font-semibold text-black">
                        <CountUp start={0} end={10} duration={6} />
                    </p>
                    <h3 className="text-lg font-thin text-black">years of experience</h3>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-teal-50">
                    <p className="text-3xl font-semibold text-black">
                        <CountUp start={0} end={98} duration={6} />%
                    </p>
                    <h3 className="text-lg font-thin text-black">visa approval rate</h3>
                </div>
            </div>

            {/* Horizontal line at the bottom */}
            <hr className="border-t-2 border-gray-200 mt-12" />
        </div>
    );
};

export default Stat;