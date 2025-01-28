import featuredImg from '../../../assets/images/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white my-10 pt-8'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Find Your Desired Place"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 md:px-36 px-4 pt-12'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 space-y-1'>
                    <p className='uppercase font-semibold'>How can I get?</p>
                    <p className='w-full'>Discover the world with us! Whether you are seeking adventure, relaxation, or cultural immersion, we curate unforgettable travel experiences tailored to your dreams. Let us help you find the perfect destination for your next unforgettable journey.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>

        </div >
    );
};

export default Featured;