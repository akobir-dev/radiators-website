import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { headerImages } from "../../datas/data";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeaderMain() {
  const [index, setIndex] = useState(0);
  const total = headerImages.length;
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center"
      data-aos="fade-down"
    >
      <img src={headerImages[index].img} alt="" className="absolute w-[100%] h-[100%] object-cover"/>
      <div className="z-10 container flex items-center justify-between w-[100%]">
        <button
          className="md:p-[10px] p-[10px] bg-[#fff] text-[#3A8F34] rounded-[50%] text-[30px]"
          onClick={() => {
            setIndex((prevIndex) => (prevIndex - 1 + total) % total);
          }}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="md:p-[10px] p-[10px] bg-[#fff] text-[#3A8F34] rounded-[50%] text-[30px]"
          onClick={() => {
            setIndex((prevIndex) => (prevIndex + 1) % total);
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
export default HeaderMain;
