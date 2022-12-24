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

            </div>
        </div>
    );
}

export default FootballSchedules;
