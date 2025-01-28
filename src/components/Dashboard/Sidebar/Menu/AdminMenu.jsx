import { RiImageAddFill } from "react-icons/ri";
import MenuItem from "./MenuItem";
import { FaUserCog, FaUsersCog } from 'react-icons/fa'

const AdminMenu = () => {
    return (
        <>
            <MenuItem icon={RiImageAddFill} label='Add Package' address='add-package' />
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
            <MenuItem icon={FaUsersCog} label='Manage Candidates' address='manage-candidates' />
        </>
    );
};

export default AdminMenu;