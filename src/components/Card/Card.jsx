import { Link } from "react-router-dom";

const Card = ({ trip }) => {
    const { name, category, price, images, _id } = trip || {}
    return (
        <Link
            to={`/package/${_id}`}
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
                <div className='font-semibold text-xl'>{name}</div>
                <div className='text-lg'>Category: {category}</div>
                <div className='flex flex-row items-center gap-1'>
                    <p> Price: ${price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;