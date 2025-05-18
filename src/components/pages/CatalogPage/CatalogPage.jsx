import SectionTitles from "../../sectionTitles/sectionTitles.jsx";
import CatalogCards from "./CatalogCards.jsx";
import CatalogButtons from "./CatalogButtons.jsx";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CatalogPage({ basket, setBasket }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <section className="container">
        <div className="flex items-center gap-[48px]">
          <div className="flex items-cneter" data-aos="fade-left">
            <SectionTitles title={"Радиаторы"} />
          </div>
          <ul
            className="flex flex-wrap items-center mt-5 gap-[30px]"
            data-aos="fade-left"
          >
            <button
              onClick={() => setSelectedCategory(0)}
              className={`text-[18px] font-[500] ${selectedCategory == 0 ? "text-[#3A8F34]" : "text-[#4B4B4B]"
                }`}
            >
              ВСЕ
            </button>
            <CatalogButtons
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </ul>
        </div>
        <div
          className="flex flex-col xl:flex-row gap-[40px] items-start"
          data-aos="fade-left"
        >
          <div className="bg-[#fff] xl:sticky top-[20px] w-[100%] sm:w-[48%] xl:w-[20%] h-auto p-[34px_24px] rounded-[5px] shadow-lg">
            <h3 className="text-[#4B4B4B] text-[16px] font-[500] mb-[15px]">
              ЦЕНА
            </h3>
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col xl:flex-row justify-between items-center gap-[5px]">
                <input
                  type="number"
                  placeholder="мин. цена"
                  className="w-[100%] xl:max-w-[100px] border-1 border-[#939393] rounded-[5px] text-[#939393] text-[12px] font-[400] p-[5px_10px]"
                />
                <input
                  type="number"
                  placeholder="макс. цена"
                  className="w-[100%] xl:max-w-[100px] border-1 border-[#939393] rounded-[5px] text-[#939393] text-[12px] font-[400] p-[5px_10px]"
                />
              </div>
              <button className="py-[10px] bg-[#3A8F34] rounded-[5px] text-[#fff] text-[16px] font-[700]">
                Фильтровать
              </button>
            </div>
          </div>
          <div className="w-[100%] xl:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            <CatalogCards
              selectedCategory={selectedCategory}
              basket={basket}
              setBasket={setBasket}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CatalogPage;
