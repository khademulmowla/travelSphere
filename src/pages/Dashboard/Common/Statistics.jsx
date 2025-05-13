import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AdminStatistics from '../../../components/Dashboard/Statistics/Adminstatistics';
import useRole from '../../../hooks/useRole';

const Statistics = () => {
    const [role, isLoading] = useRole()
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    if (role === 'tourist') return <Navigate to='/dashboard/my-bookings'></Navigate>
    if (role === 'guide') return <Navigate to='/dashboard/myassigntour'></Navigate>
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {
                role === 'admin' && <AdminStatistics />
            }
        </div>
    );
};

export default Statistics;