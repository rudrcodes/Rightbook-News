import React from 'react';
import CricketSlider from '../../../components/CricketSlider/CricketSlider';
import CricketMatchTab from '../../../components/CricketMatchTab/CricketMatchTab';
import NavMenu from '../../../shared/NavMenu/NavMenu';

const CricketMatches = () => {
    return (
        <>
        <NavMenu rootRoute={'/cricket'}/>
            <div className='mb-5'>
                <h1 className='text-2xl lg:text-3xl 2xl:text-5xl text-white font-bold'>Important Matches</h1>
            </div>
            <CricketSlider />
            <CricketMatchTab />
        </>
    );
}

export default CricketMatches;
