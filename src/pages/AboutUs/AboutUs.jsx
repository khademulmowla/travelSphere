import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div className="px-8 py-12 max-w-6xl mx-auto">
            <Helmet>
                <title>About | Tourist Guide</title>
            </Helmet>
            <div className="w-full px-4 py-4">
                <h2 className="text-2xl font-bold text-center md:text-3xl">
                    About TravelSphere
                </h2>
            </div>

            <hr className="border-t-2 border-gray-200 mb-8" />

            <div className="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed">
                <p>
                    <strong>TravelSphere</strong> is a travel platform that links travelers with trusted local guides. It provides carefully selected tour packages to help users plan trips easily and enjoy authentic experiences.
                </p>

                <p>
                    Using modern technology, TravelSphere offers easy access to tours, reliable guides, and real stories from travelers. It combines simplicity, cultural knowledge, and trustworthy service to make travel planning smooth and enjoyable.
                </p>

                <p>
                    Every user journey is secured with authentication, responsive design, and real-time updates. The platform supports three user roles:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Tourists:</strong> Browse exclusive tour packages, view detailed trip plans, share travel stories, and apply to become a tour guide.
                    </li>
                    <li>
                        <strong>Tour Guides:</strong> Showcase your services, manage assigned tours, and share your experiences with the community.
                    </li>
                    <li>
                        <strong>Admins:</strong> Monitor platform activity, manage users, review guide applications, and ensure a high-quality user experience.
                    </li>
                </ul>

                <p>
                    Whether you’re looking to plan your next adventure or share your expertise as a guide, TravelSphere makes the process easy, safe, and rewarding.
                </p>
            </div>

            <hr className="border-t-2 border-gray-200 mt-12" />
        </div>
    );
};

export default AboutUs;
