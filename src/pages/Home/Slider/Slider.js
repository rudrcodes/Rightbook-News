import React from 'react';
import slider1 from '../../../images/slider/slider1.png';
import slider2 from '../../../images/slider/slider2.png';
import slider3 from '../../../images/slider/slider3.png';
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
                        <SlideItem
                            sliderImg={slider1}
                            team1='India'
                            team2='Bangladesh'
                            match='Indian Premier League 2022'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem
                            sliderImg={slider2}
                            team1='India'
                            team2='Bangladesh'
                            match='Indian Premier League 2022'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideItem
                            sliderImg={slider3}
                            team1='India'
                            team2='Bangladesh'
                            match='Indian Premier League 2022'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Slider;
