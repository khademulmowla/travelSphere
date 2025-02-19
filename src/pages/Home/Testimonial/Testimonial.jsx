import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import axios from 'axios';


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`);
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []);
    return (
        <section className='py-8'>
            <SectionTitle
                subHeading={"What Travellers Say"}
                heading={"Testimonial"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8'>{review.details}</p>
                            <h3 className='text-gray-800 dark:text-white text-2xl'>{review.name}</h3>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>

        </section>
    );
};

export default Testimonial;