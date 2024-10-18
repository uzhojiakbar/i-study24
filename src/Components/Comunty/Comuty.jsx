import React from 'react'
import { box1Img, CommunityData, data } from '../../Utils/coruselData'
import { NavLink } from 'react-router-dom'

function Comuty() {
    return (
        <section>
            <div className="bg-[#eaf0f3] flex gap-3 py-[100px]">
                <div className='w-[20%] border  '>
                    {box1Img?.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt="logo"
                                className={`mt-12 rounded-full w-[${item?.width}] `} />
                        </div>
                    ))}
                </div>
                <div >
                    {CommunityData?.map((item) => (
                        <div key={item.id} className='flex flex-col items-center p-4' >
                            <h1 className='text-[#2D3846] lg:text-[40px] md:text-[24px] text-[26px] text-center font-bold'>{item.title}</h1>
                            <h1 className='text-[#2493df] font-bold lg:text-[96px] md:text-[60px] text-[40px] sm:text-[50px] mt-6'>{item.num}</h1>
                            <p className='text-[#6B7F99] lg:text-[20px]  text-center'>{item.desc}</p>
                            <button className="w-[223px] max-sm:h-8 max-sm:w-[140px] max-sm:font-[400] max-sm:text-[16px] h-12 bg-[#4fbe9e] text-white text-lg font-bold rounded mt-6 hover:bg-[#4eedc0]">{item.btn}</button>
                            <img className='mt-12 max-sm:hidden relative scale-[1.3] ' src={item.video} alt="" />
                        </div>
                    ))}
                </div>
                <div className='w-[20%] border flex flex-col items-end '>
                    {box1Img?.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt="logo"
                                className={`mt-12 rounded-full w-[${item?.width}] `} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white p-[50px] lg:flex justify-around">
                {data?.map((item) => (
                    <div key={item.id}>
                        <h1 className="lg:text-[26px] font-bold text-[32px] leading-9 text-[#2D3846]">
                            {item.name} <a className="text-[#2493DF]">{item.text2}</a>
                        </h1>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Comuty
