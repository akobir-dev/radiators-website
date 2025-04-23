import { IoCashOutline } from "react-icons/io5";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { TbContract } from "react-icons/tb";
import Dots from "./Dots.jsx";
import ParagraphHeadings from "../../ParagraphHeadings/ParagaraphHeadings.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Payment() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <>
      <div
        className="hidden md:flex items-center justify-between mb-[30px]"
        data-aos="fade-left"
      >
        <div className="flex flex-col items-center gap-[22px]">
          <IoCashOutline className="text-[#3A8F34] text-[100px] lg:text-[200px]  rounded-[50%] p-[60px] bg-[#F9F9F9]" />
          <h3 className="text-[#4B4B4B] text-[20px] lg:text-[26px] font-[500]">
            Оплата наличными
          </h3>
        </div>
        <Dots />
        <div className="flex flex-col items-center gap-[22px]">
          <HiOutlineCreditCard className="text-[#3A8F34] rounded-[50%] text-[100px] lg:text-[200px] p-[60px] bg-[#F9F9F9]" />
          <h3 className="text-[#4B4B4B] text-[20px] lg:text-[26px] font-[500]">
            Оплата картой
          </h3>
        </div>
        <Dots />
        <div className="flex flex-col items-center gap-[22px]">
          <TbContract className="text-[#3A8F34] text-[100px] lg:text-[200px]  rounded-[50%] p-[60px] bg-[#F9F9F9]" />
          <h3 className="text-[#4B4B4B] text-[20px] lg:text-[26px] font-[500]">
            Безналичный расчёт
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]" data-aos="fade-left">
        <p className="text-[#4B4B4B] text-[18px] font-[500]">
          <span className="text-[#3A8F34]">«Тёплый поток»</span> в настоящее
          время принимает следующие способы оплаты:
        </p>
        <div>
          <ParagraphHeadings title={"Оплата наличными"} />
          <p className="text-[18px] text-[#4B4B4B] font-[300]">
            Вы передаёте оплату непосредственно курьеру службы доставки после
            получения товара или менеджеру «Тёплый поток» в пункте выдачи при
            самовывозе.
          </p>
        </div>
        <div>
          <ParagraphHeadings title={"Оплата картой"} />
          <p className="text-[18px] text-[#4B4B4B] font-[300]">
            Принимаем к оплате банковские, кредитные карты, а также
            бесконтактный способ оплаты.
          </p>
        </div>
        <div>
          <ParagraphHeadings title={"Безналичный расчёт"} />
          <p className="text-[18px] text-[#4B4B4B] font-[300]">
            Доставка товаров происходит после поступления денежных средств на
            расчетный счет организации. После оформления заказа мы вышлем вам
            банковские реквизиты компании для совершения оплаты.
          </p>
        </div>
        <div>
          <ParagraphHeadings title={"Дополнительно"} />
          <p className="text-[18px] text-[#4B4B4B] font-[300]">
            Перед оформлением заказа необходимо внимательно ознакомиться со
            свойствами и характеристиками товара (размером, цветом, весом и т.
            д.). Товары, произведенные по индивидуальному заказу покупателя,
            обмену и возврату не подлежат.
          </p>
        </div>
        <ParagraphHeadings title={"Наши реквизиты:"} />
      </div>
    </>
  );
}

export default Payment;
