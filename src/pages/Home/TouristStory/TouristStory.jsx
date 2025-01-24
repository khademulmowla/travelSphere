import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";
const TouristStory = () => {
    const navigate = useNavigate();
    const { data: stories, isLoading } = useQuery({
        queryKey: ['random-stories'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/random-stories`);
            return data;
        },
    });

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="pt-12">
            <h2 className="text-2xl font-semibold text-center">Tourist Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                {stories?.map(story => (
                    <CommunityCard key={story._id} story={story} />
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={() => navigate('/community')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                >
                    All Stories
                </button>
            </div>
        </div>
    );
};


export default TouristStory;