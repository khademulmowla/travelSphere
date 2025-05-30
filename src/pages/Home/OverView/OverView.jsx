import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import travelspherevideo from '../../../assets/video/travelsphere.mp4';

const OverView = () => {
    return (
        <section className="py-8 px-8 ">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Overview"}
            ></SectionTitle>
            <div className="container mx-auto text-center">
                <div className="flex justify-center mb-6">
                    {/* MP4 Video Embed */}
                    <video
                        className="rounded-lg"
                        width="560"
                        height="315"
                        controls
                        autoPlay
                        muted
                    >
                        <source src={travelspherevideo} type="video/mp4" />

                    </video>
                </div>
                {/* <Link
                    to={'/aboutus'}
                    className="btn btn-outline border-0 border-b-4 dark:border-b-gray-200 dark:text-white"
                >
                    See More
                </Link> */}
            </div>
        </section>
    );
};

export default OverView;
