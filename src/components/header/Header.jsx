import logo from "../../../public/logo.png";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: true, // only animate once
      });
    }, []);

  return (
    <>
      <header
      className="bg-[#fff] py-[10px_30px]"
      data-aos="fade-down"
      >
        <section className="container">
          <div className="flex flex-col items-center justify-between my-[30px] md:flex-row gap-[16px]">
            <Link to="/" className="flex items-center xl:flex">
              <img src={logo} alt="" />
              <div className="flex flex-col">
                <p className="text-[#3A8F34] text-[25px] font-[700]">
                  ТЁПЛЫЙ ПОТОК
                </p>
                <span className="text-[#4B4B4B] text-[10px] font-[600]">
                  КОМФОРТ В ЭЛЕГАНТНОЙ ФОРМЕ
                </span>
                <span className="text-[#4B4B4B] text-[10px] font-[600]">
                  ДОСТАВЛЯЯ ТЕПЛО И УКРАШАЯ ВАШ ДОМ
                </span>
              </div>
            </Link>
            <div className="flex gap-[70px] items-center max-xl:hidden">
              <div className="flex gap-[16px] items-center">
                <div className="flex items-center gap-[10px]">
                  <FiPhone className="text-[#3A8F34] text-[25px]" />
                  <div className="flex flex-col">
                    <p className="text-[#4B4B4B] text-[20px] font-[700]">
                      +7 (977) 837-12-45
                    </p>
                    <a
                      href="#"
                      className="text-[#4B4B4B] text-[14px] font-[500]"
                    >
                      mail@mail.ru
                    </a>
                    <a
                      href="#"
                      className="text-[#3A8F34] text-[20px] font-[500] underline"
                    >
                      Заказать звонок
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <GrLocation className="text-[#3A8F34] text-[25px]" />
                  <div>
                    <p className="text-[#4B4B4B] text-[18px] font-[500]">
                      Москва, Павловская 16
                    </p>
                    <span className="text-[#4B4B4B] text-[14px] font-[400]">
                      пн-пт 9:00-20:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[40px] max-xl:hidden">
              <form className="border border-[#939393] rounded-[5px] flex items-center justify-between gap-[]">
                <input
                  type="text"
                  className="text-[#939393] p-[5px_10px] text-[18px] font-[500]"
                  placeholder="Поиск..."
                />
                <button className="p-[10px_5px] text-[#939393] text-[20px]">
                  <IoIosSearch />
                </button>
              </form>
              <button className="flex items-center gap-[8px] border p-[10px_20px] rounded-[5px] text-[#fff] bg-gradient-to-r from-[#3A8F34] to-[#3A8F34]">
                <CiCalculator1 className="text-[20px]" />
                <span className="text-[16px] font-[700]">Заказать расчет</span>
              </button>
            </div>
            <div className="flex gap-[40px] sm:gap-[66px] items-center xl:hidden">
              <a href="#" className="text-[#4B4B4B] text-[25px]">
                <FiPhone />
              </a>
              <a href="#" className="text-[#4B4B4B] text-[25px]">
                <GrLocation />
              </a>
              <a href="#" className="text-[#4B4B4B] text-[25px]">
                <IoIosSearch />
              </a>
              <a href="#" className="text-[#4B4B4B] text-[25px]">
                <BsCart />
              </a>
              <button href="#" className="text-[#4B4B4B] text-[25px]">
                <RiMenu3Line />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between max-xl:hidden">
            <ul className="flex items-center gap-[43px]">
              <HeaderLinks />
            </ul>
            <Link
              to="/basket"
              className="flex items-center gap-[10px] border p-[5px_10px] rounded-[5px] bg-gradient-to-r from-[#3A8F34] to-[#3A8F34] text-white"
            >
              <BsCart className="text-[16px]" />
              <span className="[16px] font-[500]">Корзина</span>
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
