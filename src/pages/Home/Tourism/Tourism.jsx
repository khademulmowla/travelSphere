import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../../../components/Card/Card";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const fetchPackages = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/random-packages`);
    return data;
};

const fetchGuides = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/random-tour-guides`);
    return data;
};

const Tourism = () => {
    const { data: packages = [], isLoading: loadingPackages } = useQuery({
        queryKey: ["randomPackages"],
        queryFn: fetchPackages,
    });

    const { data: guides = [], isLoading: loadingGuides } = useQuery({
        queryKey: ["randomTourGuides"],
        queryFn: fetchGuides,
    });

    return (
        <div className="container mx-auto py-8 px-8">
            <SectionTitle
                subHeading={"Every journey begins with a single step"}
                heading={"Travel Tale"}
            ></SectionTitle>
            <Tabs>
                <TabList>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                {/* Our Packages Tab */}
                <TabPanel>
                    {loadingPackages ? (
                        <p>Loading packages...</p>
                    ) : packages.length > 0 ? (
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
                    {loadingGuides ? (
                        <p>Loading tour guides...</p>
                    ) : guides.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {guides.map((guide) => (
                                <div key={guide._id} className="shadow-lg p-4 rounded-lg">
                                    <img src={guide.image} alt={guide.name} className="w-full h-48 object-cover rounded-lg" />
                                    <h3 className="text-xl font-bold">{guide.name}</h3>
                                    <p>{guide.experience} years of experience</p>
                                    <Link to={`/guideprofile/${guide._id}`} className="btn btn-outline border-0 border-b-4">Details
                                    </Link>
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
