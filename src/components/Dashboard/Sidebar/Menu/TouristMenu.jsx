import { RiGuideFill } from "react-icons/ri";
import MenuItem from './MenuItem'
import { MdBookmarkAdded } from 'react-icons/md';
const TouristMenu = () => {


    return (
        <>
            <MenuItem icon={MdBookmarkAdded} label='My Bookings' address='my-bookings' />
            <MenuItem icon={RiGuideFill} label='Join As Guide' address='join-guide' />
        </>
    );
};

export default TouristMenu;