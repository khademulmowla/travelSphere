// import { Calendar } from 'react-date-range'
import { FaUserAlt, FaDollarSign, FaHiking, FaUserShield, FaSuitcase, FaWalking, FaBookOpen } from 'react-icons/fa'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../Shared/LoadingSpinner'

const AdminStatistics = () => {
    const axiosSecure = useAxiosSecure()
    // fetch stat data from server.
    const { data: statData = {}, isLoading } = useQuery({
        queryKey: ['admin-stat'],
        queryFn: async () => {
            const { data } = await axiosSecure('/admin-stat')
            return data
        },
    })
    const { totalUser, totalAdmin, totalGuide, totalTourist, totalPackage, totalstory } = statData || {}
    console.log(statData)
    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <div className='mt-12'>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-8 text-center">
                    Admin Panel: Key Statistics
                </h2>
                {/* small cards */}
                <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-grow'>
                    {/* Total Story */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-lime-600 to-lime-400 text-white shadow-blue-500/40`}
                        >
                            <FaBookOpen className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Total Story
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                {totalstory}
                            </h4>
                        </div>
                    </div>
                    {/* Total Packages */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
                        >
                            <FaSuitcase className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Total Package
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                {totalPackage}
                            </h4>
                        </div>
                    </div>
                    {/* Total Tourist */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-teal-600 to-teal-400 text-white shadow-pink-500/40`}
                        >
                            <FaHiking className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Total Tourist
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                {totalTourist}
                            </h4>
                        </div>
                    </div>
                    {/* Total Guide */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
                        >
                            <FaWalking className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Total Guide
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                {totalGuide}
                            </h4>
                        </div>
                    </div>
                    {/* Total Admin */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-fuchsia-600 to-fuchsia-400 text-white shadow-pink-500/40`}
                        >
                            <FaUserShield className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Total Admin
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                {totalAdmin}
                            </h4>
                        </div>
                    </div>

                    {/* Users Card */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
                        >
                            <FaUserAlt className='w-6 h-6 text-white' />
                        </div>
                        <div className='p-4 text-right'>
                            <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                                Total User
                            </p>
                            <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                                {totalUser}
                            </h4>
                        </div>
                    </div>
                </div>

                <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
                    {/*Sales Bar Chart */}
                    <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
                        {/* Chart goes here.. */}
                    </div>
                    {/* Calender */}
                    <div className=' relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden'>
                        {/* <Calendar color='#4cc718' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminStatistics
