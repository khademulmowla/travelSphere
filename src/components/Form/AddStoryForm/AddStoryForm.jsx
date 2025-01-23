import { TbFidgetSpinner } from "react-icons/tb";


const AddStoryForm = ({ handleSubmit, uploadImage, setUploadImage, loading }) => {
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='name' className='block text-gray-600'>
                                Trip Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                                name='name'
                                id='name'
                                type='text'
                                placeholder='Story Title'
                                required
                            />
                        </div>
                        {/* Description */}
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                placeholder='Write your story here...'
                                className='block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 '
                                name='description'
                            ></textarea>
                        </div>

                    </div>
                    <div className='space-y-6 flex flex-col'>
                        <div className='p-4 w-full m-auto rounded-lg flex-grow'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            onChange={e => {
                                                const files = Array.from(e.target.files);
                                                const newImages = files.map(file => ({
                                                    image: file,
                                                    url: URL.createObjectURL(file),
                                                }));
                                                setUploadImage(newImages);
                                            }}
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            name='images'
                                            id='images'
                                            accept='image/*'
                                            multiple
                                        />
                                        <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>
                                            {uploadImage.length > 0 ? `${uploadImage.length} files selected` : 'Select Images'}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {uploadImage.length > 0 && (
                            <div className='flex flex-wrap gap-5 items-center'>
                                {uploadImage.map((img, index) => (
                                    <div key={index} className='flex gap-2 items-center'>
                                        <img className='w-20 h-20 object-cover rounded' src={img.url} alt={img.image.name} />
                                        <p>{img.image.name} - {img.image.size} Bytes</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            type='submit'
                            className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500'
                        >
                            {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'Save & Continue'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddStoryForm;