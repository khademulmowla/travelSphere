import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Select from "react-select";

const roleOptions = [
    { value: "", label: "All Roles" },
    { value: "admin", label: "Admin" },
    { value: "tourist", label: "Tourist" },
    { value: "guide", label: "Guide" },
];

const ManageUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [selectedRole, setSelectedRole] = useState(roleOptions[0]);

    // Debounce the search term manually
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500); // Adjust the debounce delay as needed

        // Cleanup function to clear the timeout if the user is typing again
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users", user?.email, debouncedSearchTerm, selectedRole.value],
        queryFn: async () => {
            const { data } = await axiosSecure.get(
                `/all-users/${user?.email}?search=${debouncedSearchTerm}&role=${selectedRole.value}`
            );
            return data;
        },
    });

    // Handle the change in the search field
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Set search term on each key press
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div>
            <div className='flex justify-between my-4 items-center'>
                <h2 className='text-3xl'>All Users: {users.length}</h2>

                <input
                    type="text"
                    placeholder="Search by Name or Email..."
                    className="input input-bordered w-72"
                    onChange={handleSearchChange} // Handle input change
                />

                <Select
                    options={roleOptions}
                    value={selectedRole}
                    onChange={setSelectedRole}
                    className="w-48"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;







// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

// const ManageUsers = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const { data: users = [], isLoading, refetch } = useQuery({
//         queryKey: ['users', user?.email],
//         queryFn: async () => {
//             const { data } = await axiosSecure(`/all-users/${user?.email}`);
//             return data;
//         },
//     });

//     if (isLoading) return <LoadingSpinner />;

//     return (
//         <div>
//             <div className='flex justify-evenly my-4'>
//                 <h2 className='text-3xl'>All Users: {users.length}</h2>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="table w-full table-zebra">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.role}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageUsers;
