import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <div className="sticky top-0 z-50 opacity-90">
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;