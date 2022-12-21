import React from 'react';
import videoThumbnail from '../../images/video-img.png';
import eventImg from '../../images/event-img.png';
import EventsItem from '../../components/EventsItem/EventsItem';

const Sidebar = () => {
    return (
        <aside className='border-l-4 border-[#20202D] px-5 lg:px-4 2xl:px-10 min-h-screen'>
            <div className='border-b-2 border-[#20202D] pb-8'>
                <h2 className='text-white text-xl 2xl:text-2xl font-bold py-5'>Popular Vidoes</h2>
                <div>
                    <img className='w-full h-auto' src={videoThumbnail} alt='Video Thumbnail' />
                </div>
            </div>
            <div>
                <h2 className='text-white text-xl 2xl:text-2xl font-bold py-5'>Recent Updates</h2>
                <div className='pr-4'>
                    <EventsItem img={eventImg} />
                    <EventsItem img={eventImg} />
                    <EventsItem img={eventImg} />
                    <EventsItem img={eventImg} />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
