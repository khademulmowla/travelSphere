import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const TravelBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <section>
            <SectionTitle
                subHeading={"Check Latest Blogs"}
                heading={"Travel Blogs"}
            ></SectionTitle>
            <div className="container mx-auto px-8 text-center py-16 bg-gray-100">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col h-full"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                                <p className="text-gray-600 mt-2 flex-grow">{blog.description}</p>
                                <Link
                                    to={blog.link}
                                    target="_blank"
                                    className="btn btn-outline border-0 border-b-4 mt-4"
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
