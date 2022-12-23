import React from 'react';
import NavMenu from '../../shared/NavMenu/NavMenu';
import MatchTab from './MatchTab/MatchTab';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='px-3 py-5 2xl:px-14 lg:py-10 2xl:py-16'>
            <NavMenu />
            <h1 className='text-2xl lg:text-3xl 2xl:text-5xl text-white font-bold'>Important Matches</h1>
            <div className='mt-7 pb-2 border-b-2 border-[#20202D]'>
                <Slider />
            </div>
            <div className='mt-16'>
                <MatchTab />
            </div>
        </div>
    );
}

export default Home;
