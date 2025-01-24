import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ story, handleDeleteItem }) => {
    const navigate = useNavigate()
    console.log(story)
    const { name, description, images } = story || {}
    const handleEditItem = (story) => {
        navigate(`/dashboard/edit-story/${story._id}`);
    };
    return (
        <div
            className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
        >
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
      aspect-square 
      w-full 
      relative 
      overflow-hidden 
      rounded-xl
    '
                >
                    <img
                        className='
        object-cover 
        h-full 
        w-full 
        group-hover:scale-110 
        transition
      '
                        // src={image}
                        // alt='Plant Image'
                        src={images && images.length > 0 ? images[0] : 'defaultImage.jpg'} // Check for images and use default if empty
                        alt="Package Image"
                    />
                    <div
                        className='
      absolute
      top-3
      right-3
    '
                    ></div>
                </div>
                <div className='font-semibold text-lg'>{name}</div>
                <div className='font-semibold text-lg'>{description}</div>
                <div className='flex gap-2'>
                    <button
                        onClick={() => handleEditItem(story)}
                        className="btn btn-sm bg-blue-500 text-white"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteItem(story)}
                        className="btn btn-sm bg-red-500 text-white"
                    >
                        <FaTrashAlt className='text-lg' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;