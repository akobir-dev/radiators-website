import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BasketCard({ basketData, setBasket, basket }) {
  const [productQuantity, setProductQuantity] = useState(() => {
    const isInBasket = basket.some((item) => item.id === basketData.id);
    if (isInBasket) {
      const saved = localStorage.getItem(`productQuantity_${basketData.id}`);
      return saved !== null ? Number(saved) : 1;
    } else {
      localStorage.removeItem(`productQuantity_${basketData.id}`);
      localStorage.setItem(`buttonActive_${basketData.id}`, "passive");
    }
  });
  useEffect(() => {
    localStorage.setItem(`productQuantity_${basketData.id}`, productQuantity);
  }, [productQuantity, basketData.id]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <div
      className={`flex items-center h-[146px] md:h-[260px] gap-[30px] p-[25px] bg-[#fff] rounded-[5px] ${
        productQuantity === 0 ? "hidden" : ""
      }`}
      key={basketData.id}
      data-aos="zoom-in"
    >
      <div className="relative w-[106px] md:w-[250px] h-[100%] rounded-[5px] overflow-hidden">
        <p className="absolute text-[#fff] bg-[#46A340] p-[5px] top-[10px] left-[10px] rounded-[5px]">
          {basketData.discount}%
        </p>
        <img
          src={basketData.imageUrl}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="flex justify-between items-center h-[100%] w-[100%]">
        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[#4B4B4B] text-[14px] md:text-[24px] font-[500]">
            {basketData.name}
          </h3>
          <div className="flex items-center gap-[20px]">
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[#4B4B4B] text-[14px] md:text-[20px] font-[400]">
                Теплоотдача:
              </li>
              <li className="text-[#4B4B4B] text-[14px] md:text-[20px] font-[400]">
                Количество:
              </li>
              <li className="text-[#4B4B4B] text-[14px] md:text-[20px] font-[400]">
                Цена за едeницу:
              </li>
            </ul>
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[#4B4B4B] text-[14px] md:text-[20px] font-[500]">
                20.1 м2
              </li>
              <li className="text-[#4B4B4B] text-[14px] md:text-[20px] font-[500] flex items-center gap-[5px]">
                <button
                  className="flex items-center justify-center text-[#939393] text-[15px] w-[20px] h-[20px] border-1 border-[#939393] rounded-[50%]"
                  onClick={() => {
                    if (productQuantity > 1) {
                      const newQuantity = productQuantity - 1;
                      setProductQuantity(newQuantity);
                      localStorage.setItem(
                        `productQuantity_${basketData.id}`,
                        newQuantity
                      );
                    } else {
                      const updatedBasket = basket.filter(
                        (item) => item.id !== basketData.id
                      );
                      setBasket(updatedBasket);
                      setProductQuantity(0);
                      localStorage.removeItem(
                        `productQuantity_${basketData.id}`
                      );
                      localStorage.setItem(
                        `buttonActive_${basketData.id}`,
                        "passive"
                      );
                    }
                  }}
                >
                  -
                </button>
                {productQuantity}
                <button
                  className="flex items-center justify-center text-[#939393] text-[15px] w-[20px] h-[20px] border-1 border-[#939393] rounded-[50%]"
                  onClick={() => {
                    setProductQuantity(productQuantity + 1);
                  }}
                >
                  +
                </button>
              </li>
              <li className="text-[#4B4B4B] text-[14px] md:text-[20px] font-[500]">
                {basketData.originalPrice}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between h-[100%]">
          <button
            className="text-[#939393] text-[20px]"
            onClick={() => {
              const deleteItem = basket.filter((basketItem) => {
                return basketData.id !== basketItem.id;
              });
              setBasket(deleteItem);
              localStorage.setItem(`buttonActive_${basketData.id}`, "passive");
              localStorage.removeItem(`productQuantity_${basketData.id}`);
            }}
          >
            <IoMdClose />
          </button>
          <div className="flex flex-col items-end">
            <h3
              className={`text-[#4B4B4B] text-[14px] md:text-[20px] font-[300] line-through ${
                basketData.discount ? "flex" : "hidden"
              }`}
            >
              {basketData.originalPrice * productQuantity} ₽
            </h3>
            <h3 className="text-[#4B4B4B] text-[20px] md:text-[24px] font-[700]">
              {basketData.discount
                ? (basketData.originalPrice -
                    (basketData.originalPrice * basketData.discount) / 100) *
                  productQuantity
                : basketData.originalPrice}
              ₽
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
