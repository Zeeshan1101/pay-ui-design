import React from "react";

const LastMonthStats = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-3 px-4 py-2 bg-white md:w-max lg:w-3/5 rounded-2xl md:flex-row shadow-2 month-info">
        <div className=" lg:whitespace-nowrap">Last 30 Days:</div>
        <div className="flex flex-col w-full gap-1 text-center text-white md:text-left md:flex-row">
          <div className="paid bg-[#48C446] p-2 py-3 grow-[2]  leading-tight rounded-lg">
            <div className="text-xs uppercase title">Paid</div>
            <div className="value">&#8364;24.000</div>
          </div>
          <div className="pending bg-[#BDBDBD] p-2 py-3  grow-[6] leading-tight rounded-lg">
            <div className="text-xs uppercase title">pending</div>
            <div className="value">&#8364;41.000</div>
          </div>
          <div className="paid bg-[#EC615B] p-2 py-3  grow-[8] leading-tight rounded-lg">
            <div className="text-xs uppercase title">overdue</div>
            <div className="value">&#8364;65.600</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastMonthStats;
