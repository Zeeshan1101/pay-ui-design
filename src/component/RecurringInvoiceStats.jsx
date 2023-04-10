import React from "react";

const RecurringInvoiceStats = () => {
  return (
    <>
      <div className="recurring-head">
        <div className="flex items-end justify-between w-full">
          <div className="text-3xl font-bold md:text-5xl heading">
            Recurring Invoices
          </div>
          <div className="head-action">
            <button className="group normal text-white hover:bg-[#2A316A] ">
              <span className="hidden md:block">Add Recurring Invoice</span>
              <svg
                className="transition-all group-hover:scale-110"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.03369 6.87793H13.0337M7.03369 12.8779V0.87793"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-12 md:grid-cols-3 md:gap-8 recurring-body">
        <div className="bg-[#F9F9FB]  pt-9 text-center">
          <div className="text-sm font-bold uppercase px-3  text-[#979797]">
            Recurring Invoices
          </div>
          <div className="pb-8 text-4xl font-bold pt-11">215</div>
        </div>
        <div className="bg-[#F9F9FB]  pt-9 text-center">
          <div className="text-sm  font-bold uppercase px-3 break-words text-[#979797]">
            Recurring Revenue
          </div>
          <div className="pb-8 text-4xl font-bold pt-11">
            &#8364;2500<span className="text-xs md:text-base">/month</span>
          </div>
        </div>
        <div className="bg-[#F9F9FB]  pt-9 text-center">
          <div className="text-sm font-bold uppercase px-3 break-words text-[#979797]">
            Recurring Overdue
          </div>
          <div className="pb-8 text-4xl font-bold pt-11">22</div>
        </div>
      </div>
    </>
  );
};

export default RecurringInvoiceStats;
