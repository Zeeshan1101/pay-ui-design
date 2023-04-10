import { useState } from "react";
import Nav from "./component/Nav";
import LastMonthStats from "./component/LastMonthStats";
import UserBox from "./component/UserBox";
import RecurringInvoiceStats from "./component/RecurringInvoiceStats";
import ClientList from "./component/ClientList";
import Logo from "./component/Logo";
import NavLinks from "./component/NavLinks";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`fixed  transition-all grid w-full h-full bg-white mobile-nav place-items-center ${
          open ? " right-0 z-50" : "opacity-0 left-0"
        }`}>
        <div className="fixed top-3 right-3">
          <button
            className="cursor-pointer bg-[#f1f1f1] w-max rounded-2xl p-3"
            onClick={() => setOpen(!open)}>
            <svg
              className="rotate-180 "
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.45129 17.5412L7.97129 11.0212C8.74129 10.2512 8.74129 8.99117 7.97129 8.22117L1.45129 1.70117"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <NavLinks />
      </div>
      <section className="page ">
        <div className="absolute top-0 right-0 w-full h-36">
          <div className="relative w-full h-full">
            <div className="absolute -z-0 top-0 right-0 bg-[url('/bg.png')] w-full h-full mix-blend-hard-light bg-center  "></div>
            <div className="bg-[#D9D9D9] relative z-10 w-full h-full bg-opacity-10 "></div>
          </div>
        </div>

        <div className="relative z-10 w-full gap-12 p-4 md:p-4 pt-14">
          <div className="flex justify-between md:hidden menu-click">
            <button
              className="cursor-pointer bg-[#f1f1f1] w-max rounded-2xl p-3"
              onClick={() => setOpen(!open)}>
              <svg
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.45129 17.5412L7.97129 11.0212C8.74129 10.2512 8.74129 8.99117 7.97129 8.22117L1.45129 1.70117"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="bg-[#f1f1f1] w-max rounded-full p-3">
              <Logo />
            </div>
            <div className="avatar">
              <div className="w-12 h-12 border-2 rounded-full bg-[#f1f1f1]"></div>
            </div>
          </div>
          <Nav />
          <div className="w-full h-full md:pl-[340px]">
            <div className="flex flex-col items-center justify-between gap-3 mt-4 sm:flex-row">
              <LastMonthStats />
              <UserBox />
            </div>
            <div className="w-full h-full mt-10 sm:mt-24 md:pr-24 p-7 content">
              <RecurringInvoiceStats />
              <div className="mt-12">
                <ClientList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
