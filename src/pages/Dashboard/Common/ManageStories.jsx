import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Container from "../../../components/Shared/Container";
import StoryCard from "../../../components/StoryCard/StoryCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import axios from "axios";

const ManageStories = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: stories, isLoading, refetch } = useQuery({
        queryKey: ['stories', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/stories/${user?.email}`)
            console.log(data)
            return data
        },
        enabled: !!user?.email,
    });
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/story/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });

    }
    if (!user) {
        return <LoadingSpinner />;
    }
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <Container>
            <Helmet>
                <title>TravelSphere | Manage Story</title>
            </Helmet>
            {
                stories && stories.length > 0 ? <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        stories.map(story => <StoryCard key={story._id} story={story} handleDeleteItem={handleDeleteItem}></StoryCard>)
                    }
                </div> : <p>No data is available</p>

            }
        </Container>
    );
};

export default ManageStories;