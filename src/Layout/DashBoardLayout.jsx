import { Helmet } from 'react-helmet-async';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white'>
            <Helmet>
                <title>TravelSphere | Dashboard</title>
            </Helmet>
            {/* Left Side: Sidebar Component */}
            <Sidebar />
            {/* Right Side: Dashboard Dynamic Content */}
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>
                    {/* Outlet for dynamic contents */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;