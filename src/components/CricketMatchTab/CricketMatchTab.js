import React, { useState } from 'react';
import MatchItem from '../MatchItem/MatchItem';

const CricketMatchTab = () => {

    const [matchType, setMatchType] = useState('League');

    const matchData = [
        {
            title: 'Indian Premier League 2022',
            team1: 'Chennai Super Kings',
            team2: 'Mumbai Indians',
            time: 'Dec 14 - Dec 18. 9AM',
            venue: 'Chattogram, Zahur Ahmed Chowdhury Stadium',
            type: 'League',
            match: '33rd Match',
            score: [
                { teamName: 'CSK', wicket: '7', runs: '156', over: '19.6', win: true },
                { teamName: 'MI', wicket: '7', runs: '155', over: '19.6' }
            ],
            message: 'CSK won by 3v wkts '
        },
        {
            title: 'MALAYSIA QUADRANGULAR SERIES 2022-23',
            team1: 'Bahrain',
            team2: 'Singapore',
            time: 'Today. 9AM',
            venue: 'Bangi, Malaysia, UKM-YSD Cricket Oval',
            type: 'League',
            match: '4 Match',
            score: [
                { teamName: 'BHR', wicket: '8', runs: '145', over: '20', win: true },
                { teamName: 'SIN', wicket: '7', runs: '144', over: '20' }
            ],
            message: 'Match tied ( Bahrain won by Super Over )'
        },
        {
            title: 'India Tour Of Bangladesh',
            team1: 'India',
            team2: 'Bangladesh',
            time: 'Today. 9AM',
            venue: 'Bangi, Malaysia, UKM-YSD Cricket Oval',
            type: 'International',
            match: '4 Match',
            score: [
                { teamName: 'IND', wicket: '8', runs: '145', over: '20', win: true },
                { teamName: 'BNG', wicket: '7', runs: '144', over: '20' }
            ],
            message: 'Match tied ( Bahrain won the super over )',
        },
        {
            title: 'Malaysia Quadrangular Series 2022-23',
            team1: 'Bahrain',
            team2: 'Singapore',
            time: 'Today. 9AM',
            venue: 'Bangi, Malaysia, UKM-YSD Cricket Oval',
            type: 'International',
            match: '4 Match',
            score: [
                { teamName: 'BHR', wicket: '8', runs: '145', over: '20', win: true },
                { teamName: 'SIN', wicket: '7', runs: '144', over: '20' }
            ],
            message: 'Match tied ( Bahrain won by Super Over )'
        },
        {
            title: 'Capricorn Womens Tri-Series, 2022',
            team1: 'Zimbabwe Women',
            team2: 'Singapore',
            time: 'Today. 9AM',
            venue: 'Bangi, Malaysia, UKM-YSD Cricket Oval',
            type: 'Women',
            match: '4 Match',
            score: [
                { teamName: 'BHR', wicket: '8', runs: '145', over: '20', win: true },
                { teamName: 'SIN', wicket: '7', runs: '144', over: '20' }
            ],
            message: 'Zimbabwe Women won by 8 runs'
        },
        {
            title: 'Capricorn Womens Tri-Series, 2022',
            team1: 'Zimbabwe Women',
            team2: 'Singapore',
            time: 'Today. 9AM',
            venue: 'Bangi, Malaysia, UKM-YSD Cricket Oval',
            type: 'Women',
            match: '4 Match',
            score: [
                { teamName: 'BHR', wicket: '8', runs: '145', over: '20', win: true },
                { teamName: 'SIN', wicket: '7', runs: '144', over: '20' }
            ],
            message: 'Zimbabwe Women won by 8 runs'
        },
        {
            title: 'Capricorn Womens Tri-Series, 2022',
            team1: 'Zimbabwe Women',
            team2: 'Singapore',
            time: 'Today. 9AM',
            venue: 'Bangi, Malaysia, UKM-YSD Cricket Oval',
            type: 'Domestic',
            match: '4 Match',
            score: [
                { teamName: 'BHR', wicket: '8', runs: '145', over: '20', win: true },
                { teamName: 'SIN', wicket: '7', runs: '144', over: '20' }
            ],
            message: 'Zimbabwe Women won by 8 runs'
        },
    ];

    const matchs = matchData.filter(item => item.type === matchType);

    return (
        <div>
            <div className="pt-10">
                <div>
                    <div className='text-center lg:text-start'>
                        <button
                            onClick={() => setMatchType('League')}
                            className={`text-sm lg:text-base 2xl:text-2xl px-3 md:px-5 py-1 mr-2 md:mr-3 2xl:mr-6 border-2 lg:border-4 ${matchType === 'League' ? 'border-[#80D8FF] text-[#80D8FF]' : 'border-[#FFFFFF50] text-[#FFFFFF50]'} rounded-full`}
                        >League</button>
                        <button
                            onClick={() => setMatchType('International')}
                            className={`text-sm lg:text-base 2xl:text-2xl px-3 md:px-5 py-1 mr-2 md:mr-3 2xl:mr-6 border-2 lg:border-4 ${matchType === 'International' ? 'border-[#80D8FF] text-[#80D8FF]' : 'border-[#FFFFFF50] text-[#FFFFFF50]'} rounded-full`}
                        >International</button>
                        <button
                            onClick={() => setMatchType('Women')}
                            className={`text-sm lg:text-base 2xl:text-2xl px-3 md:px-5 py-1 mr-2 md:mr-3 2xl:mr-6 border-2 lg:border-4 ${matchType === 'Women' ? 'border-[#80D8FF] text-[#80D8FF]' : 'border-[#FFFFFF50] text-[#FFFFFF50]'} rounded-full`}
                        >Women</button>
                        <button
                            onClick={() => setMatchType('Domestic')}
                            className={`text-sm lg:text-base 2xl:text-2xl px-3 md:px-5 py-1 mr-2 md:mr-3 2xl:mr-6 border-2 lg:border-4 ${matchType === 'Domestic' ? 'border-[#80D8FF] text-[#80D8FF]' : 'border-[#FFFFFF50] text-[#FFFFFF50]'} rounded-full`}
                        >Domestic</button>
                    </div>
                </div>
                <div className='mt-10'>
                    <div>
                        {
                            matchs && matchs.map(match =>
                                <MatchItem
                                    match={match}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CricketMatchTab;
