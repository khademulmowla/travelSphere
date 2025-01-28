import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import coverImg from '../../../assets/images/cover.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "../../../components/Shared/Modal/EditProfileModal/EditProfileModal";

const Profile = () => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useRole();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    // console.log(role)

    if (loading || isRoleLoading) return <LoadingSpinner />;

    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
                <img
                    alt='cover photo'
                    src={coverImg}
                    className='w-full mb-4 rounded-t-lg h-56'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <img
                        alt='profile'
                        src={user?.photoURL}
                        className='mx-auto object-cover rounded-full h-24 w-24 border-2 border-white'
                    />
                    <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>{role}</p>
                    <p className='mt-2 text-xl font-medium text-gray-800'>User Id: {user.uid}</p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600'>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black'>{user.displayName}</span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black'>{user.email}</span>
                            </p>
                            <button
                                className="btn btn-sm btn-outline border-0 border-b-4"
                                onClick={() => setIsModalOpen(true)}>
                                Edit Profile
                            </button>
                        </div>
                        {role === "tourist" && (
                            <button
                                className="btn btn-sm btn-outline border-0 border-b-4 mt-2"
                                onClick={() => navigate("/dashboard/join-guide")}
                            >
                                Apply For Tour Guide
                            </button>
                        )}
                    </div>
                    {role === "admin" && (
                        <div className='mt-6 w-full text-center'>
                            <h3 className='text-lg font-semibold'>Admin Statistics</h3>
                            <div className='grid grid-cols-2 gap-4 text-gray-700 mt-2'>
                                <p>Total Payment: <span className='font-bold'>$XXX</span></p>
                                <p>Total Tour Guides: <span className='font-bold'>XX</span></p>
                                <p>Total Packages: <span className='font-bold'>XX</span></p>
                                <p>Total Clients: <span className='font-bold'>XX</span></p>
                                <p>Total Stories: <span className='font-bold'>XX</span></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isModalOpen && <EditProfileModal role={role} user={user} closeModal={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Profile;
