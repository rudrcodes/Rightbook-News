import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MatchItem from '../MatchItem/MatchItem';

const CricketMatchTab = () => {

    const [matchTypes, setMatchTypes] = useState([]);
    const [selectedMatchType, setSelectedMatchType] = useState(null);
    const [matches, setMatches] = useState(null);

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

    // secret rapid api key 
    const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

    // api url 
    const apiURL = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';



    const { data, isLoading, isError } = useQuery({
        queryKey: ['matches'],
        queryFn: async () => {
            const res = await axios.get(apiURL, {
                headers: {
                    'X-RapidAPI-Key': RAPID_API_KEY
                }
            });
            return res.data;
        }
    });

    useEffect(() => {
        // set match types
        setMatchTypes(data?.filters?.matchType);

        // set initial selected match type
        setSelectedMatchType(data?.filters?.matchType?.[0]);

        // set all matches
        setMatches(data?.typeMatches);

    }, [data]);

    //filter matches by match type
    const filterMatches = Array.isArray(matches) && matches.find(item => item.matchType === selectedMatchType);

    return (
        <div>
            <div className="pt-10">
                <div>
                    <div className='text-center lg:text-start'>
                        {
                            Array.isArray(matchTypes) && matchTypes.map((matchType, index) =>
                                <button
                                    key={index}
                                    onClick={() => setSelectedMatchType(matchType)}
                                    className={`text-sm lg:text-base 2xl:text-2xl px-3 md:px-5 py-1 mr-2 md:mr-3 2xl:mr-6 border-2 lg:border-4 ${selectedMatchType === matchType ? 'border-[#80D8FF] text-[#80D8FF]' : 'border-[#FFFFFF50] text-[#FFFFFF50]'} rounded-full`}
                                >{matchType}</button>
                            )
                        }

                    </div>
                </div>
                <div className='mt-10'>
                    <div>
                        {Array.isArray(filterMatches?.seriesMatches) &&
                            filterMatches?.seriesMatches.map(seriesMatch => seriesMatch?.seriesAdWrapper &&
                                seriesMatch?.seriesAdWrapper?.matches.map((match, index) => <MatchItem key={index} match={match} />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CricketMatchTab;
