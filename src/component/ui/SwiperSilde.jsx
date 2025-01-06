import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


export default function SwiperSilde() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay, A11y]}
            // spaceBetween={50}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            loop={true} 
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            effect='fade'
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='relative'
        >
            <SwiperSlide>
                <div className='overflow-hidden relative pb-[35%]'>
                    <img 
                        src='https://res.cloudinary.com/drwvgummu/image/upload/v1736162480/Frame_3_etozsj.jpg' 
                        alt=''
                        className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                    />
                </div>
                <div className='inner absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]'>
                    <strong className='text-4xl text-white'>
                        Timeless Denim, Timeless Style
                    </strong>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='overflow-hidden relative pb-[35%]'>
                    <img 
                        src='https://res.cloudinary.com/drwvgummu/image/upload/v1736162480/Frame_3_etozsj.jpg' 
                        alt=''
                        className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                    />
                </div>
                <div className='inner absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%]'>
                    <strong className='text-4xl text-white'>
                    Tweed, Tailored for You
                    </strong>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

