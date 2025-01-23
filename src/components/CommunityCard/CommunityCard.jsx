import React from 'react';

const CommunityCard = ({ story }) => {
    const { name, description, images } = story || {}
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
            </div>
        </div>
    );
};

export default CommunityCard;