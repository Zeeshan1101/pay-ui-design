import React from "react";
import ClientItem from "./ClientItem";
const ClientList = () => {
  const [open, setOpen] = React.useState(null);

  return (
    <>
      <div className="w-full client-list">
        <div className="text-2xl font-bold md:text-3xl head">Per Client</div>
        <div className="flex w-full gap-2 mt-6 md:w-2/5 search">
          <input
            type="text"
            placeholder="Search Client"
            className=" bg-[#f1f1f1] py-4 px-5 text-sm grow"
          />
          <button className=" group normal">
            Search
            <svg
              className="group-hover:scale-110"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 11.1655L10 10.1655M5.75 10.6655C6.37378 10.6655 6.99145 10.5427 7.56775 10.304C8.14404 10.0652 8.66768 9.71536 9.10876 9.27428C9.54984 8.83321 9.89972 8.30957 10.1384 7.73327C10.3771 7.15698 10.5 6.53931 10.5 5.91553C10.5 5.29175 10.3771 4.67408 10.1384 4.09778C9.89972 3.52148 9.54984 2.99785 9.10876 2.55677C8.66768 2.11569 8.14404 1.76581 7.56775 1.5271C6.99145 1.28839 6.37378 1.16553 5.75 1.16553C4.49022 1.16553 3.28204 1.66597 2.39124 2.55677C1.50044 3.44757 1 4.65575 1 5.91553C1 7.17531 1.50044 8.38349 2.39124 9.27428C3.28204 10.1651 4.49022 10.6655 5.75 10.6655V10.6655Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="w-full mt-8 body">
          <table className="w-full font-bold text-left mb-14">
            <thead>
              <tr className="text-[#979797] uppercase text-sm">
                <th className="w-1/3 ">Client</th>
                <th># Send</th>
                <th className="hidden sm:block">End Date</th>
                <th>Interval</th>
                <th>Amount</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {Array(1, 2, 3, 4, 5).map((i) => (
                <ClientItem key={i} i={i} open={open} set={setOpen} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClientList;
