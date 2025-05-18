import { BsCart2 } from "react-icons/bs";
import { useState, useEffect } from "react";
import Features from "./Features";
import Description from "./Description";

function SingleProductPage({ basket, setBasket }) {
  const data = JSON.parse(localStorage.getItem("selectedProduct"));
  const [activeTab, setActiveTab] = useState("Features");
  const buttonActive = localStorage.getItem(`buttonActive_${data.id}`);
  useEffect(() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, []);
  const handleClick = () => {
    const isInBasket = basket.some((item) => item.id === data.id);

    if (isInBasket) {
      setBasket(basket.filter((item) => item.id !== data.id));
      localStorage.setItem(`buttonActive_${data.id}`, "passive")
      localStorage.removeItem(`productQuantity_${data.id}`);
    } else {
      setBasket([data, ...basket]);
      localStorage.setItem(`buttonActive_${data.id}`, "active")
      localStorage.setItem(`productQuantity_${data.id}`, "1");
    }
  };

  return (
    <>
      <main className="container mt-[50px]">
        <section className="bg-[#fff] h-[500px] p-[20px] flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[50px] shadow-lg">
          <h1 className="text-[#4B4B4B] text-[44px] font-[500] lg:hidden">
            {data.name}
          </h1>
          <div className="w-[100%] lg:max-w-[40%] h-[100%] relative rounded-[5px] overflow-hidden">
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
            <h1 className="hidden lg:flex text-[#4B4B4B] text-[30px] font-[500]">
              {data.name}
            </h1>
            <p className="text-[#939393] text-[15px] font-[300]">
              Код товара: {data.productCode}
            </p>
            <div className="flex flex-wrap lg:flex-col justify-between items-center flex-row lg:items-start w-[100%]">
              <div className="flex flex-col gap-[5px] my-[5px]">
                <p className="text-[#4B4B4B] text-[20px] font-[500]">
                  Характеристики
                </p>
                <div className="flex gap-[20px]">
                  <ul className="flex flex-col gap-[5px]">
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[400]">
                      Теплоотдача:
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[400]">
                      Площадь:
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[400]">
                      Материал:
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[400]">
                      Давление:
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[400]">
                      Межосевое расстояние:
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[400]">
                      Гарантия:
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-[5px]">
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[500]">
                      20.1 м2
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[500]">
                      до 50 м2
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[500]">
                      на стену
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[500]">
                      до 10 бар
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[500]">
                      на стену
                    </li>
                    <li className="text-[#4B4B4B] text-[15px] sm:text-[20px] font-[500]">
                      до 10 бар
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-end w-[100%]">
                <div>
                  <p className="text-[#4B4B4B] text-[20px] sm:text-[25px] font-[500] flex items-center gap-[10px]">
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
                    className={`text-[#4B4B4B] text-[20px] sm:text-[25px] font-[500] flex items-center gap-[10px] ${data.discount ? "flex" : "hidden"
                      }`}
                  >
                    Цена со скидкой:
                    <span className="text-[#4B4B4B] text-[35px] sm:text-[40px] font-[700]">
                      {data.discount
                        ? data.originalPrice -
                        (data.originalPrice * data.discount) / 100
                        : ""}
                      ₽
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <button className="flex items-center justify-center gap-[8px] bg-[#3A8F34] text-[#fff] text-[20px] font-[700] p-[15px_30px] sm:p-[15px_50px] rounded-[5px]"
                    onClick={handleClick}>
                    {buttonActive === "passive"
                      ? "Добавить в корзину"
                      : "Добавлено в корзину"}
                    <BsCart2 className="text-[25px]" />
                  </button>
                  <button className="flex items-center justify-center w-[100%] gap-[8px] bg-[#fff] border-3 border-[#3A8F34] text-[#3A8F34] text-[20px] font-[700] p-[15px_30px] sm:p-[15px_50px] rounded-[5px]">
                    Купить в один клик
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#fff] h-auto p-[30px] gap-[30px] my-[50px] shadow-lg">
          <div className="flex items-center gap-[30px] mb-[30px]">
            <button
              className={`text-[20px] font-[300]${activeTab === "Features"
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
              className={`text-[20px] font-[300]${activeTab === "Description"
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
