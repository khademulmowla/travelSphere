import PropTypes from 'prop-types'
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const GuideRoute = ({ children }) => {
    const [role, isLoading] = useRole()
    if (isLoading) return <LoadingSpinner />
    if (role === "guide") return children
    return <Navigate to='/login' replace='true' />
}

GuideRoute.propTypes = {
    children: PropTypes.element,
}

export default GuideRoute;