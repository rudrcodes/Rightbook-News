import React from 'react';
import { Link } from 'react-router-dom';

const MatchItem = ({ match }) => {

    const { seriesName, startDate, endDate, stateTitle, matchDesc, team1, team2, venueInfo, status } = match.matchInfo;
    const matchScore = match?.matchScore;

    console.log(match?.matchInfo);

    const wonTeamCheck = (winingTeam, team) => {
        const splitString = winingTeam.split(" ");
        if (splitString[0] === team) {
            return true;
        } else {
            return false;
        }
    }

    const matchStartEndDate = (startTime, endTime) => {
        const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        //match start time to date and month
        const startDate = new Date(parseInt(startTime));
        const startMonth = monthArr[startDate.getMonth()];
        const startDateMonth = `${startMonth} ${startDate.getDate()}`;

        //match end time to date and month
        const endDate = new Date(parseInt(endTime));
        const endMonth = monthArr[endDate.getMonth()];
        const endDateMonth = `${endMonth} ${endDate.getDate()}`;

        //current date and month
        const currentDate = new Date();
        const currentMonth = monthArr[currentDate.getMonth()];
        const currentDateMonth = `${currentMonth} ${currentDate.getDate()}`;

        if (startDateMonth === currentDateMonth) {
            return 'Today';
        } else {
            return `${startDateMonth} - ${endDateMonth}`;
        }

    }

    return (
        <div className='mb-7'>
            <div className='bg-violet-500 text-white pl-5 rounded-tl-md rounded-br-full'>
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold py-3 font-['Inter']">{seriesName}</h2>
            </div>
            <div className="mt-7 rounded-lg bg-[#D9D9D912] px-4 py-3 ml-3 font-['Inter'] 2xl:max-w-[720px]">
                <p>
                    <span className='text-xl 2xl:text-2xl text-white font-normal'>{team1?.teamName}</span>
                    <span className='mx-2.5 text-[#F5A023] text-xl 2xl:text-2xl'>vs</span>
                    <span className='text-xl 2xl:text-2xl text-white font-normal'>{team2?.teamName}</span>
                    <span className='mx-2.5 text-[#827E7E] text-sm 2xl:text-base font-normal'>{matchDesc}</span>
                </p>
                <p className='text-[#827E7E] my-2 text-sm 2xl:text-base font-normal'>{matchStartEndDate(startDate, endDate)} at {venueInfo?.city}, {venueInfo?.ground}</p>
                <div className='rounded-r-lg shadow-md p-3 bg-[#D9D9D929] w-fit text-xl'>
                    <p className={`flex text-base 2xl:text-xl ${wonTeamCheck(stateTitle, team1?.teamSName) ? 'text-[#35A863]' : 'text-white'}`}>
                        <span className='uppercase w-16'>{team1?.teamSName}</span>
                        {matchScore?.team1Score?.inngs1?.runs &&
                            <span>{matchScore?.team1Score?.inngs1?.runs}-{matchScore?.team1Score?.inngs1?.wickets} ( {matchScore?.team1Score?.inngs1?.overs} Ovs )</span>
                        }
                    </p>
                    <p className={`flex text-base 2xl:text-xl ${wonTeamCheck(stateTitle, team2?.teamSName) ? 'text-[#35A863]' : 'text-white'}`}>
                        <span className='uppercase w-16'>{team2?.teamSName}</span>
                        {matchScore?.team2Score?.inngs1?.runs &&
                            <span>{matchScore?.team2Score?.inngs1?.runs}-{matchScore?.team2Score?.inngs1?.wickets} ( {matchScore?.team2Score?.inngs1?.overs} Ovs )</span>
                        }
                    </p>
                </div>
                <p className='mt-4 text-[#4A90E2] font-normal text-base 2xl:text-xl ml-3'>{status}</p>
                <div className='text-end'>
                    <Link className='text-sm 2xl:text-lg ml-auto text-white flex items-center w-fit'>
                        Get More Info
                        <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 14L14 10L10 6L8.6 7.4L10.2 9H6V11H10.2L8.6 12.6L10 14ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z" fill="#F8F8F8" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MatchItem;
