import SectionTitles from "../../sectionTitles/sectionTitles.jsx";
import BasketCard from "./BasketCard.jsx";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BasketPage({ basket, setBasket }) {
  const [totalPrice, setTotalPrice] = useState(0)
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
      <section className="container relative h-[100%] flex flex-col lg:flex-row gap-[38px] justify-between">
        <div className="grid grid-cols-1 gap-[0px] w-[100%]">
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
          className="bg-[#fff] shadow-lg rounded-[10px] sticky top-[20px] h-auto p-[20px] w-[450px]"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-[10px] mb-[20px]">
            <p className="text-[#4B4B4B] text-[20px] font-[500] flex justify-between">
              Итого: <span>{totalPrice} ₽</span>
            </p>
            <p className="text-[#4B4B4B] text-[20px] font-[400] flex items-center justify-between">
              Количество: <span>{basket.length} товаров</span>
            </p>
          </div>
          <div>
            <h1 className="text-[#4B4B4B] text-[25px] font-[500] mb-[20px]">
              ОФОРМЛЕНИЕ ЗАКАЗА
            </h1>
            <div className="flex flex-col gap-[15px]">
              <form className="flex flex-col gap-[10px]">
                <div className="flex flex-col items-stretch gap-[5px]">
                  <label
                    htmlFor="name"
                    className="text-[#4B4B4B] text-[16px] font-[400]"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Имя"
                    id="name"
                    className="p-[10px_15px] border-1 border-[#939393] rounded-[5px] text-[#939393D9] text-[15px] font-[400]"
                  />
                </div>
                <div className="flex flex-col items-stretch gap-[5px]">
                  <label
                    htmlFor="phone-number"
                    className="text-[#4B4B4B] text-[16px] font-[400]"
                  >
                    Ваш номер телефона
                  </label>
                  <input
                    type="text"
                    placeholder="Номер телефона"
                    id="phone-number"
                    className="p-[10px_15px] border-1 border-[#939393] rounded-[5px] text-[#939393D9] text-[15px] font-[400]"
                  />
                </div>
                <div className="flex flex-col items-stretch gap-[5px]">
                  <label
                    htmlFor="email"
                    className="text-[#4B4B4B] text-[16px] font-[400]"
                  >
                    Электронная почта
                  </label>
                  <input
                    type="text"
                    placeholder="E-mail"
                    id="email"
                    className="p-[10px_15px] border-1 border-[#939393] rounded-[5px] text-[#939393D9] text-[15px] font-[400]"
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
