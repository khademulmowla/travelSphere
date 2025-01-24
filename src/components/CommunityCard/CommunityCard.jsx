import { FacebookIcon, FacebookShareButton } from 'react-share';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CommunityCard = ({ story }) => {
    const { name, description, images, _id } = story || {};
    const navigate = useNavigate();
    const { user } = useAuth()
    const shareUrl = `${window.location.origin}/story/${_id}`;

    const handleShare = () => {
        if (!user) {
            navigate("/login");
        }
    };
    return (
        <div
            className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
        >
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='aspect-square w-full relative overflow-hidden rounded-xl'>
                    <img className='object-cover h-full w-full group-hover:scale-110 transition'

                        src={images && images.length > 0 ? images[0] : 'defaultImage.jpg'}
                        alt="Package Image" />
                    {/* <div className='absolute top-3 right-3'>{user?.displayName}</div> */}
                </div>
                <div className='font-semibold text-lg'>{user?.displayName}</div>
                <div className='font-semibold text-lg'>{name}</div>
                <div className='font-semibold text-lg'>{description}</div>
                {/* Share Button */}
                <div className="items-center mt-3">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={name}
                        hashtag="#TravelStory"
                        onClick={handleShare}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                    ><span className='px-2 text-xl font-semibold'>Share on</span>
                        <FacebookIcon size={28} round />
                    </FacebookShareButton>
                </div>
            </div>
        </div>
    );
};

export default CommunityCard;