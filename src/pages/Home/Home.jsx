import Carousel from "./Banner/Carousel";
import ChooseUs from "./ChooseUs/ChooseUs";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Featured></Featured>
            <ChooseUs></ChooseUs>

        </div>
    );
};

export default Home;