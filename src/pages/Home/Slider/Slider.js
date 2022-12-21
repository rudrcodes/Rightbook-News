import React from 'react';
import { Link } from 'react-router-dom';
import sliderImg from '../../../images/slider1.png';

const Slider = () => {
    return (
        <div>
            <div className='rounded-[30px] overflow-hidden relative z-10'>
                <img src={sliderImg} className='w-full h-auto' alt='Slider thumbnail' />
                <div className='absolute bottom-0 left-0 w-full pl-5 py-2 2xl:pl-14 2xl:py-7 bg-gradient-to-b from-[transparent] to-[#201616]'>
                    <h1 className='text-white text-xl md:text-3xl 2xl:text-5xl font-normal'>Juventus <span className='text-lg italic'>VS</span> Real Madrid</h1>
                    <p className='text-white text-xs md:text-sm mb-2 md:mb-4 2xl:mt-1'>UEFA Champions League Football</p>
                    <Link className='text-sm md:text-base inline-block px-6 py-1 rounded-lg bg-violet-500 text-white'>View</Link>
                </div>
                <div className='absolute top-1 right-0 2xl:top-[15px] 2xl:right-[15px] flex'>
                    <span class="bg-red-500 text-white text-xs 2xl:text-sm font-medium px-2.5 py-0.5 rounded flex items-center">
                        <span className='w-2 h-2 2xl:w-3 2xl:h-3 duration-300 bg-white inline-block rounded-full mr-2 animate-pulse'></span>
                        Live
                    </span>
                    <span class="bg-[#00000040] text-white text-xs 2xl:text-sm font-medium mr-2 px-2.5 py-0.5 rounded flex items-center">
                        22 : 30
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Slider;
