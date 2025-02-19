import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";
import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
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
        <div className="py-8 px-8">
            <div className="w-1/2 mx-auto">
                <SectionTitle
                    subHeading={"Stories that unite, inspire."}
                    heading={"Shared Stories"}
                ></SectionTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                {stories?.map(story => (
                    <CommunityCard key={story._id} story={story} />
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={() => navigate('/community')}
                    className="btn btn-outline border-0 border-b-4 border-t-4 dark:border-b-gray-300 dark:border-t-gray-300 text-white"
                >
                    All Stories
                </button>
            </div>
        </div>
    );
};


export default TouristStory;