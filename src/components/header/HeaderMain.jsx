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
      className="min-h-[40vh] flex items-center justify-center h-[100px]"
      style={{
        backgroundImage: `url(${headerImages[index].img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      data-aos="fade-down"
    >
      <div className="container flex items-center justify-between w-[100%]">
        <button
          className="md:p-[15px] p-[5px] bg-[#fff] text-[#3A8F34] rounded-[50%] text-[10px] lg:text-[30px]"
          onClick={() => {
            setIndex((prevIndex) => (prevIndex - 1 + total) % total);
          }}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="md:p-[10px] p-[5px] bg-[#fff] text-[#3A8F34] rounded-[50%] text-[10px] md:text-[20px] lg:text-[30px]"
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
