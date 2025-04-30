import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CatalogCards2({ data, basket, setBasket }) {
  let [buttonActive, setButtonActive] = useState(() => {
    const storedButtonActive = localStorage.getItem(`buttonActive_${data.id}`);
    return storedButtonActive || "passive";
  });

  useEffect(() => {
    localStorage.setItem(`buttonActive_${data.id}`, buttonActive);
  }, [buttonActive, data.id]);
  const handleClick = () => {
    const isInBasket = basket.some((item) => item.id === data.id);

    if (isInBasket) {
      setBasket(basket.filter((item) => item.id !== data.id));
      setButtonActive("passive");
      localStorage.removeItem(`productQuantity_${data.id}`);
    } else {
      setBasket([data, ...basket]);
      setButtonActive("active");
      localStorage.setItem(`productQuantity_${data.id}`, "1");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <div
      key={data.id}
      className="flex flex-col gap-[20px] p-[20px] bg-[#fff] rounded-[5px] max-w-[100%] h-auto shadow-lg"
      data-aos="zoom-in"
    >
      <div className="relative max-w-[100%] h-[300px]">
        <p
          className={`absolute left-2 top-2 text-[#fff] text-[22px] font-[500] p-[5px_10px] bg-[#46A340] rounded-[5px] ${
            data.discount ? "flex" : "hidden"
          }`}
        >
          {`${data.discount}%`}
        </p>
        <img
          src={data.imageUrl}
          alt=""
          className="w-[100%] h-[100%] object-cover rounded-[5px]"
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <Link
            to="/catalog/single-product"
            className="text-[#666666] text-[18px] font-[500]"
            onClick={() =>  
              localStorage.setItem("selectedProduct", JSON.stringify(data))
            }
          >
            {data.name}
          </Link>
          <p className="text-[#939393] text-[10px] text-right font-[400]">
            код товара: {data.productCode}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[10px] items-center">
            <ul className="flex flex-col gap-[6px] items-start">
              <li className="text-[#4B4B4B] text-[14px] font-[400]">
                Площадь:
              </li>
              <li className="text-[#4B4B4B] text-[14px] font-[400]">
                Применение:
              </li>
            </ul>
            <ul className="flex flex-col gap-[6px] items-end">
              <li className="text-[#4B4B4B] text-[14px] font-[500]">
                до 50 м2
              </li>
              <li className="text-[#4B4B4B] text-[14px] font-[500]">
                для дома
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end gap-[2px]">
            <p
              className={
                data.discount
                  ? "text-[#4B4B4B] text-[14px] font-[400] line-through"
                  : "text-[#4B4B4B] text-[20px] font-[700]"
              }
            >
              {data.originalPrice} ₽
            </p>
            <p
              className={`text-[#4B4B4B] text-[20px] font-[700] ${
                data.discount ? "flex" : "hidden"
              }`}
            >
              {data.discount
                ? data.originalPrice -
                  (data.originalPrice * data.discount) / 100
                : ""}
              ₽
            </p>
          </div>
        </div>
        <button
          className="flex items-center gap-[6px] justify-center rounded-[5px] text-[#fff] text-[20px] font-[500] p-[10px_10px] bg-[#3A8F34] hover:bg-[#fff] border-3 border-[#3A8F34] hover:text-[#3A8F34] duration-300 active:bg-[#3A8F34] active:text-[#fff]"
          onClick={handleClick}
        >
          {buttonActive === "passive"
            ? "Добавить в корзину"
            : "Добавлено в корзину"}
          <BsCart2 />
        </button>
      </div>
    </div>
  );
}
export default CatalogCards2;
