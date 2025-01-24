import Carousel from "./Banner/Carousel";
import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";
import Tourism from "./Tourism/Tourism";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Tourism></Tourism>
            <Featured></Featured>
            <ChooseUs></ChooseUs>

        </div>
    );
};

export default Home;