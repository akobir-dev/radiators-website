import { BsCart2 } from "react-icons/bs";
import { useState, useEffect } from "react";
import Features from "./Features";
import Description from "./Description";
import AOS from "aos";
import "aos/dist/aos.css";

function SingleProductPage({ basket, setBasket }) {
  const data = JSON.parse(localStorage.getItem("selectedProduct"));
  const [activeTab, setActiveTab] = useState("Features");
  useEffect(() => {
    window.scrollTo({ top: 30, behavior: "smooth" });
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


  const [buttonActive, setButtonActive] = useState(() => {
    const storedButtonActive = localStorage.getItem(`buttonActive_${data.id}`);
    return storedButtonActive || "passive";
  });

  const [productQuantity, setProductQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem(`productQuantity_${data.id}`);
    return storedQuantity ? parseInt(storedQuantity, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`buttonActive_${data.id}`, buttonActive);
  }, [buttonActive, data.id]);

  useEffect(() => {
    localStorage.setItem(`productQuantity_${data.id}`, productQuantity);
  }, [productQuantity, data.id]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <main className="container mt-[50px]">
        <section
          className="bg-[#fff] rounded-[10px] h-auto p-[20px] flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[50px] shadow-2xl"
          data-aos="zoom-in"
        >
          <h1 className="text-[#4B4B4B] text-[25px] font-[500] lg:hidden">
            {data.name}
          </h1>
          <div className="w-[100%] h-[300px] lg:h-[500px] relative rounded-[5px] overflow-hidden">
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
            <div className="flex items-start lg:items-start flex-col md:items-end md:flex-row lg:flex-col justify-between w-[100%]">
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
              <div className="w-[50%] lg:w-[100%]">
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
                <div>
                  <button
                    className={`${productQuantity === 0 ? "text-[#fff] hover:text-[#3A8F34] border-[#3A8F34] bg-[#3A8F34]" : "hidden"} flex items-center w-[100%] gap-[6px] justify-center rounded-[5px] text-[20px] font-[500] p-[10px_10px] hover:bg-[#fff] border-3 duration-300`}
                    onClick={handleClick}
                  >
                    Добавить в корзину
                    <BsCart2 />
                  </button>

                  <div className={`${productQuantity > 0 ? "flex" : "hidden"} items-center gap-[6px] justify-between rounded-[5px] text-[20px] font-[500] p-[10px_10px] border-3 border-amber-500 bg-amber-500`}>
                    <button
                      className="hover:bg-[#000] hover:text-[#fff] duration-150 p-[0px_10px] rounded-[5px]"
                      onClick={() => {
                        const newQty = productQuantity - 1;
                        setProductQuantity(newQty);
                        if (newQty <= 0) {
                          setButtonActive("passive");
                          setBasket(basket.filter((item) => item.id !== data.id));
                          localStorage.removeItem(`productQuantity_${data.id}`);
                        }
                      }}
                    >
                      -
                    </button>
                    <p>{productQuantity}</p>
                    <button
                      className="hover:bg-[#000] hover:text-[#fff] duration-150 p-[0px_10px] rounded-[5px]"
                      onClick={() => setProductQuantity(productQuantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-[#fff] rounded-[10px] h-auto p-[30px] gap-[30px] my-[50px] shadow-2xl"
          data-aos="zoom-in"
        >
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
