import React from "react";
import { Outlet } from "react-router-dom";
import StarIcon from "@assets/icons/star.svg";
import BackGround from "@assets/images/dashboard.png";
import HeaderLogo from "@assets/icons/logo.svg";

const PublicLayout: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex-center relative">
      <div className="w-full md:w-1/2 lg:w-1/3 h-[80%] flex-center flex-col">
        <img src={HeaderLogo} alt="logo" className=" mb-10 self-center md:mb-30 md:self-start md:pl-20" />
        <Outlet />
      </div>
      <div className="hidden md:block md:w-1/2 lg:w-2/3 bg-public-bg h-screen">
        <div className="py-16 px-14 flex flex-col gap-8 mb">
          <h1 className="text-3xl leading-8 min-w-197.5">
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and I feel more confident making moves in the market
          </h1>
          <div className="w-full  flex justify-between items-start">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-lg font-semibold">— Ethan R.</p>
              <span className="body-m-regular">Retail Investor</span>
            </div>
            <div className="flex-center">
              {Array.from({ length: 5 }).map((_, id) => (
                <img key={id} src={StarIcon} alt="star" className="w-5 h-5" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 w-screen ml-14 rounded-2xl absolute top-[25%] border-5 border-gray-600/55">
          <img src={BackGround} alt="dashboard" className="overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
