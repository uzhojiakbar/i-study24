import React from "react";
import { InvetData, subtext, subtext2 } from "../../Utils/coruselData";
import { NavLink } from "react-router-dom";
import { HiCheck } from "react-icons/hi2";

function Invest() {
  let [{ title }] = InvetData;
  let [{ titleIcon }] = InvetData;
  let [{ btn }] = InvetData;

  return (
    <div className="bg-[#2D3846] p-6">
      <div className="flex items-center gap-8 text-white text-[80px] font-bold justify-center">
        <h1 className="lg:text-[80px] text-[40px] max-sm:text-[32px] ">
          {title}
        </h1>
        <div className="bg-[#FBB461] py-2 px-6 lg:text-4xl max-sm:text-[16px] text-[20px] text-[#814806] rounded-full">
          {titleIcon}
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6 mt-8 ">
        {InvetData?.map((item) => (
          <div
            key={item.id}
            className="border-2 border-[#4a5c72] p-8 rounded-lg"
          >
            <h1 className="lg:text-[32px] md:text-[20px] max-sm:text-[26px] font-bold text-white">
              {item?.cardTitle}
            </h1>
            <h1 className="lg:text-[80px] font-bold text-[#FBB461] max-sm:text-[60px] md:text-[40px]">
              {item.cardNum}
            </h1>
            <p className="text-[#C8D2DB] text-lg mt-5 max-sm:mt-0 leading-6">
              {item.carDesc}
            </p>
          </div>
        ))}
      </div>
      {subtext?.map((item) => (
        <div
          key={item.id}
          className="sm:flex gap-5 justify-center mt-5 max-sm:ml-6 font-bold"
        >
          <h2 className="text-[#FBB461] flex items-center gap-2">
            <HiCheck /> {item.text1}
          </h2>
          <h2 className="text-[#FBB461] flex items-center gap-2">
            <HiCheck /> {item.text2}
          </h2>
          <h2 className="text-[#FBB461] flex items-center gap-2">
            <HiCheck /> {item.text3}
          </h2>
          <h2 className="text-[#FBB461] flex items-center gap-2">
            <HiCheck /> {item.text4}
          </h2>
        </div>
      ))}
      {subtext2.map((item) => (
        <div
          key={item.id}
          className="sm:flex justify-center gap-5 sm:mt-8 max-sm:ml-6 font-bold"
        >
          <h2 className="text-[#FBB461] flex items-center gap-2">
            <HiCheck /> {item.text1}
          </h2>
          <h2 className="text-[#FBB461] flex items-center gap-2">
            <HiCheck /> {item.text2}
          </h2>
          <h2 className="text-[#FBB461] flex items-center gap-2">
            <HiCheck /> {item.text3}
          </h2>
        </div>
      ))}
      <div className="flex justify-center mt-10">
        <NavLink
          to={"account/sign-in"}
          className={"w-full flex  justify-center"}
        >
          <button className="bg-[#FFA310] text-black font-bold max-sm:w-[70%] max-sm:h-12  mt-12 w-[60%] h-[60px] rounded-md max-sm:text-sm text-lg">
            {btn}
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Invest;
