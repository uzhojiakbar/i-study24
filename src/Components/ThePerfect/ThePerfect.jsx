import React from "react";
import { TheCardsData, theCardsTitle } from "../../Utils/coruselData";

function ThePerfect() {
  return (
    <div className="bg-white py-16 max-sm:px-4 sm:px-12">
      <h1 className="text-4xl md:text-5xl text-center text-[#2d3846] font-bold">
        {theCardsTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
        {TheCardsData?.map((item, index) => (
          <div key={index} className="text-center p-4  ">
            <img src={item.image} alt="image" className="w-full" />
            <div className=" flex flex-col md:h-[260px] items-center justify-between ">
              <h2 className="lg:text-[40px] font-bold text-[26px] text-[#2d3846] mt-4">{item.name}</h2>
              <p className=" lg:text-[20px] text-[#6b7f99] leading-7">
                {item.desc}
              </p>
              <button className="w-[223px] mt-3 h-12 bg-[#2493df] text-white text-lg font-bold rounded-md ">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThePerfect;
