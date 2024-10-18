import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coruselData } from "../../Utils/coruselData";

const CarouselComponent = () => {
  const [count, setCount] = useState(1)
  const updateSlideCount = () => {
    if (window.innerWidth > 1024) {
      setCount(4);
    } else if (window.innerWidth > 767) {
      setCount(3);
    } else if (window.innerWidth > 640) {
      setCount(2);
    } else {
      setCount(1);
    }
  };

  useEffect(() => {
    updateSlideCount();
    window.addEventListener("resize", updateSlideCount);
    return () => {
      window.removeEventListener("resize", updateSlideCount);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-transparent relative -top-40 ">
      <div className="flex flex-col mx-8 ">
        <h1 className="text-4xl text-[#e5e5e5]  text-center  font-sans">
          Choose a course for you
        </h1>
        <Slider {...settings}>
          {coruselData.map((item) => (
            <div key={item.id} className="p-2 w-[100px] overflow-hidden text-center">
              <div className="bg-[#eaf0f3] p-6 rounded-lg w-[99%] h-[184px] flex flex-col items-center justify-around mt-5">
                <img
                  className="w-16 h-16 rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="text-2xl text-[#2d3846]">{item.name}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
