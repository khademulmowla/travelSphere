import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import axios from 'axios';

const TravelBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <section className='py-8'>
            <SectionTitle
                subHeading={"Check Latest Blogs"}
                heading={"Travel Blogs"}
            ></SectionTitle>
            <div className="container mx-auto px-8 text-center py-8 bg-gray-100 dark:bg-gray-900 dark:text-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white dark:bg-gray-600 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col h-full"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{blog.title}</h3>
                                <p className="text-gray-600 dark:text-gray-200 mt-2 flex-grow">{blog.description}</p>
                                <Link
                                    to={blog.link}
                                    target="_blank"
                                    className="btn btn-outline border-0 border-b-4 dark:border-b-white dark:text-white mt-4"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravelBlogs;
