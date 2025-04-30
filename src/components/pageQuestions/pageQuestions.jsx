import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function pageQuestions() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <section
      className="mb-[90px] p-[30px] bg-[#fff] rounded-[5px] flex gap-[40px] shadow-lg"
      data-aos="zoom-in"
    >
      <div className="w-[100%] lg:w-[40%] h-[100%]">
        <h1 className="text-[#4B4B4B] text-[28px] font-[500]">
          Остались вопросы?
        </h1>
        <div className="flex flex-col gap-[14px] my-[20px_30px]">
          <form className="flex flex-col gap-[8px]">
            <label
              htmlFor="name"
              className="text-[#4B4B4B] text-[18px] font-[400]"
            >
              Ваше имя
            </label>
            <input
              id="name"
              type="text"
              placeholder="Имя"
              className="p-[10px_20px] border-[1px] border-[#939393] rounded-[5px] text-[#939393D9] text-[18px] font-[400]"
            />
          </form>
          <form className="flex flex-col gap-[8px]">
            <label
              htmlFor="phone-number"
              className="text-[#4B4B4B] text-[18px] font-[400]"
            >
              Ваш номер телефона
            </label>
            <input
              id="phone-number"
              type="text"
              placeholder="Номер телефона"
              className="p-[10px_20px] border-[1px] border-[#939393] rounded-[5px] text-[#939393D9] text-[18px] font-[400]"
            />
          </form>
          <form className="flex flex-col gap-[8px]">
            <label
              htmlFor="email"
              className="text-[#4B4B4B] text-[18px] font-[400]"
            >
              Электронная почта
            </label>
            <input
              id="email"
              type="text"
              placeholder="E-mail"
              className="p-[10px_20px] border-[1px] border-[#939393] rounded-[5px] text-[#939393D9] text-[18px] font-[400]"
            />
          </form>
        </div>
        <button className="p-[15px] sm:py-[20px] w-[100%] bg-gradient-to-r from-[#3A8F34] to-[#46A340] text-white text-[20px] font-[700] rounded-[5px] hover:from-[#46A340] hover:to-[#3A8F34] mb-[13px]">
          Заказать звонок
        </button>
        <p className="text-[#939393] text-[14px] font-[400] text-center">
          Я согласен с Политикой Конфиденциальности
        </p>
      </div>
      <div className="hidden lg:flex w-[60%] rounded-[5px] overflow-hidden">
        <img
          src="https://www.stelrad.com/wp-content/uploads/2022/04/how-to-stop-radiators-clicking-blog-image-1250x550-1.png"
          alt=""
          className="object-cover h-[100%] w-[100%]"
        />
      </div>
    </section>
  );
}

export default pageQuestions;
