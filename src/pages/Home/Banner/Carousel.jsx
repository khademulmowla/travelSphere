import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../../../assets/images/carousel1.jpg'
import bgimg2 from '../../../assets/images/carousel2.jpeg'
import bgimg3 from '../../../assets/images/carousel3.jpg'
const Carousel = () => {
    return (
        <div className='container pb-8 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Paths Less Traveled'
                        text2='Forge new memories, one trail at a time.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text='Chase the Sunset'
                        text2='Find your adventure, one sunset at a time.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Embrace New Horizons'
                        text2='Experience breathtaking journeys, one destination at a time.'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;