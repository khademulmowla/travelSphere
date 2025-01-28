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
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 mt-4 text-xs sm:text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
                    >
                        Track
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;
