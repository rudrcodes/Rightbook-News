import React from 'react';
import slider1 from '../../images/slider/slider1.png';
import slider2 from '../../images/slider/slider2.png';
import slider3 from '../../images/slider/slider3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import CricketSlideItem from '../CricketSlideItem/CricketSlideItem';
import 'swiper/css';
import 'swiper/css/pagination';
import './CricketSlider.css';

const CricketSlider = () => {

    return (
        <div >
            <div className='pb-4 border-b-2 border-[#FFFFFF80]'>
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    loop={true}
                >
                    <SwiperSlide>
                        <CricketSlideItem
                            sliderImg={slider1}
                            team1='India'
                            team2='Bangladesh'
                            match='Indian Premier League 2022'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CricketSlideItem
                            sliderImg={slider2}
                            team1='India'
                            team2='Bangladesh'
                            match='Indian Premier League 2022'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CricketSlideItem
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

export default CricketSlider;
