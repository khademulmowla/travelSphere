import { BsFingerprint } from 'react-icons/bs'
import { RiGuideFill } from "react-icons/ri";
import MenuItem from './MenuItem'
const TouristMenu = () => {


    return (
        <>
            <MenuItem icon={BsFingerprint} label='My Bookings' address='my-bookings' />
            <MenuItem icon={RiGuideFill} label='Join As Guide' address='join-guide' />
        </>
    );
};

export default TouristMenu;