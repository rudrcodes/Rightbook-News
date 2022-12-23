import React, { useState } from 'react';
import MatchItem from '../../../components/MatchItem/MatchItem';

const MatchStatus = () => {

    const [matchCate, setMatchCate] = useState('Cricket');

    const matchData = [
        { match: 'Cricket', status: 'Live', type: 'Domestic', format: 'ODI', team1: 'Afghanistan', team2: 'Pakistan' },
        { match: 'Cricket', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'Bangladesh', team2: 'Afghanistan' },
        { match: 'Cricket', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'India', team2: 'Bangladesh' },
        { match: 'Football', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'Argentina', team2: 'Brasil' },
        { match: 'Football', status: 'Live', type: 'Domestic', format: 'ODI', team1: 'Switzerland', team2: 'Netherland' },
        { match: 'Football', status: 'Pending', type: 'Domestic', format: 'ODI', team1: 'India', team2: 'Pakistan' },
    ];

    const matchs = matchData.filter(item => item.match === matchCate);

    return (
        <div>
            <div className="">
                <div>
                    <div>
                        <button className='text-2xl px-5 py-1 mr-6 border-4 border-[#FFFFFF50] text-[#FFFFFF50] rounded-full'>League</button>
                        <button className='text-2xl px-5 py-1 mr-6 border-4 border-[#FFFFFF50] text-[#FFFFFF50] rounded-full'>International</button>
                        <button className='text-2xl px-5 py-1 mr-6 border-4 border-[#FFFFFF50] text-[#FFFFFF50] rounded-full'>Women</button>
                        <button className='text-2xl px-5 py-1 mr-6 border-4 border-[#FFFFFF50] text-[#FFFFFF50] rounded-full'>Domestic</button>
                    </div>
                    {/* <ul className="flex text-white flex-wrap w-full gap-1.5 rounded-lg md:rounded-2xl overflow-hidden">
                        <li className='flex-1'>
                            <button onClick={() => setMatchCate('Cricket')} className={`${matchCate === 'Cricket' ? 'bg-violet-500' : 'bg-[#413F3F]'} w-full text-sm 2xl:text-lg py-3 md:py-5 text-center bg-violet-500 font-semibold`} type="button">Cricket</button>
                        </li>
                        <li className='flex-1'>
                            <button onClick={() => setMatchCate('Football')} className={`${matchCate === 'Football' ? 'bg-violet-500' : 'bg-[#413F3F]'} w-full text-sm 2xl:text-lg py-3 md:py-5 text-center font-semibold`} type="button">Football</button>
                        </li>
                        <li className='flex-1'>
                            <button onClick={() => setMatchCate('Tennis')} className={`${matchCate === 'Tennis' ? 'bg-violet-500' : 'bg-[#413F3F]'} w-full text-sm 2xl:text-lg py-3 md:py-5 text-center font-semibold`} type="button">Tennis</button>
                        </li>
                    </ul> */}
                </div>
                <div className='mt-10'>
                    <div>
                        <MatchItem />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MatchStatus;
