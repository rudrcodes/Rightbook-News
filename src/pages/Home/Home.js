import React from 'react';
import MatchStatus from './MatchStatus/MatchStatus';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='px-3 py-5 2xl:px-14 lg:py-10 2xl:py-16'>
            <h1 className='text-2xl lg:text-3xl 2xl:text-5xl text-white font-bold'>Important Matches</h1>
            <div className='mt-7 pb-6 border-b-2 border-[#20202D]'>
                <Slider />
            </div>
            <div className='mt-16'>
                <MatchStatus />
            </div>
        </div>
    );
}

export default Home;
