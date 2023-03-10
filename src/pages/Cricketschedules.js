import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavMenu from "../shared/NavMenu/NavMenu";
import axios from "axios";
import { options } from "../apis/cricketApi";
import { matchRoutes } from "react-router-dom";
import { Icon } from "@iconify/react";
import { continueStatement, typeParameter } from "@babel/types";

const Cont = styled.div`
  /* background-color: red; */
  height: 100%;
  width: 100%;
`;
const Head = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 1.3rem;
  height: 3rem;
  font-weight: bolder;
  /* padding: 5px 0px; */
  background: #5e48e7;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px 5px 50px 5px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const PerMatch = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: yellow; */
  height: 100px;
  row-gap: 20px;
  @media (max-width: 768px) {
    margin-top: 90px;
  }
  & > h2 {
    background: #bab0f5;
    font-weight: bolder;
    border: 1px solid #000000;
    border-radius: 5px;
    width: 250px;
    /* display: inline; */
    padding: 5px 20px;
    /* height: 10px; */
    font-size: 1rem;
    text-align: center;
    /* margin-bottom: 15px; */
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  & > div {
    color: #fff;
    font-size: 15px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    span {
      color: gray;
      font-size: 12px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      font-size: 0.8rem;
      & div {
        margin-top: 2px;
        margin-bottom: 2px;
        /* background-color: red; */
      }
    }
  }
`;

export const Cricketschedules = () => {
  const [matchList, setMatchList] = useState([]);

  const cricketData = async () => {
    return axios
      .request(options)
      .then(function (response) {
        const arrTypeMatches = response.data.typeMatches;
        // console.log(arrTypeMatches);
        let finalMatchList = arrTypeMatches;
        // let finalMatchList = [];
        // let tempMatchList = [];
        // arrTypeMatches.map((ele) => {
        //   let data;
        //   ele.seriesMatches.map((el) => {
        //     data = {
        //       //  console.log(el.seriesAdWrapper.seriesName);
        //       // seriesName: el.match?.seriesName,
        //       InfoOFMatch: el.seriesAdWrapper?.matches,
        //       //   InfoOFMatch: el.seriesAdWrapper?.matches.map((elem) => {
        //       //     return {
        //       //       startDate: elem.matchInfo.startDate,
        //       //       endDate: elem.matchInfo.endDate,
        //       //       team1: elem.matchInfo.team1.teamName,
        //       //       team2: elem.matchInfo.team2.teamName,
        //       //       groundName: elem.matchInfo.venueInfo.ground,
        //       //       cityName: elem.matchInfo.venueInfo.city,
        //       //       timeZone: elem.matchInfo.venueInfo.timeZone,
        //       //     };
        //       //   }),
        //     };
        //   });
        //   tempMatchList.push(data);
        // });
        // finalMatchList = [...tempMatchList];
        // console.log(finalMatchList);
        // finalMatchList.map((el) => {
        //   el.seriesMatches.map((el) => {
        //     // console.log(el.seriesAdWrapper?.seriesName);
        //     console.log(el.seriesAdWrapper?.matches);
        //     el.seriesAdWrapper?.matches.map((ele) => {
        //       console.log(
        //         ele.matchInfo.team1.teamName,
        //         ele.matchInfo.team2.teamName
        //       );
        //     });
        //   });
        // });
        setMatchList(finalMatchList);
        // return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //dummy date
  const dummyData = [
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
    {
      date: "SAT, MAY 07 2022",
      time: "9:00 AM",
      tournament: "Finland tour of Denmark, 2022",
      teams: "Denmark vs Finland, 1st T20I",
      place: "Svanholm Park, Brondby",
      timeLocal: "02:00 GMT / 9:00 LOCAL",
    },
  ];
  useEffect(() => {
    cricketData();
    // setMatchList(dummyData);
    // console.log("inside");
  }, []);
  const dayCalc = (day) => {
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if (day === 7) {
      return week[0];
    }
    return week[day];
  };
  const milToDate = (mili) => {
    const date = new Date(Number(mili));
    console.log(date);
    // console.log(typeof mili);
    // console.log(date.toString());
    const dateFinal = `${dayCalc(date.getDay())} ,${date.getMonth() + 1} ${
      date.getDay() < 10 ? "0" + date.getDay() : date.getDay()
    } ${date.getFullYear()}`;
    return `${date.toString().slice(0, 3)}, ${date.toString().slice(4, 15)}`;
    // return dateFinal.toUpperCase();
  };
  milToDate();
  // matchList.map((ind) => {
  //   console.log(ind);
  // });
  // console.log(matchList);
  return (
    <div className="px-3 py-5 2xl:px-14 lg:py-10 2xl:py-16">
      <NavMenu />
      <Cont>
        <Head>
          Upcoming Matches{" "}
          <Icon
            style={{ marginLeft: "10px", fontSize: "2rem" }}
            icon="noto:cricket-game"
          />
        </Head>
        {matchList.map((ele) => {
          return ele.seriesMatches.map((match) =>
            !match.seriesAdWrapper ? (
              ""
            ) : (
              <PerMatch>
                <h2>
                  {milToDate(
                    match.seriesAdWrapper?.matches[0].matchInfo.startDate
                  ).toUpperCase()}
                </h2>
                {/* <h2>{match.seriesAdWrapper?.matches[0].matchInfo.startDate}</h2> */}
                {/* {match.seriesAdWrapper?.matches.map((ele) => (
                <h2>{ele.startDate}</h2>
              ))} */}
                <div>
                  <div>
                    <h4 style={{ fontWeight: "bolder" }}>
                      {match.seriesAdWrapper?.seriesName}
                    </h4>
                    <span>&nbsp;</span>
                  </div>
                  <div>
                    <h4>
                      {
                        match.seriesAdWrapper?.matches[0].matchInfo.team1
                          .teamName
                      }{" "}
                      vs{" "}
                      {
                        match.seriesAdWrapper?.matches[0].matchInfo.team2
                          .teamName
                      }
                    </h4>
                    <span>
                      {
                        match.seriesAdWrapper?.matches[0].matchInfo.venueInfo
                          .ground
                      }
                      ,
                      {
                        match.seriesAdWrapper?.matches[0].matchInfo.venueInfo
                          .city
                      }
                    </span>
                  </div>
                  <div>
                    <h4>
                      {
                        match.seriesAdWrapper?.matches[0].matchInfo.venueInfo
                          .timezone
                      }
                    </h4>
                    <span>
                      {
                        match.seriesAdWrapper?.matches[0].matchInfo.venueInfo
                          .timezone
                      }{" "}
                      /{" "}
                      {
                        match.seriesAdWrapper?.matches[0].matchInfo.venueInfo
                          .timezone
                      }
                    </span>
                  </div>
                  {/* {match.seriesAdWrapper?.matches.map((ele) => {
                  return (
                    <>
                      <div>
                        <h4>
                          {ele.matchInfo.team1.teamName} vs
                          {ele.matchInfo.team2.teamName}
                        </h4>
                        <span>
                          {ele.matchInfo.venueInfo.ground},
                          {ele.matchInfo.venueInfo.city}
                        </span>
                      </div>
                      <div>
                        <h4>{ele.matchInfo.venueInfo.timezone}</h4>
                        <span>
                          {ele.matchInfo.venueInfo.timezone} /{" "}
                          {ele.matchInfo.venueInfo.timezone}
                        </span>
                      </div>
                    </>
                  );
                })} */}
                </div>
              </PerMatch>
            )
          );
        })}
      </Cont>
    </div>
  );
};
