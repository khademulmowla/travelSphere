import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OverView = () => {
    return (
        <section className="bg-gray-100 py-12 px-6 sm:px-12 md:px-24">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold text-gray-800 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                >
                    Overview of Our TravelSphere
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, delay: 0.6 }}
                >
                    Discover the best travel experiences. From famous landmarks to hidden gems, explore all
                    that our platform has to offer.
                </motion.p>
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
                    className="btn btn-outline border-0 border-b-4"
                >
                    See More
                </Link>
            </div>
        </section>
    );
};

export default OverView;
