import React from "react";
import { NavLink } from "react-router-dom";
import { WhyData } from "../../Utils/coruselData";
import "./style.css";

function Whycode() {
  return (
    <div className="bg-[#eaf0f3] py-24 flex flex-col items-center gap-8">
      <h1 className="text-4xl md:text-6xl text-[#2D3846] flex items-center gap-4 font-bold">
        Why{" "}
        <span className="font-mono font-medium text-[#2493DF] bg-[#c0e3f6] px-2 py-1 rounded-md flex items-center">
          code  <div className="slesh"></div>
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-8 w-full px-16 mt-28 max-sm:space-y-72 lg:mt-48">
        {WhyData?.map((item) => (
          <div
            key={item.id}
            className="relative  bg-white px-5 py-8 lg:pt-24 text-center rounded-sm max-sm:pt-6  max-sm:mt-48 "
          >
            <img
              src={item.image}
              alt="logoimg"
              className="absolute lg:translate-y-[-120%] md:translate-y-[-122%] sm:translate-y-[-110%] left-0 max-sm:translate-y-[-110%] max-sm:left-[50%] max-sm:translate-x-[-50%]"
            />
            <h1 className="text-[#2D3846] font-bold lg:text-[40px] text-[26px]">
              {item.name}
            </h1>
            <p className="text-[#6B7F99] lg:text-xl mt-3 ">{item.desc}</p>
          </div>
        ))}
      </div>

      <NavLink to={"/account/sign-in"}>
        <button className=" w-80 h-12 bg-[#2493df] hover:bg-[#58b5f3] text-white font-bold text-lg rounded-md mt-6 ">
          I want to code
        </button>
      </NavLink>
    </div>
  );
}

export default Whycode;
