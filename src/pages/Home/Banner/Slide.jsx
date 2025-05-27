import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Slide = ({ image, text, text2 }) => {
    return (
        <div
            className="w-full bg-center bg-cover h-[38rem] md:h-[30rem] sm:h-[24rem]"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-gray-800/70 px-4">
                <div className="text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                        {text}
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-300">
                        {text2}
                    </p>
                    <br />
                    <Link
                        to="/trips"
                        className="btn btn-outline w-[64px] mt-2 border-0 border-b-4 border-b-gray-200 text-white"
                    >
                        Track
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;
