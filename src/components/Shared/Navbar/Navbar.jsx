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
        <div className='navbar bg-[#c1ac28] text-white shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold'>TravelSphere</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/trips'>Trips</Link>
                    </li>
                    <li>
                        <Link to='/community'>Community</Link>
                    </li>
                    <li>
                        <Link to='/aboutus'>About Us</Link>
                    </li>

                    {!user && (
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    )}
                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#c1ac28] rounded-box w-52'
                        >

                            <li>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                            <div className='text-white text-start'>
                                <h3 className='block'>
                                    {user?.displayName || 'N/A'}
                                </h3>
                                <h3 className='block'>
                                    {user?.email || 'N/A'}
                                </h3>
                            </div>
                            <li className='mt-2'>
                                <button
                                    onClick={handleLogOut}
                                    className='bg-gray-800 hover:bg-gray-500 block text-center'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;