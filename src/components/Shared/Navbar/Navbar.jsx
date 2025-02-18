import { useContext } from 'react'
import logo from '../../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className="navbar bg-base-300 shadow-sm px-6 mx-auto">
            <div className="flex justify-between items-center w-full">
                <Link to="/" className="flex gap-2 items-center">
                    <img className="w-auto h-7" src={logo} alt="" />
                    <span className="font-bold">TravelSphere</span>
                </Link>

                <div className="lg:flex hidden items-center space-x-4">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/trips">Trips</Link></li>
                        <li><Link to="/community">Community</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        {!user && <li><Link to="/login">Login</Link></li>}
                    </ul>

                    {user && (
                        <div className="dropdown dropdown-end z-50">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div title={user?.displayName} className="w-10 rounded-full">
                                    <img
                                        referrerPolicy="no-referrer"
                                        alt="User Profile Photo"
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                            >
                                <li><Link to="/dashboard" className='font-semibold'>Dashboard</Link></li>
                                <div className="text-start">
                                    <h3 className="block">{user?.displayName || 'N/A'}</h3>
                                    <h3 className="block">{user?.email || 'N/A'}</h3>
                                </div>
                                <li className="mt-2">
                                    <button
                                        onClick={handleLogOut}
                                        className="bg-base-200 font-semibold hover:bg-blue-500 block text-center"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Mobile menu */}
                <div className="lg:hidden flex items-center">
                    <div className="dropdown dropdown-end z-50">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#c1ac28] rounded-box w-52"
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/trips">Trips</Link></li>
                            <li><Link to="/community">Community</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            {!user && <li><Link to="/login">Login</Link></li>}
                            {user && (
                                <li><Link to="/dashboard">Dashboard</Link></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
