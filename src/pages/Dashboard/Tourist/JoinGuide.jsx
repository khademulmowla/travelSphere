import { useState } from "react";

const JoinGuide = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Join as a Tour Guide</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold">Application Title:</label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Why do you want to be a Tour Guide?</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block font-semibold">CV Link:</label>
                        <input
                            type="url"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Submit</button>
                </form>
            </div>

            {/* Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-bold">Application Successful!</h2>
                        <p>Your request has been submitted successfully.</p>
                        <button
                            className="btn btn-primary mt-4"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default JoinGuide;