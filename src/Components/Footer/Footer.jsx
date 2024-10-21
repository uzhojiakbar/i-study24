import React from "react";
import { footerData, footerNav, linkedinData } from "../../Utils/footerData";
import google from '../../assets/googlelogo.svg'
function Footer({short=0}) {
  return (
    <div className="bg-[#18171D] pb-5">
      {short==1?'':<div className="grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-7 p-16">
        {footerData?.map((item) => (
          <div key={item.id}>
            <p className="text-white font-semibold">{item.title}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link1}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link2}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link3}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link4}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link5}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link6}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link7}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link8}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link9}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link10}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link11}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link12}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link13}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link14}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link15}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link16}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link17}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link18}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link19}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link20}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link21}</p>
            <p className="text-gray-400 mt-5 cursor-pointer">{item?.link22}</p>
            {/* Add other links as needed */}
          </div>
        ))}
        <p>
          <select className="w-36 p-2">
            <option value="1">English</option>
            <option value="1">Rus</option>
            <option value="1">Arabic</option>
            <option value="1">France</option>
          </select>
        </p>
      </div>}
      <div className="bg-gray-800 border-t border-gray-500 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 py-6 items-center px-6">
        {linkedinData?.map((item) => (
          <div key={item.id} className="flex cursor-pointer px-3 items-center gap-3 whitespace-nowrap ">
            <img src={item.icon} alt="logo" className="w-7" />
            <p className="text-sm font-bold text-white">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="lg:flex lg:space-y-0 space-y-6 justify-between items-center mt-10 px-8">
        <div className="lg:flex grid md:grid-cols-6 sm:grid-cols-5 gap-2">
          {footerNav?.map((item) => (
            <p key={item.id} className="text-gray-500 text-sm font-bold text-nowrap cursor-pointer">{item?.name}</p>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          Made with ❤ by <span className="text-white">Sololearn</span> | <sup>©</sup> 2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
