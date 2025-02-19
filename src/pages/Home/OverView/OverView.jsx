import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OverView = () => {
    return (
        <section className="py-12 px-8 ">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Overview"}
            ></SectionTitle>
            <div className="container mx-auto text-center">
                <div className="flex justify-center mb-6">
                    {/* YouTube Video Embed */}
                    <iframe
                        className="rounded-lg"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DG1BrderCRg?si=ut8ID_vHqwYjhZc8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <Link
                    to={'/aboutus'}
                    className="btn btn-outline border-0 border-b-4 dark:border-b-gray-200 dark:text-white"
                >
                    See More
                </Link>
            </div>
        </section>
    );
};

export default OverView;
