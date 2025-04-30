import { categoryDatas } from "../../../datas/data.js";
import SectionTitles from "../../sectionTitles/sectionTitles.jsx";
import { Link } from "react-router-dom";
import HeaderMain from "../../header/HeaderMain.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // only animate once
    });
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <HeaderMain />
      <main>
        <section className="container mb-[90px]" data-aos="zoom-in">
          <SectionTitles title={"Каталог"} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[38px]">
            {categoryDatas.map((categoryData) => {

              return (
                <div
                  key={categoryData.id}
                  className="h-auto max-w-[373px] p-[10px] sm:p-[15px] xl:p-[30px] bg-[#fff] rounded-[5px] flex flex-col gap-[15px] sm:gap-[25px]"
                >
                  <div className="rounded-[5px] overflow-hidden h-[150px] sm:h-[300px] w-[100%]">
                    <img
                      src={categoryData.img}
                      alt=""
                      className="w-[100%] object-cover h-[100%]"
                    />
                  </div>
                  <h3 className="text-center text-[#4B4B4B] text-[15px] sm:text-[18px] font-[500]">
                    {categoryData.title}
                  </h3>
                  <Link
                    to="/catalog"
                    className="p-[5px_10px] sm:p-[10px_20px] border-[3px] border-[#3A8F34] text-[#3A8F34] text-center rounded-[5px] text-[12px] sm:text-[18px] font-[500] hover:bg-[#3A8F34] hover:text-[#fff] duration-150"
                  >
                    Перейти в каталог
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        <section className="container mb-[90px]" data-aos="fade-left">
          <SectionTitles title={"С кем мы работаем"} />
          <div className="flex flex-wrap gap-[60px] justify-center items-center">
            <div className="max-w-[300px] h-[185px]">
              <img
                src="https://optom-parfume.ru/wp-content/uploads/2022/12/prada-logo-png-transparent.png"
                alt=""
                className="h-[100%] object-contain w-[100%]"
              />
            </div>
            <div className="max-w-[300px] h-[185px]">
              <img
                src="https://fstok.ru/upload/iblock/875/6ikhav37qqn00wumcjvwknctk143k9di/mars.png"
                alt=""
                className="h-[100%] object-contain w-[100%]"
              />
            </div>
            <div className="max-w-[300px] h-[185px]">
              <img
                src="https://www.thenextsole.com/storage/RG5OPmKXxIv7QhG0ClxPQrPBdxCbiaLtKgG06KbW.png"
                alt=""
                className="h-[100%] object-contain w-[100%]"
              />
            </div>
            <div className="max-w-[300px] h-[185px]">
              <img
                src="https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(png):focal(1265x786:1267x784)/origin-imgresizer.eurosport.com/2023/05/17/3706776-75425448-2560-1440.png"
                alt=""
                className="h-[100%] object-contain w-[100%]"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#fff] mb-[90px]" data-aos="fade-left">
          <div className="container py-[80px]">
            <SectionTitles title={"О нас"} />
            <div className="flex flex-col lg:flex-row gap-[45px]">
              <div className="lg:max-w-[45%] flex flex-col gap-[20px]">
                <p className="text-[#4B4B4B] text-[15px] font-[400]">
                  Компания{" "}
                  <span className="text-[#3A8F34]">«Теплый Поток»</span>{" "}
                  внимательно следит за мировыми технологическими новинками и
                  современными тенденциями в дизайне приборов отопления.{" "}
                </p>
                <p className="text-[#4B4B4B] text-[15px] font-[400]">
                  Насыщенность рынка однотипными приборами отопления подтолкнула
                  нас к продаже изделий нового поколения элегантных, лаконичных
                  и нестандартных моделей, которые уже успели хорошо
                  зарекомендовать себя при эксплуатации в «наших» системах
                  отопления. Теперь современные приборы отопления являются
                  полноценными элементами декора интерьера. Они призваны
                  подчеркивать его эксклюзивность и стиль, и являются эдакой
                  «изюминкой» в проектах дизайнеров. В нашем интернет-магазине
                  вы можете выбрать не только стандартные модели, но и заказать
                  продукцию по индивидуальным размерам понравившегося цвета,
                  либо с нанесением изображения, подобрать вариант, подходящий
                  именно под ваш интерьер. Каждое изделие проходит тщательный
                  контроль качества на производстве. Приборы отопления полностью
                  удовлетворяют всем требованиям технических регламентов,
                  соответствуют положениям мировых стандартов качества и
                  безопасности, предъявляемых к данному типу изделий. Все
                  изделия выпускаются из высококлассного сырья с использованием
                  только качественных комплектующих. Все представленное
                  оборудование соответствует мировым стандартам, прошло
                  сертификацию в России и застраховано. Наше оборудование
                  подобрано для российских условий эксплуатации, что
                  обеспечивает его надежную работу. «Теплый Поток» создан чтобы
                  дарить комфорт в элегантной форме, доставляя тепло и украшая
                  ваш дом. Мы меняем к лучшему жизнь людей в их домах. Дарим
                  удобство и уют, чувство спокойствия и надежности. С заботой о
                  вас!
                </p>
                <p className="text-[#4B4B4B] text-[15px] font-[400]">
                  В нашем интернет-магазине вы можете выбрать не только
                  стандартные модели, но и заказать продукцию по индивидуальным
                  размерам понравившегося цвета, либо с нанесением изображения,
                  подобрать вариант, подходящий именно под ваш интерьер.
                </p>
                <p className="text-[#4B4B4B] text-[15px] font-[400]">
                  Каждое изделие проходит тщательный контроль качества на
                  производстве. Приборы отопления полностью удовлетворяют всем
                  требованиям технических регламентов, соответствуют положениям
                  мировых стандартов качества и безопасности, предъявляемых к
                  данному типу изделий. Все изделия выпускаются из
                  высококлассного сырья с использованием только качественных
                  комплектующих. Все представленное оборудование соответствует
                  мировым стандартам, прошло сертификацию в России и
                  застраховано. Наше оборудование подобрано для российских
                  условий эксплуатации, что обеспечивает его надежную работу.
                </p>
                <p className="text-[#4B4B4B] text-[15px] font-[400]">
                  <span className="text-[#3A8F34]">«Теплый Поток»</span> создан
                  чтобы дарить комфорт в элегантной форме, доставляя тепло
                  иукрашая ваш дом. Мы меняем к лучшему жизнь людей в их домах.
                </p>
                <p className="text-[#4B4B4B] text-[15px] font-[400]">
                  Дарим удобство и уют, чувство спокойствия надежности. С
                  заботой о вас!
                </p>
              </div>
              <div className="h-[100] lg:max-w-[55%] rounded-[5px] overflow-hidden">
                <img
                  src="https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_499147276_329712.jpg"
                  alt=""
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="container flex flex-col lg:flex-row items-center gap-[40px] mb-[90px]"
          data-aos="fade-left"
        >
          <div className="md:w-[100%] lg:w-[50%] md:h-[370px] rounded-[5px] overflow-hidden">
            <img
              src="https://deniseleeyohn.com/wp-content/uploads/2014/03/discount.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="md:w-[100%] md:h-[740px] lg:w-[50%] lg:h-[370px] overflow-hidden flex flex-col gap-[40px]">
            <img
              src="https://magicstonegc.com/wp-content/uploads/2016/07/Special-Sale-Pic.png"
              alt=""
              className="w-[100%] h-[50%] rounded-[5px] object-cover"
            />
            <img
              src="https://ellipsesolutions.com/wp-content/uploads/2022/05/Discounts-in-D365.jpg"
              alt=""
              className="w-[100%] h-[50%] rounded-[5px] object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
