import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Container from "../../components/Shared/Container";
import axios from "axios";
import Card from "../../components/Card/Card";

const Trips = () => {
    const { data: trips, isLoading } = useQuery({
        queryKey: ['trips'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/packages`)
            return data
        },
    })
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <Container>
            {
                trips && trips.length > 0 ? <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        trips.map(trip => <Card key={trip._id} trip={trip}></Card>)
                    }
                </div> : <p>No data is available</p>

            }
        </Container>
    );
};

export default Trips;