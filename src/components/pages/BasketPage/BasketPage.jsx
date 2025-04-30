import SectionTitles from "../../sectionTitles/sectionTitles.jsx";
import BasketCard from "./BasketCard.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BasketPage({ basket, setBasket }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);
  useEffect(() => {
    const total = basket.reduce((sum, item) => {
      const quantity = Number(localStorage.getItem(`productQuantity_${item.id}`)) || 1;
      const unitPrice = item.discount
        ? item.originalPrice - (item.originalPrice * item.discount) / 100
        : item.originalPrice;
      return sum + unitPrice * quantity;
    }, 0);
    setTotalPrice(total);
  }, [basket]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SectionTitles title="Корзина" />
      <section className="container relative mb-[90px] h-[100%] flex flex-col lg:flex-row gap-[38px] justify-between">
        <div className="grid grid-cols-1 gap-[38px] w-[100%]">
          {basket.map((basketData) => (
            <BasketCard
              key={basketData.id}
              basketData={basketData}
              setBasket={setBasket}
              basket={basket}
            />
          ))}
        </div>
        <div
          className="bg-[#fff] sticky top-[20px] h-[580px] p-[30px] w-[100%] lg:w-[50%]"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-[10px] mb-[35px]">
            <p className="text-[#4B4B4B] text-[28px] font-[500] flex justify-between">
              Итого <span>65 940 ₽</span>
            </p>
            <p className="text-[#4B4B4B] text-[22px] font-[400] flex items-center justify-between">
              Количество: <span>6 товаров</span>
            </p>
          </div>
          <div>
            <h1 className="text-[#4B4B4B] text-[28px] font-[500] mb-[20px]">
              ОФОРМЛЕНИЕ ЗАКАЗА
            </h1>
            <div className="flex flex-col gap-[15px]">
              <form>
                <div className="flex flex-col items-stretch gap-[8px]">
                  <label
                    htmlFor="name"
                    className="text-[#4B4B4B] text-[18px] font-[400]"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Имя"
                    id="name"
                    className="p-[10px_20px] border-1 border-[#939393] rounded-[5px] text-[#939393D9] text-[18px] font-[400]"
                  />
                </div>
                <div className="flex flex-col items-stretch gap-[8px]">
                  <label
                    htmlFor="phone-number"
                    className="text-[#4B4B4B] text-[18px] font-[400]"
                  >
                    Ваш номер телефона
                  </label>
                  <input
                    type="text"
                    placeholder="Номер телефона"
                    id="phone-number"
                    className="p-[10px_20px] border-1 border-[#939393] rounded-[5px] text-[#939393D9] text-[18px] font-[400]"
                  />
                </div>
                <div className="flex flex-col items-stretch gap-[8px]">
                  <label
                    htmlFor="email"
                    className="text-[#4B4B4B] text-[18px] font-[400]"
                  >
                    Электронная почта
                  </label>
                  <input
                    type="text"
                    placeholder="E-mail"
                    id="email"
                    className="p-[10px_20px] border-1 border-[#939393] rounded-[5px] text-[#939393D9] text-[18px] font-[400]"
                  />
                </div>
              </form>
              <button className="text-[#3A8F34] text-[20px] font-[500] py-[10px] rounded-[5px] border-3 border-[#3A8F34] hover:bg-[#3A8F34] hover:text-[#fff] duration-150 active:bg-[#fff] active:text-[#3A8F34]">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BasketPage;
