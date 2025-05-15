import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Container from "../../components/Shared/Container";
import axios from "axios";
import Card from "../../components/Card/Card";
import { Helmet } from "react-helmet-async";

const Trips = () => {
    const [sortOrder, setSortOrder] = useState('asc');

    const { data: trips, isLoading } = useQuery({
        queryKey: ['trips', sortOrder], // Re-fetch data when sortOrder changes
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/packages?sort=${sortOrder}`);
            return data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    return (
        <Container>
            <Helmet>
                <title>TravelSphere | Trips</title>
            </Helmet>

            <div className="w-full px-4 py-4">
                <h2 className="text-2xl font-bold text-center md:text-3xl">
                    --Explore Our Trips--
                </h2>
                <p className="text-xl text-center text-gray-700 mt-4 dark:text-gray-300">
                    Choose from a wide range of curated trips, designed to fit every type of traveler.
                    Whether you are looking for a quick getaway or a month-long adventure, we have got something for everyone.
                </p>
            </div>

            {/* Sorting dropdown */}
            <div className="flex justify-center md:justify-end mb-4">
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-2 border rounded-md text-gray-700 dark:bg-gray-700 dark:text-white"
                >
                    <option value="asc">Sort by Price: Low to High</option>
                    <option value="desc">Sort by Price: High to Low</option>
                </select>
            </div>

            {/* Trips grid */}
            {
                trips && trips.length > 0 ? (
                    <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            trips.map(trip => <Card key={trip._id} trip={trip}></Card>)
                        }
                    </div>
                ) : <p>No data is available</p>
            }
        </Container>
    );
};

export default Trips;
