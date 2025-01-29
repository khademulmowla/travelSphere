import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const JoinGuide = () => {
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()


    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target
        const title = form.title.value;
        const description = form.description.value;
        const cvUrl = form.cvUrl.value;

        const tourist = {
            name: user?.displayName,
            email: user?.email,
            role: 'tourist'
        }
        const applicationData = { title, description, cvUrl, tourist }
        console.log(applicationData)
        try {
            await axiosSecure.post('/applications', applicationData);
            toast.success('Application submitted successfully!');
        } catch (err) {
            if (err.response && err.response.status === 400) {
                toast.error(err.response.data.message);
            } else {
                toast.error('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Helmet>
                <title>TravelSphere | Join As Guide</title>
            </Helmet>
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Join as a Tour Guide</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold">Application Title:</label>
                        <input
                            name="title"
                            type="text"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Why do you want to be a Tour Guide?</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block font-semibold">CV Link:</label>
                        <input
                            name="cvUrl"
                            type="url"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500'
                    >
                        {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'Save & Continue'}
                    </button>
                </form>
            </div>
        </div>
    );
};


export default JoinGuide;