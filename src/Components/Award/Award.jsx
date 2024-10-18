import React from 'react';
import { awardData } from '../../Utils/Awarddata';

function Award() {
  return (
    <div className="bg-[#F2F3F7] p-20">
      <h1 className="text-center text-[32px] sm:text-[40px] lg:text-[55px] text-[#2D3846] font-bold">Award winning experience</h1>
      <div className="grid sm:grid-cols-2 lg:grid-flow-col-4  gap-9 mt-16 px-12">
        {awardData?.map((item) => (
          <div key={item.id} className="p-5 text-center">
            <h2 className="text-[#6B7F99] text-[20px]">{item.title}</h2>
            <p className="text-[#6B7F99] text-[16px] mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Award;
