import React from 'react';
import videoThumbnail from '../../images/video-img.png';
import EventsItem from '../../components/EventsItem/EventsItem';
import football from '../../images/football.jpg';
import cricket from '../../images/cricket.jpg';
import bitcoin from '../../images/bitcoin.jpg';
import ufc from '../../images/ufc.jpeg';

const Sidebar = () => {

    const events = [
        { id: 1, img: ufc, name: 'UFC', events: 18, bets: 180, category: 'Sport' },
        { id: 2, img: cricket, name: 'Cricket', events: 18, bets: 180, category: 'Sport' },
        { id: 3, img: football, name: 'Football', events: 18, bets: 180, category: 'Sport' },
        { id: 4, img: bitcoin, name: 'Bitcoin', events: 18, bets: 180, category: 'Crypto' }
    ];

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
                    {
                        events.map(event =>
                            <EventsItem
                                key={event.id}
                                img={event.img}
                                name={event.name}
                                category={event.category}
                                events={10}
                                bets={event.bets}
                            />
                        )
                    }
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
