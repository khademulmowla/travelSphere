import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";

const Community = () => {
    const { data: stories, isLoading } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/stories`)
            return data
        },
    })
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <Container>
            <Helmet>
                <title>
                    TravelSphere | Community
                </title>
            </Helmet>
            <div className="w-full px-4 py-4">
                <h2 className="text-2xl font-bold text-center md:text-3xl">
                    --Our Traveler’s Community--
                </h2>
                <p className="text-xl text-center text-gray-700 dark:text-gray-300 mt-4">
                    Explore shared stories from fellow travelers and get inspired for your next adventure. <br />Join our community to connect, share, and learn from real experiences around the world.
                </p>
            </div>
            {
                stories && stories.length > 0 ? <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        stories.map(story => <CommunityCard key={story._id} story={story}></CommunityCard>)
                    }
                </div> : <p>No data is available</p>

            }
        </Container>
    );
};

export default Community;