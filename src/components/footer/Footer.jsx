import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaVk, FaYoutube } from "react-icons/fa6";
import { IoIosSearch, IoLogoFacebook } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <footer
    className="bg-[#3A8F34] py-[50px_50px] sm:py-[50px_60px] xl:py-[100px_130px]"
    data-aos="fade-up"
    >
      <section className="container flex items-center flex-col xl:flex-row xl:items-start gap-[30px] xl:gap-[100px]">
        <div>
          <a href="#" className="text-[#fff] text-[25px] font-[700] mb-[20px]">
            ТЁПЛЫЙ ПОТОК
          </a>
          <div className="flex items-center gap-[15px] text-[#fff] text-[25px] mb-[10px] xl:mb-[70px]">
            <IoLogoFacebook />
            <RiInstagramFill />
            <FaVk />
            <FaYoutube />
            <AiFillTwitterCircle />
          </div>
          <p className="text-[#fff] text-[12px] font-[300]">
            @ 2020 Company Все права защищены
          </p>
        </div>
        <div className="flex flex-col gap-[0px] sm:flex-row sm:gap-[100px] lg:gap-[300px] xl:gap-[100px]">
          <ul className="flex flex-col gap-[10px]">
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Трубчатые радиаторы
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Внутрипольные конвекторы
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Биметаллические радиаторы
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Напольные конвекторы
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Алюминиевые радиаторы
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[10px]">
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Тёплые полы
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Панельные радиаторы
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Комплектующие
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Полотенцесушители
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Бренды
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[10px]">
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Каталог
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Сертификаты
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Услуги
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                О нас
              </a>
            </li>
            <li className="hover:translate-x-[10px] transition-transform duration-300">
              <a href="#" className="text-[#fff] text-[14px] font-[400]">
                Доставка и оплата
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse w-[100%] xl:w-[300px] gap-[10px]">
          <div className="flex flex-col-reverse items-center sm:flex-row-reverse justify-between w-[100%] xl:flex-col-reverse xl:w-[300px] gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <FiPhone className="text-[#fff] text-[20px]" />
              <div className="flex flex-col">
                <p className="text-[#fff] text-[18px] font-[700]">
                  +7 (977) 837-12-45
                </p>
                <a href="#" className="text-[#fff] text-[14px] font-[500]">
                  mail@mail.ru
                </a>
                <a
                  href="#"
                  className="text-[#fff] text-[16px] font-[500] underline"
                >
                  Заказать звонок
                </a>
              </div>
            </div>
            <hr className="text-[#fff]" />
            <div className="flex items-center gap-[10px]">
              <GrLocation className="text-[#fff] text-[20px]" />
              <div>
                <p className="text-[#fff] text-[18px] font-[500]">
                  Москва, Павловская 16
                </p>
                <span className="text-[#fff] text-[14px] font-[400]">
                  пн-пт 9:00-20:00
                </span>
              </div>
            </div>
          </div>
          <form className="rounded-[5px] overflow-hidden border-[1px] border-[#fff] flex items-center">
            <input
              type="text"
              placeholder="Поиск..."
              className="text-[#fff] text-[18px] font-[500] w-[100%]
                            p-[5px_10px]"
            />
            <button className="px-[5px] text-[20px] text-[#fff]">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
