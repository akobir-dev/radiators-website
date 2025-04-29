import { BsCart2, BsBox2 } from "react-icons/bs";
import { LiaTruckMovingSolid } from "react-icons/lia";
import Dots from "./Dots.jsx";
import ParagraphHeadings from "../../ParagraphHeadings/ParagaraphHeadings.jsx";
import ParagraphLists from "./ParagraphLists.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Delivery() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);

  return (
    <>
      <div className="hidden md:flex items-center justify-between mb-[30px]" data-aos="fade-left">
        <div className="flex flex-col items-center gap-[22px]">
          <BsCart2 className="text-[#3A8F34] text-[100px] lg:text-[200px]  rounded-[50%] p-[60px] bg-[#F9F9F9]" />
          <h3 className="text-[#4B4B4B] text-[20px] lg:text-[26px] font-[500]">
            Сделайте заказ
          </h3>
        </div>
        <Dots />
        <div className="flex flex-col items-center gap-[22px]">
          <LiaTruckMovingSolid className="text-[#3A8F34] rounded-[50%] text-[100px] lg:text-[200px] p-[60px] bg-[#F9F9F9]" />
          <h3 className="text-[#4B4B4B] text-[20px] lg:text-[26px] font-[500]">
            Выберите адрес доставки
          </h3>
        </div>
        <Dots />
        <div className="flex flex-col items-center gap-[22px]">
          <BsBox2 className="text-[#3A8F34] text-[100px] lg:text-[200px]  rounded-[50%] p-[60px] bg-[#F9F9F9]" />
          <h3 className="text-[#4B4B4B] text-[20px] lg:text-[26px] font-[500]">
            Заберите заказ
          </h3>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-[10px] justify-between mb-[30px]" data-aos="fade-left">
        <div className="flex items-center gap-[14px]">
          <BsCart2 className="text-[#3A8F34] text-[20px]" />
          <h3 className="text-[#4B4B4B] text-[14px] font-[400]">
            Сделайте заказ
          </h3>
        </div>
        <div className="flex items-center gap-[14px]">
          <LiaTruckMovingSolid className="text-[#3A8F34] text-[20px]" />
          <h3 className="text-[#4B4B4B] text-[14px] font-[400]">
            Выберите адрес доставки
          </h3>
        </div>
        <div className="flex items-center gap-[14px]">
          <BsBox2 className="text-[#3A8F34] text-[20px]" />
          <h3 className="text-[#4B4B4B] text-[14px] font-[400]">
            Заберите заказ
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]" data-aos="fade-left">
        <div className="flex flex-col gap-[20px]">
          <div>
            <ParagraphHeadings title={"Доставка по г. Москве"} />
            <p className="text-[#4B4B4B] text-[18px] font-[300]">
              При наличии товара на складе, доставка осуществляется в течение 2
              рабочих дней, по согласованию.
            </p>
            <p className="text-[#4B4B4B] text-[18px] font-[300]">
              В случае, если требуется перемещение товара между складами, срок
              доставки может быть увеличен до 3-4 рабочих дней, в зависимости от
              расписания транспорта.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-[40px]">
              <ul>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  Доставка в пределах МКАД вес менее 40 кг
                </li>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  Доставка в пределах МКАД вес от 40 до 100 кг
                </li>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  Доставка в пределах МКАД вес от 200 до 300 кг
                </li>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  Доставка в пределах МКАД вес от 300 кг
                </li>
              </ul>
              <ul>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  800 руб.
                </li>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  1800 руб.
                </li>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  2500 руб.
                </li>
                <li className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
                  3000 руб.
                </li>
              </ul>
            </div>
            <p className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
              Доствка за МКАД: + 45 руб. за каждый км к вышеуказанному тарифу
            </p>
            <p className="text-[#4B4B4B] text-[17px] md:text-[22px] font-[500]">
              Заказы весом свыше 400 кг рассчитываются отдельно логистом
            </p>
          </div>
          <p className="text-[#4B4B4B] text-[18px] font-[300]">
            Для доставки необходимо указать точный адрес и контактный номер
            телефона. А для доставки в загородные дома укажите дополниетельную
            информацию: наличие дороги, пригодной для проезда транспорта к месту
            доставки; особенности подъезда к месту разгрузки; наличие шлагбаума;
            наличие охраны и др.
          </p>
          <p className="text-[#4B4B4B] text-[18px] font-[300]">
            Если въезд до места доставки платный, покупателю необходимо
            компенсировать расходы на проезд, либо оформить доставку до места
            платного въезда. Доставка товара осуществляется до входной двери
            подъезда, офисного здания, калитки частного дома.
          </p>
        </div>
        <div>
          <ParagraphHeadings title={"Самовывоз"} />
          <ul>
            <p className="text-[#4B4B4B] text-[18px] font-[500]">
              Забрать заказ самостоятельно вы можете из пункта самовывоза по
              адресу: <span className="font-[300]">г. Москва,</span>
            </p>
            <p className="text-[#4B4B4B] text-[18px] font-[500]">
              График работы:{" "}
              <span className="font-[300]">ежедневно с 10:00 до 19:00.</span>
            </p>
            <ParagraphLists
              text={
                "Забрать заказ из пунктов самовывоза вы сможете после подтверждения о его готовности. Для этого дождитесь звонка от нашего менеджера, либо перед поездкой уточните информацию о заказе по телефону: 8 (495) 7777777."
              }
            />
            <ParagraphLists
              text={
                "В пункте самовывоза предусмотрен как наличный, так и безналичный расчет."
              }
            />
          </ul>
        </div>
        <div>
          <ParagraphHeadings title={"Доставка в другие города России"} />
          <ul>
            <ParagraphLists
              text={
                "Отправка товара в любой город России производиться через ТК Деловые Линии."
              }
            />
            <ParagraphLists
              text={
                "Возможна отправка любой другой компанией по желанию заказчика. В данном случае организация забора товара осуществляется Покупателем."
              }
            />
            <ParagraphLists
              text={
                "Доставка до терминала ТК в городе отправления осуществляется за счет компании."
              }
            />
            <ParagraphLists
              text={
                "Груз в обязательном порядке отправляется с жесткой упаковкой (при необходимости), а также страховкой (если данная услуга предусмотрена транспортной компанией)."
              }
            />
          </ul>
        </div>
        <div>
          <ParagraphHeadings title={"Правила приема товара"} />
          <ul>
            <ParagraphLists
              text={
                "Проверка и приемка товара покупателем осуществляется во время доставки; в случае самовывоза – при получении на складе. Все основные характеристики товара указаны в счёте на оплату к товару."
              }
            />
            <ParagraphLists
              text={
                "Перед подписанием документов обязательно убедитесь в полной комплектности заказа и отсутствии внешних дефектов товара. Претензии к внешнему виду доставленного товара в соответствии со ст. 458 и 459 ГК РФ можно предъявить только до передачи товара клиенту продавцом, и при их наличии покупатель вправе отказаться от товара."
              }
            />
            <ParagraphLists
              text={
                "При получении уже оплаченного заказа необходимо иметь при себе документ, подтверждающий личность, или доверенность на получение, или платежный документ."
              }
            />
            <ParagraphLists
              text={
                "При получении заказа представителем транспортной компании обязательно предъявление им доверенности от покупателя (в электронном виде) и доверенности от своей организации."
              }
            />
          </ul>
        </div>
        <div>
          <ParagraphHeadings title={"При получении товара в ПВЗ "} />
          <ul>
            <ParagraphLists
              text={
                "Транспортная компания принимает претензии по дефектным товарам только в момент вручения. Проверьте товар при вручении и сообщите работнику компании,если вы заметили какой-то дефект."
              }
            />
            <ParagraphHeadings title={"В данном случае необходимо:"} />
            <ul className="list">
              <ParagraphLists
                text={
                  "- составить акт, составленный в офисе ТК или в присутствии курьера, о поврежденном товаре;"
                }
              />
              <ParagraphLists
                text={
                  "- фотографии или видео коробкипакета, в которых вы получили товар, со всех сторон;"
                }
              />
              <ParagraphLists
                text={
                  "- фотографии или видео товара, где отчетливо видно повреждение."
                }
              />
            </ul>
          </ul>
        </div>
        <div>
          <ParagraphHeadings title={"Полное наименование организации:"} />
          <ParagraphHeadings title={"Адрес местонахождения:"} />
          <ParagraphHeadings title={"ОГРН:"} />
          <ParagraphHeadings title={"ИНН:"} />
        </div>
      </div>
    </>
  );
}

export default Delivery;
