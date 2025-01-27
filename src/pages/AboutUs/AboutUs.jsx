const AboutUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6 md:p-10">
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h3>

                <p className="text-gray-700 text-lg text-center mb-4">
                    Hello! I'm a passionate <span className="font-semibold">Web Developer</span>. My journey into <span className="font-semibold">web development</span> started out of curiosity, and now, it has become my passion.
                </p>

                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Projects I’ve Worked On</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        <span className="font-medium">Pet Adoption-</span>
                        <a className="underline text-blue-500" href="https://super-cranachan-b2e40e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            https://super-cranachan-b2e40e.netlify.app/
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Learning Vocabulary-</span>
                        <a className="underline text-blue-500" href="https://bespoke-kleicha-22ace7.netlify.app/" target="_blank" rel="noopener noreferrer">
                            https://bespoke-kleicha-22ace7.netlify.app/
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Dream Cricket Team-</span>
                        <a className="underline text-blue-500" href="https://lively-mooncake-5d3df7.netlify.app/" target="_blank" rel="noopener noreferrer">
                            https://lively-mooncake-5d3df7.netlify.app/
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Gadget Heaven-</span>
                        <a className="underline text-blue-500" href="https://neon-palmier-645615.netlify.app/" target="_blank" rel="noopener noreferrer">
                            https://neon-palmier-645615.netlify.app/
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Visa Solution-</span>
                        <a className="underline text-blue-500" href="https://assignment-10-af459.web.app/" target="_blank" rel="noopener noreferrer">
                            https://assignment-10-af459.web.app/
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Historical Artifact Tracker-</span>
                        <a className="underline text-blue-500" href="https://assignment-11-client-8495f.web.app/" target="_blank" rel="noopener noreferrer">
                            https://assignment-11-client-8495f.web.app/
                        </a>
                    </li>
                </ul>

                <h4 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Explore My Work</h4>
                <div className="flex justify-center gap-4">
                    <a href="https://github.com/khademulmowla" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-medium">GitHub</a>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;
