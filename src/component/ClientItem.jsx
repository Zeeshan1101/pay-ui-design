import React from "react";

const ClientItem = ({ open, set, i }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <img src="client.png" alt="client" className="w-10 h-10 " />
            <span>MadeByMack</span>
          </div>
        </td>
        <td>25</td>
        <td>24-10-2024</td>
        <td>3/month</td>
        <td>&#8364;3000</td>
        <td className="relative">
          <button
            className="flex items-center hover:bg-[#2A316A] justify-center w-full gap-2 p-0 py-4 text-black bg-white border-2 group hover:text-white"
            onClick={() => (open !== i || open === null ? set(i) : set(null))}>
            Edit
            <svg
              className="transition-all group-hover:scale-110"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.04144 13.1655L12.065 8.22613C13.3669 7.6428 13.3669 6.68826 12.065 6.10492L1.04144 1.16553"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`absolute edit-menu w-40 z-40 translate-y-full py-4 ${
              open === i ? "flex" : "hidden"
            } flex-col gap-2 bottom-4 bg-white px-3 md:right-auto right-0 shadow-[0px_4px_26px_rgba(0,0,0,0.125)]`}>
            <div>Pause</div>
            <div>Duplicate</div>
            <div>Edit</div>
            <div>Terminate</div>
            <div>Skip next date</div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ClientItem;
