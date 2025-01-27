import Carousel from "./Banner/Carousel";
import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";
import OverView from "./OverView/OverView";
import Tourism from "./Tourism/Tourism";
import TouristStory from "./TouristStory/TouristStory";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <OverView></OverView>
            <Tourism></Tourism>
            <TouristStory></TouristStory>
            <Featured></Featured>
            <ChooseUs></ChooseUs>

        </div>
    );
};

export default Home;