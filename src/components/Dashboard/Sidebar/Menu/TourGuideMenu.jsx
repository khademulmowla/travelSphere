import { MdHomeWork } from 'react-icons/md'
import MenuItem from './MenuItem'
const TourGuideMenu = () => {
    return (
        <>
            <MenuItem icon={MdHomeWork} label='My Assigned Tour' address='myassigntour' />
            {/* <MenuItem
                icon={MdOutlineManageHistory}
                label='Manage Orders'
                address='manage-orders'
            /> */}
        </>
    );
};

export default TourGuideMenu;