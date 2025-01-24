import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import Card from "../../../components/Card/Card";
const Tourism = () => {
    const [packages, setPackages] = useState([]);
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        // Fetch random 3 packages
        axios.get(`${import.meta.env.VITE_API_URL}/random-packages`)
            .then(res => setPackages(res.data))
            .catch(err => console.error(err));

        // Fetch random 6 tour guides
        axios.get(`${import.meta.env.VITE_API_URL}/random-tour-guides`)
            .then(res => setGuides(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mx-auto py-8">
            <Tabs>
                <TabList>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                {/* Our Packages Tab */}
                <TabPanel>
                    {packages.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {packages.map((trip) => (
                                <Card key={trip._id} trip={trip} />
                            ))}
                        </div>
                    ) : (
                        <p>No packages available</p>
                    )}
                </TabPanel>

                {/* Meet Our Tour Guides Tab */}
                <TabPanel>
                    {guides.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {guides.map((guide) => (
                                <div key={guide._id} className="shadow-lg p-4 rounded-lg">
                                    <img src={guide.image} alt={guide.name} className="w-full h-48 object-cover rounded-lg" />
                                    <h3 className="text-xl font-bold">{guide.name}</h3>
                                    <p>{guide.experience} years of experience</p>
                                    <button
                                        onClick={() => navigate(`/guide/${guide._id}`)}
                                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                                    >
                                        Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No tour guides available</p>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Tourism;