import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";
import { Typewriter } from "react-simple-typewriter";
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
        <div className="pt-12 px-6">
            <div className="w-1/2 mx-auto py-2">
                <h2 className="text-3xl font-bold text-center">
                    <Typewriter
                        words={['Shared Stories']}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1500}
                    />
                </h2>
                <p className="text-center text-gray-700">
                    <Typewriter
                        words={[
                            'Stories that unite, inspire, and transform.'
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                {stories?.map(story => (
                    <CommunityCard key={story._id} story={story} />
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={() => navigate('/community')}
                    className="btn btn-outline border-0 border-b-4 border-t-4"
                >
                    All Stories
                </button>
            </div>
        </div>
    );
};


export default TouristStory;