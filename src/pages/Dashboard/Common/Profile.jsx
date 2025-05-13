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
    console.log(user)
    const [role, isRoleLoading] = useRole();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    // console.log(role)

    if (loading || isRoleLoading) return <LoadingSpinner />;

    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>TravelSphere | Profile</title>
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
                    <p className='p-2 px-4 text-xs text-white bg-gray-800 rounded-full'>{role}</p>
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
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    className="btn btn-sm btn-outline border-0 border-b-4 w-full sm:w-auto"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Edit Profile
                                </button>

                                {role === "tourist" && (
                                    <button
                                        className="btn btn-sm btn-outline border-0 border-b-4 w-full sm:w-auto"
                                        onClick={() => navigate("/dashboard/join-guide")}
                                    >
                                        Apply For Tour Guide
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <EditProfileModal role={role} user={user} closeModal={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Profile;
