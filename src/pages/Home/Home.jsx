import Carousel from "./Banner/Carousel";
import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";
import Tourism from "./Tourism/Tourism";
import TouristStory from "./TouristStory/TouristStory";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Tourism></Tourism>
            <TouristStory></TouristStory>
            <Featured></Featured>
            <ChooseUs></ChooseUs>

        </div>
    );
};

export default Home;