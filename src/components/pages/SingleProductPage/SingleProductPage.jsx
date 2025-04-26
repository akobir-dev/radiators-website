import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import Features from "./Features";
import Description from "./Description";

function SingleProductPage() {
  const data = JSON.parse(localStorage.getItem("selectedProduct"));
  const [activeTab, setActiveTab] = useState("Features");

  return (
    <>
      <main className="container mt-[90px]">
        <section className="bg-[#fff] h-auto p-[40px] flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[50px]">
          <h1 className="text-[#4B4B4B] text-[44px] font-[500] lg:hidden">
            {data.name}
          </h1>
          <div className="w-[100%]  lg:max-w-[40%] h-[80vh] relative rounded-[5px] overflow-hidden">
            <p className="absolute text-[#fff] bg-[#46A340] text-[28px] font-[500] p-[5px_10px] top-5 left-5 rounded-[5px]">
              {data.discount} %
            </p>
            <img
              src={data.imageUrl}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="w-[100%] lg:max-w-[60%] h-[40%]">
            <h1 className="hidden lg:flex text-[#4B4B4B] text-[44px] font-[500]">
              {data.name}
            </h1>
            <p className="text-[#939393] text-[20px] font-[300]">
              Код товара: {data.productCode}
            </p>
            <div className="flex flex-wrap lg:flex-col justify-between items-center flex-row lg:items-start w-[100%]">
              <div className="flex flex-col gap-[16px] my-[30px]">
                <p className="text-[#4B4B4B] text-[20px] font-[500]">
                  Характеристики
                </p>
                <div className="flex gap-[22px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="text-[#4B4B4B] text-[20px] font-[400]">
                      Теплоотдача:
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[400]">
                      Площадь:
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[400]">
                      Материал:
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[400]">
                      Давление:
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[400]">
                      Межосевое расстояние:
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[400]">
                      Гарантия:
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-[10px]">
                    <li className="text-[#4B4B4B] text-[20px] font-[500]">
                      20.1 м2
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[500]">
                      до 50 м2
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[500]">
                      на стену
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[500]">
                      до 10 бар
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[500]">
                      на стену
                    </li>
                    <li className="text-[#4B4B4B] text-[20px] font-[500]">
                      до 10 бар
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[#4B4B4B] text-[25px] font-[500] flex items-center gap-[10px]">
                  Первоначальная цена:
                  <span
                    className={
                      data.discount
                        ? "text-[#939393] font-[300] line-through"
                        : "text-[#4B4B4B] text-[48px] font-[700]"
                    }
                  >
                    {data.originalPrice} ₽
                  </span>
                </p>
                <p
                  className={`text-[#4B4B4B] text-[25px] font-[500] flex items-center gap-[10px] ${
                    data.discount ? "flex" : "hidden"
                  }`}
                >
                  Цена со скидкой:
                  <span className="text-[#4B4B4B] text-[40px] font-[700]">
                    {data.discount
                      ? data.originalPrice -
                        (data.originalPrice * data.discount) / 100
                      : ""}
                    ₽
                  </span>
                </p>
                <div className="flex flex-col gap-[16px]">
                  <button className="flex items-center justify-center gap-[8px] bg-[#3A8F34] text-[#fff] text-[20px] font-[700] p-[15px_50px] rounded-[5px]">
                    Добавить в корзину
                    <BsCart2 className="text-[25px]" />
                  </button>
                  <button className="flex items-center justify-center w-[100%] gap-[8px] bg-[#fff] border-3 border-[#3A8F34] text-[#3A8F34] text-[20px] font-[700] p-[15px_50px] rounded-[5px]">
                    Купить в один клик
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#fff] h-auto p-[30px] gap-[30px] my-[90px]">
          <div className="flex items-center gap-[30px] mb-[30px]">
            <button
              className={`text-[20px] font-[300]${
                activeTab === "Features"
                  ? "text-[#3A8F34] underline font-[400]"
                  : "text-[#939393]"
              }`}
              onClick={() => {
                setActiveTab("Features");
              }}
            >
              Характеристики
            </button>
            <button
              className={`text-[20px] font-[300]${
                activeTab === "Description"
                  ? "text-[#3A8F34] underline font-[400]"
                  : "text-[#939393]"
              }`}
              onClick={() => {
                setActiveTab("Description");
              }}
            >
              Описание
            </button>
          </div>
          <div>{activeTab === "Features" ? <Features /> : <Description />}</div>
        </section>
      </main>
    </>
  );
}

export default SingleProductPage;
