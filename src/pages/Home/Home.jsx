import { Helmet } from "react-helmet-async";
import Carousel from "./Banner/Carousel";
import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";
// import OverView from "./OverView/OverView";
import Tourism from "./Tourism/Tourism";
import TouristStory from "./TouristStory/TouristStory";
import Testimonial from "./Testimonial/Testimonial";
import TravelBlogs from "./TravelBlog/TravelBlogs";
import Stat from "./Stat/Stat";
import HowItWorks from "./HowItWorks/HowItWorks";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    TravelSphere | Home
                </title>
            </Helmet>
            <Carousel></Carousel>
            {/* <OverView></OverView> */}
            <Stat></Stat>
            <Tourism></Tourism>
            <TouristStory></TouristStory>
            <Featured></Featured>
            <ChooseUs></ChooseUs>
            <TravelBlogs></TravelBlogs>
            <Testimonial></Testimonial>
            <HowItWorks></HowItWorks>

        </div>
    );
};

export default Home;