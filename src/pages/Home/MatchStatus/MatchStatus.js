import React, { useState } from 'react';

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
                    <ul className="flex text-white flex-wrap w-full gap-1.5 rounded-lg md:rounded-2xl overflow-hidden">
                        <li className='flex-1'>
                            <button onClick={() => setMatchCate('Cricket')} className={`${matchCate === 'Cricket' ? 'bg-violet-500' : 'bg-[#413F3F]'} w-full text-sm 2xl:text-lg py-3 md:py-5 text-center bg-violet-500 font-semibold`} type="button">Cricket</button>
                        </li>
                        <li className='flex-1'>
                            <button onClick={() => setMatchCate('Football')} className={`${matchCate === 'Football' ? 'bg-violet-500' : 'bg-[#413F3F]'} w-full text-sm 2xl:text-lg py-3 md:py-5 text-center font-semibold`} type="button">Football</button>
                        </li>
                        <li className='flex-1'>
                            <button onClick={() => setMatchCate('Tennis')} className={`${matchCate === 'Tennis' ? 'bg-violet-500' : 'bg-[#413F3F]'} w-full text-sm 2xl:text-lg py-3 md:py-5 text-center font-semibold`} type="button">Tennis</button>
                        </li>
                    </ul>
                </div>
                <div className='mt-6'>
                    {matchs.length <= 0 && <p className='text-center text-red-500 bg-red-100 py-3 text-lg font-semibold rounded-md'>No Match Today</p>}
                    <div className='overflow-x-auto'>
                        {matchs.length > 0 &&
                            <table className='table-fixed w-auto min-w-full rounded-2xl overflow-hidden'>
                                <thead className=''>
                                    <tr className='text-base 2xl:text-lg font-bold text-[#838181]'>
                                        <th className='py-3'>Match Status</th>
                                        <th className='py-3'>Match Type</th>
                                        <th className='py-3'>Match Format</th>
                                        <th className='py-3'>Team 1</th>
                                        <th className='py-3'></th>
                                        <th className='py-3'>Team 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matchs && matchs.map((match, index) =>
                                        <tr key={index} className='text-center odd:bg-[#343333] even:bg-[#29292E] text-sm 2xl:text-lg font-bold text-white'>
                                            <td className='py-7 px-2'>
                                                {match.status === 'Live' ? <span className='flex items-center justify-center gap-2 shadow-lg shadow-[#00000050] py-4 px-3 rounded-xl bg-[#ffffff12] text-[#FF7C7C]'>
                                                    <span className='block mt-1 w-3 h-3 bg-[#FF7C7C] rounded-full'></span>
                                                    Live
                                                </span> : <span className='block shadow-lg shadow-[#00000050] py-4 px-3 rounded-xl bg-[#ffffff12] text-[#8289C6]'>Pending</span>}

                                            </td>
                                            <td className='py-7 px-2'>
                                                <span className='block shadow-lg shadow-[#00000050] py-4 px-3 rounded-xl bg-[#171722] shadow-md'>{match?.type}</span>
                                            </td>
                                            <td className='py-7 px-2'>
                                                <span className='block py-4 px-3 rounded-xl bg-[#698B78]'>{match?.format}</span>
                                            </td>
                                            <td className='py-7 px-2'>{match?.team1}</td>
                                            <td className='py-7 px-2'>VS</td>
                                            <td className='py-7 px-2'>{match?.team2}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MatchStatus;
