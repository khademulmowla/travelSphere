import MenuItem from "./MenuItem";
import { FaUserCog } from 'react-icons/fa'

const AdminMenu = () => {
    return (
        <>
            <MenuItem icon={FaUserCog} label='Add Package' address='add-package' />
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
            <MenuItem icon={FaUserCog} label='Manage Candidates' address='manage-candidates' />
        </>
    );
};

export default AdminMenu;