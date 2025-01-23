import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import Container from "../../components/Shared/Container";

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