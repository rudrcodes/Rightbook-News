import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CricketMatchItem from '../CricketMatchItem/CricketMatchItem';

const CricketMatchTab = () => {

    const [matchTypes, setMatchTypes] = useState([]);
    const [selectedMatchType, setSelectedMatchType] = useState(null);
    const [matches, setMatches] = useState(null);

    // secret rapid api key 
    const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

    // api url 
    const apiURL = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';

    // use query for data fetching
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
                                seriesMatch?.seriesAdWrapper?.matches.map((match, index) => <CricketMatchItem key={index} match={match} />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CricketMatchTab;
