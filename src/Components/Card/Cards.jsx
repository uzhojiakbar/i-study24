import React from "react";
import { card2, card2later, CardsData } from "../../Utils/coruselData";

function Cards() {
  const [{ image }] = card2
  return (
    <div>
      <div className="bg-[#F2F5F7] " >
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 border2  pt-6 px-10 ">
          {CardsData?.map((item) => (
            <div key={item.id} className="bg-white rounded-sm px-4 pb-6 text-center flex flex-col justify-between items-center ">
              <img src={item.image} alt="" />
              <p className="lg:text-4xl text-[#2D3846] font-[600] sm:text-xl">{item.name}</p>
              <p className="text-[#6B7F99] lg:text-[20px] mt-2">{item.desc}</p>
              <button className="w-[223px]  h-12 text-white bg-[#2493df]  font-bold rounded mt-6 hover:bg-[#58b5f3]">{item.btn}</button>
            </div>
          ))}
          {card2later?.map((item) => (
            <div key={item.id} className="bg-white lg:hidden rounded-sm px-4 pb-6 text-center flex flex-col justify-between items-center ">
              <img src={item.image} alt="" />
              <p className="lg:text-4xl text-[#2D3846] font-[600] sm:text-xl">{item.name}</p>
              <p className="text-[#6B7F99] lg:text-[20px] mt-2">{item.desc}</p>
              <button className="w-[223px]  h-12 text-white bg-[#40BF9C] hover:bg-[#4febbe]  font-bold rounded mt-6 ">{item.btn}</button>
            </div>
          ))}

        </div>

        <div className=" py-12 px-10">
          <div className="flex gap-8">

            <div className="flex flex-col-reverse lg:w-[68%] bg-white rounded-sm sm:grid sm:grid-cols-2 md:grid-cols-2 sm:gap-12 lg:relative">
              {card2?.map((item) => (
                <div key={item.id} className=" p-6 max-sm:text-center">
                  <h1 className="lg:text-[40px] md:text-[20px] text-[26px] font-bold  text-[#2D3846] leading-10 ">{item.name}</h1>
                  <p className="text-[#6B7F99] lg:text-[20px] mt-3">{item.desc}</p>
                  <h1 className="text-[24px] text-[#222222] font-bold">{item.qrname}</h1>
                  <div className="mt-4 flex items-center gap-6">
                    <img src={item.childImg1} className="w-[40%] md:[30%] lg:w-[40%]" alt="" />
                    <div className="">
                      <img src={item.appstoe} className="w-[100%] " alt="apple" />
                      <img src={item.google_play} className="w-[100%]" alt="google" />
                    </div>
                  </div>
                </div>
              ))}
              <img src={image} alt="" className=" w-[100%] " />
            </div>
            {card2later?.map((item) => (
              <div key={item.id} className="bg-white lg:block hidden lg:w-[32.5%] rounded-sm px-4 pb-6 text-center flex flex-col justify-between items-center ">
                <img src={item.image} alt="" />
                <p className="lg:text-4xl text-[#2D3846] font-[600] sm:text-xl">{item.name}</p>
                <p className="text-[#6B7F99] lg:text-[20px] mt-2">{item.desc}</p>
                <button className="w-[223px]  h-12 text-white bg-[#40BF9C] hover:bg-[#4febbe]  font-bold rounded mt-6 ">{item.btn}</button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}


export default Cards;
