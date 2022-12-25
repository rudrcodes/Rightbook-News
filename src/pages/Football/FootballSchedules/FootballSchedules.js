import React from 'react';
import cricketBatBallImg from '../../../images/cricket-bat-ball.svg';

const FootballSchedules = () => {
    return (
        <div>
            <div className='bg-violet-500 text-white w-fit pl-10 rounded-tl-md rounded-br-full'>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold py-3 font-['Inter'] flex items-center gap-4 pr-20">
                    Upcoming Matches
                    <img src={cricketBatBallImg} />
                </h2>
            </div>
            {/* upcoming matches list */}
            <div>
                <div className='mt-10 px-4 bg-[#1f1f26] py-4 rounded-md shadow-lg'>
                    <div className='rounded-md w-fit bg-[#BAB0F5]'>
                        <h2 className='font-semibold uppercase text-2xl py-3 px-11 text-[#000000] '>SUN, MAY 08 2022</h2>
                    </div>
                    <div className='mt-8 grid grid-cols-5'>
                        <div className='col-span-2'>
                            <h2 className='text-white font-bold text-xl'>Finland tour of Denmark, 2022</h2>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-white text-xl'>Denmark vs Finland, 1st T20I</p>
                            <p className='text-[#929295] text-base'>
                                Svanholm Park, Brondby
                            </p>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white text-xl'>9:00 AM</p>
                            <p className='text-[#929295] text-base'>
                                02:00 GMT / 9:00 LOCAL
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 px-4 bg-[#1f1f26] py-4 rounded-md shadow-lg'>
                    <div className='rounded-md w-fit bg-[#BAB0F5]'>
                        <h2 className='font-semibold uppercase text-2xl py-3 px-11 text-[#000000] '>SUN, MAY 08 2022</h2>
                    </div>
                    <div className='mt-8 grid grid-cols-5'>
                        <div className='col-span-2'>
                            <h2 className='text-white font-bold text-xl'>Finland tour of Denmark, 2022</h2>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-white text-xl'>Denmark vs Finland, 1st T20I</p>
                            <p className='text-[#929295] text-base'>
                                Svanholm Park, Brondby
                            </p>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white text-xl'>9:00 AM</p>
                            <p className='text-[#929295] text-base'>
                                02:00 GMT / 9:00 LOCAL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FootballSchedules;
