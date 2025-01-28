import MenuItem from './MenuItem'
import { FaTasks } from 'react-icons/fa';
const TourGuideMenu = () => {
    return (
        <>
            <MenuItem icon={FaTasks} label='My Assigned Tour' address='myassigntour' />
        </>
    );
};

export default TourGuideMenu;