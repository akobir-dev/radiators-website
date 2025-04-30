import PageQuestions from "../../pageQuestions/pageQuestions.jsx";
import SectionTitles from "../../sectionTitles/sectionTitles.jsx";
import Delivery from "./Delivery.jsx";
import Payment from "./Payment.jsx";
import { useState,useEffect } from "react";

function DeliveryPage() {
  const [activeTab, setActiveTab] = useState("delivery");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <SectionTitles title={"Доставка и оплата"} />
      <main className="container">
        <section className="bg-[#fff] mb-[90px] p-[40px]">
          <div className="flex items-center gap-[30px] mb-[30px]">
            <button
              className={`text-[25px] md:text-[36px] font-[500]${
                activeTab === "delivery"
                  ? "text-[#3A8F34] underline"
                  : "text-[#939393]"
              }`}
              onClick={() => {
                setActiveTab("delivery");
              }}
            >
              Доставка
            </button>
            <button
              className={`text-[25px] md:text-[36px] font-[500]${
                activeTab === "payment"
                  ? "text-[#3A8F34] underline"
                  : "text-[#939393]"
              }`}
              onClick={() => {
                setActiveTab("payment");
              }}
            >
              Оплата
            </button>
          </div>
          <div>{activeTab === "delivery" ? <Delivery /> : <Payment />}</div>
        </section>
      </main>
      <PageQuestions />
    </>
  );
}

export default DeliveryPage;
