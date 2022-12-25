import React from 'react';
import cricketBatBallImg from '../../../images/cricket-bat-ball.svg';

const FootballSchedules = () => {
    return (
        <div>
            <div className='bg-violet-500 text-white w-fit pl-10 rounded-tl-md rounded-br-full'>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold py-1 2xl:py-3 font-['Inter'] flex items-center gap-4 pr-20">
                    Upcoming Matches
                    <img src={cricketBatBallImg} />
                </h2>
            </div>
            {/* upcoming matches list */}
            <div>
                <div className='mt-10 px-4 bg-[#1f1f26] py-4 rounded-md shadow-lg'>
                    <div className='rounded-md w-fit mx-auto md:mx-0 bg-[#BAB0F5]'>
                        <h2 className='font-semibold uppercase text-xl 2xl:text-2xl py-2 2xl:py-3 px-11 text-[#000000] '>SUN, MAY 08 2022</h2>
                    </div>
                    <div className='mt-5 md:mt-8 grid text-center md:text-start gap-y-2 md:gap-1 grid-cols-1 md:grid-cols-5'>
                        <div className='col-span-2'>
                            <h2 className='text-white font-bold text-lg 2xl:text-xl'>Finland tour of Denmark, 2022</h2>
                        </div>
                        <div className='col-span-2'>
                            <p className='text-white text-lg 2xl:text-xl'>Denmark vs Finland, 1st T20I</p>
                            <p className='text-[#929295] text-sm'>
                                Svanholm Park, Brondby
                            </p>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-white text-lg 2xl:text-xl'>9:00 AM</p>
                            <p className='text-[#929295] text-sm'>
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
