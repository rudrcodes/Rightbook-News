import React from 'react';
import sliderImg from '../../../images/slider1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SlideItem from '../../../components/SlideItem/SlideItem';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

const Slider = () => {
    const pagination = {

    }
    return (
        <div>
            <div className='rounded-[30px]'>
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    loop={true}
                >
                    <SwiperSlide>
                        <SlideItem sliderImg={sliderImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem sliderImg={sliderImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem sliderImg={sliderImg} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Slider;
