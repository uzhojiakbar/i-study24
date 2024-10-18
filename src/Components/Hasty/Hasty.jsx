import React from 'react';
import { hastyData } from '../../Utils/coruselData';
import { Card2Desc } from '../Card/style';

function Hasty() {
    return (
        <div className="bg-white py-32">
            <div className=" px-12 sm:px-24  lg:px-64 mx-auto">
                {hastyData?.map((item) => (
                    <div key={item.id}>
                        <div className="relative w-[80%] lg:w-[80%] mx-auto lg:h-[40vh] max-sm:h-[35vh] h-[42vh] ">
                            <img src={item.image} alt="" className="w-full  h-full rounded-[15px]  object-cover" />
                            <div className="absolute max-sm:hidden max-md:hidden w-[60%] max-sm:right-[-15%] sm:w-[40%] md:w-[30%] md:right-[-10%] lg:w-[30%] flex items-center gap-2.5 top-1/3 lg:right-[-15%] right-[-20%] bg-white p-2  shadow-[-2px_-2px_20px_silver] rounded-md  ">
                                <img src={item.image1} alt="" className="w-8" />
                                <p className="text-[#2D3846] font-bold lg:text-[11px] max-sm:text-[12px] sm:text-[12px]">{item.chilTitle1}</p>
                            </div>
                            <div className="absolute flex w-[60%] max-sm:hidden max-md:hidden max-sm:right-[0%] sm:w-[40%] lg:w-[30%] md:w-[30%]  items-center gap-2.5 top-[60%] left-[-20%] md:left-[-10%] bg-white p-2 rounded-md  shadow-[-2px_-2px_20px_silver] lg:right-[-15%] right-[-20%]">
                                <img src={item.image1} alt="" className="w-8" />
                                <p className="text-[#2D3846] font-bold text-[10px]">{item.chilTitle2}</p>
                            </div>
                            <div className="absolute flex items-center justify-center  max-sm:hidden max-md:hidden w-16 h-16 rounded-lg bg-white top-[-15%] left-[70%] shadow-[-2px_-2px_20px_silver] text-5xl font-mono text-[#2493df] ">
                                "
                            </div>
                        </div>
                        <div className="text-center sm:block  md:flex lg:leading-[80px] lg:block items-center justify-center gap-6 mt-3">
                            <h1 className="text-[#2D3846] font-bold lg:text-[48px] text-[24px] sm:text-[40px] lg:mt-5">{item.title}</h1>
                            <h3 className="text-[#2493df] lg:text-[70px] text-[24px] sm:text-[40px] font-Pacifico ">{item.text}</h3>
                        </div>
                        <p className=" text-[#6b7f99] lg:text-[20px] leading-6 mt-3">{item.desc}</p>
                        <div className="flex justify-center mt-6">
                            <button className="px-12 max-sm:w-full max-sm:text-sm h-12 bg-[#2493df] text-white text-lg font-bold rounded-md hover:bg-[#58b5f3] mt-3">
                                {item.btn}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hasty;
