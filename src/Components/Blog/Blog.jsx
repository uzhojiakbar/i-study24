import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { blogPost, blogsData } from "../../Utils/blogData";
import { MdOutlineTimer } from "react-icons/md";
import Navigating from "../Navbar/Navbar";
function Blog() {
  const [values, setValues] = useState("");
  const clearFunc = () => {
    setValues("");
  };

  return (
    <>
      <Navigating login={1} />
      <div className="lg:p-24 md:p-12 p-6">
        <h1 className="text-3xl font-bold text-center">Blog</h1>
        <div className="lg:flex gap-12 mt-20 justify-center">
          <div className=" lg:w-[75%] w-full max-w-[900px] p-2 ">
            <div className="flex  gap-8">
              <div className="w-[75%] max-sm:w-full relative">
                <h1 className="absolute top-[50%] translate-y-[-50%] text-3xl sm:left-3 max-sm:right-6">
                  <CiSearch />
                </h1>
                <input
                  onChange={(e) => setValues(e.target.value)}
                  value={values}
                  type="text"
                  className="border-2 w-full rounded-[8px] border-blue-500 pl-6 sm:pl-12 pr-12 h-[60px] text-2xl outline-none "
                  placeholder="Search..."
                />
                {values.length > 0 ? (
                  <span
                    onClick={clearFunc}
                    className="text-2xl cursor-pointer block absolute top-[50%] translate-y-[-50%] right-3 max-sm:hidden"
                  >
                    <IoIosClose />
                  </span>
                ) : (
                  ""
                )}
              </div>
              <button className="border-2 border-blue-500 w-[25%] py-2 rounded-[8px] text-xl font-bold text-blue-500 max-sm:hidden">
                Search
              </button>
            </div>

            <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-6 ">
              {blogsData?.map((item) => (
                <div
                  key={item.id}
                  style={{ background: item.bgclolor }}
                  className="p-6 flex flex-col items-start justify-end gap-3 text-white rounded-lg h-80"
                >
                  <button className={`${item.nabeBg} px-2 rounded-[5px] `}>
                    {item.name}
                  </button>
                  <h1 className="text-3xl font-semibold">{item.title}</h1>
                  <div className="flex gap-3 items-center justify-center">
                    <MdOutlineTimer />
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:mt-0 mt-1 lg:w-[25%] lg:p-3 lg:pr-6 ">
            <div className="sticky gap-6  top-20 max-sm:hidden sm:flex lg:block ">
              <div className="">
                <h1 className="text-[#2D3846] text-xl font-[600]">
                  MOst populars blogspost
                </h1>
                {blogPost?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F2F5F7] font-[600] rounded-lg p-3 text-[#2D3846] mt-2"
                  >
                    <p className="">{item.title} </p>
                    <p className="text-[14px]">{item.subtitle}</p>
                  </div>
                ))}
              </div>
              <h1 className=" text-[#2D3846] text-xl font-[600] lg:mt-4 mt-10  ">
                Leran on the go!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
