import React from 'react';

const CricketSlideItem = ({ sliderImg, team1, team2, match }) => {
    return (
        <div className='overflow-hidden rounded-[30px] relative z-10'>
            <img
                src={sliderImg}
                className="w-full h-auto"
                alt='Slider thumbnail'
            />
            <span className="before:content-[' '] before:block before:absolute before:w-full before:h-full before:bg-[#00000075] before:top-0 before:left-0"></span>
            <div className='absolute bottom-0 left-0 w-full pl-5 py-2 2xl:pl-14 2xl:py-7'>
                <h1 className='text-white text-xl md:text-3xl 2xl:text-5xl font-normal'>{team1}<span className='text-4xl mx-2 italic'>vs</span>{team2}</h1>
                <p className='text-white text-xs md:text-sm mb-2 md:mb-4 2xl:mt-1'>{match}</p>
                <div className='flex'>
                    <span className="bg-violet-500 text-white text-xs 2xl:text-sm font-medium px-2.5 py-0.5 rounded flex items-center">
                        Live
                        <span className='w-2 h-2 2xl:w-3 2xl:h-3 duration-300 bg-red-500 inline-block rounded-full ml-2 animate-pulse'></span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CricketSlideItem;
