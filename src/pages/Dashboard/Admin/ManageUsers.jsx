import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Select from "react-select";
import { Helmet } from "react-helmet-async";

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
        setSearchTerm(e.target.value);
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div>
            <Helmet>
                <title>TravelSphere | Manage Users</title>
            </Helmet>
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:items-center my-4">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    All Users: {users.length}
                </h2>

                <input
                    type="text"
                    placeholder="Search by Name or Email..."
                    className="input input-bordered w-full md:w-72"
                    onChange={handleSearchChange}
                />

                <div className="w-full md:w-48">
                    <Select
                        options={roleOptions}
                        value={selectedRole}
                        onChange={setSelectedRole}
                        className="react-select-container"
                        classNamePrefix="react-select"
                    />
                </div>
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







