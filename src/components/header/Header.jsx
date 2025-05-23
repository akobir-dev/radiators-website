import logo from "../../../public/logo.png";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks.jsx";
import { useEffect, useState } from "react";
import AOS from "aos";

function Header({ basket }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className="bg-[#fff] py-[15px_15px] sticky top-0 z-20 shadow-lg rounded-b-2xl"
        data-aos="fade-down"
      >
        <section className="container">
          <div className="flex flex-col items-center justify-between md:flex-row gap-[16px]">
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
              <Link to="/contacts" className="text-[#4B4B4B] text-[25px]">
                <FiPhone />
              </Link>
              <a href="#" className="text-[#4B4B4B] text-[25px]">
                <GrLocation />
              </a>
              <a href="#" className="text-[#4B4B4B] text-[25px]">
                <IoIosSearch />
              </a>
              <Link to="/basket" className="relative text-[#4B4B4B] text-[25px]">
                <span className={`${basket.length == 0 ? "hidden" : "inline"} absolute top-0 right-0 bg-[#fff] text-[#3A8F34] text-[10px]  border-[#3A8F34] border-1 px-[5px] rounded-[50%]`}>{basket.length}</span>
                <BsCart />
              </Link>
              <div className="relative">
                <button className="text-[#4B4B4B] text-[25px]" onClick={() => setOpen(!open)}>
                  <RiMenu3Line />
                </button>
                {open && (
                  <ul className="flex flex-col absolute right-0 mt-2 bg-white p-4 rounded shadow-lg items-start gap-[20px]"
                    data-aos="zoom-in-down">
                    <HeaderLinks />
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between max-xl:hidden">
            <ul className="flex items-center gap-[43px]">
              <HeaderLinks />
            </ul>
            <Link
              to="/basket"
              className="relative flex items-center gap-[10px] border p-[5px_10px] rounded-[5px] bg-gradient-to-r from-[#3A8F34] to-[#3A8F34] text-white"
            >
              <BsCart className="text-[16px]" />
              <p className="[16px] font-[500]">Корзина</p>
              <span className={`${basket.length === 0 ? "hidden" : "inline"} absolute top-0 right-0 bg-[#fff] text-[#3A8F34] text-[10px]  border-[#3A8F34] border-1 px-[5px] rounded-[50%]`}>{basket.length}</span>
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
