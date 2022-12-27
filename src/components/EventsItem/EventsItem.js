import React from "react";
import { Link } from "react-router-dom";

const EventsItem = ({ img, name, events, category, bets }) => {
  return (
    <div
      className="!bg-cover mb-3.5 rounded-[21px] relative"
      style={{
        background: `linear-gradient(180.78deg, rgba(0, 0, 0, 0.7) 31.5%, rgba(37, 0, 73, 0.31) 65.93%, #000000 99.33%), url(${img})`,
        height: "100px",
        width: "300px",
      }}
    >
      <div className="py-0 pl-3 lg:pl-4 2xl:pl-11">
        <h4
          className="font-['BM-HANNA']  lg:text-3xl mb-3 2xl:text-[40px] text-white leading-normal"
          style={{ fontSize: "15px" }}
        >
          {name}
        </h4>
        <p
          className="text-base font-bold text-[#FFFFFF80]"
          style={{ fontSize: "15px" }}
        >
          {category}
        </p>
        <p
          className="text-lg font-semibold text-white"
          style={{ fontSize: "15px" }}
        >
          Today Events: {events}
        </p>
        <p className="text-lg font-semibold text-white">Bets: {bets}</p>
        <Link className="flex items-center text-white gap-2 font-semibold font-sm absolute right-3.5 bottom-3.5">
          Open
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EventsItem;
