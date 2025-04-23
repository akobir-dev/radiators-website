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

  return (
    <>
      <HeaderMain />
      <main>
        <section className="container mb-[90px]" data-aos="fade-left">
          <SectionTitles title={"Каталог"} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[38px]">
            {categoryDatas.map((categoryData) => {
              return (
                <div
                  key={categoryData.id}
                  className="h-auto max-w-[373px] p-[10px] sm:p-[15px] xl:p-[30px] bg-[#fff] rounded-[5px] flex flex-col gap-[25px]"
                >
                  <img
                    src={categoryData.img}
                    alt=""
                    className="rounded-[5px] h-auto"
                  />
                  <h3 className="text-center text-[#4B4B4B] text-[15px] sm:text-[18px] font-[500]">
                    {categoryData.title}
                  </h3>
                  <Link
                    to="/catalog"
                    className="p-[10px_10px] sm:p-[10px_20px] border-[3px] border-[#3A8F34] text-[#3A8F34] text-center rounded-[5px] text-[12px] sm:text-[15px] sm:text-[18px] font-[500]"
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
          <div className="flex flex-wrap gap-[66px] justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/2c29/1555/bfd1c7a102fb22411c089e05c701224c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LIT72M7byXoQyTao5N8i3uc2bAOogrF5grPU5rVSPPnMkn~KZ22V7yB7WgHVMGhDhs33zgsxeKpuC-fopu-myDnZnJerV7-FHaZPDrrE3BGu4enhVIQknjx4GqQ-AuO~Ytx08UAkr~Y2AUzQ1ECSvsGOpf22CAGa6e-Ajn9s5wzcpdK-VG~W9Rd6s1ufK9McK1dUuTBmZXbWACRKLasqNRquANDsL0GnmIlIywXoA0oO~q2lWiw8cPs4hO8xjGDwPoTqSl4oId9B0ipSKj4~qj1eZcSF6UluNMlzuCG5xDB38LLFbsuHdN35CJOiFj-KocxbaSZkOpHb1wAWXMYkSw__"
              alt=""
              className="h-[185px] max-w-[300px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/2c29/1555/bfd1c7a102fb22411c089e05c701224c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LIT72M7byXoQyTao5N8i3uc2bAOogrF5grPU5rVSPPnMkn~KZ22V7yB7WgHVMGhDhs33zgsxeKpuC-fopu-myDnZnJerV7-FHaZPDrrE3BGu4enhVIQknjx4GqQ-AuO~Ytx08UAkr~Y2AUzQ1ECSvsGOpf22CAGa6e-Ajn9s5wzcpdK-VG~W9Rd6s1ufK9McK1dUuTBmZXbWACRKLasqNRquANDsL0GnmIlIywXoA0oO~q2lWiw8cPs4hO8xjGDwPoTqSl4oId9B0ipSKj4~qj1eZcSF6UluNMlzuCG5xDB38LLFbsuHdN35CJOiFj-KocxbaSZkOpHb1wAWXMYkSw__"
              alt=""
              className="h-[185px] max-w-[300px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/58ae/760d/9de575a00805464ea45a3e61fffdd031?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kv14LkWRV9ycrTdYOTT9tB~58eKKPveBuvxSEf-5EFKbK0U4VvMrJDUj98HV9fqEpD4vuSkshVxXIhStuW9gvbRIQmhyCYIsVW0YAbbKilezbXfDPqKA-LuD6Ec10Ho94r2-nSTyLeYn18qwD1GrCYyv8Rrh1vFI7SuhdfzKEUYBdnOS14YAqohl~bJYJPh60nN5OQEYgyYD-Iyc5AYpnJFjbJKXporGATrFgtt1U-4R2s8YmR2acMOujLf0sUDjkLdKCXSCtH~FBO3hNfcnICknjv2pwmQ6QIuUIaLLolTe3oP9l1RObo8yC~2I0WyWBKQM~9T5ll7r7~QvKcYB9Q__"
              alt=""
              className="h-[185px] max-w-[300px]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/2c29/1555/bfd1c7a102fb22411c089e05c701224c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LIT72M7byXoQyTao5N8i3uc2bAOogrF5grPU5rVSPPnMkn~KZ22V7yB7WgHVMGhDhs33zgsxeKpuC-fopu-myDnZnJerV7-FHaZPDrrE3BGu4enhVIQknjx4GqQ-AuO~Ytx08UAkr~Y2AUzQ1ECSvsGOpf22CAGa6e-Ajn9s5wzcpdK-VG~W9Rd6s1ufK9McK1dUuTBmZXbWACRKLasqNRquANDsL0GnmIlIywXoA0oO~q2lWiw8cPs4hO8xjGDwPoTqSl4oId9B0ipSKj4~qj1eZcSF6UluNMlzuCG5xDB38LLFbsuHdN35CJOiFj-KocxbaSZkOpHb1wAWXMYkSw__"
              alt=""
              className="h-[185px] max-w-[300px]"
            />
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
                  src="https://s3-alpha-sig.figma.com/img/1cb2/9f6b/0867d28e032afff93c12351767f7f8b4?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BB69EIlacCES6HMM-6zaudjCeozSDhO757XdlP-3CA0e2kRTVabSYFWv6A4E6sfu2rQgjGu~xLB6-Y0CQTWHaqllcXd3HuzFSfeG~4~AUoc2~kmi2GaX5VoCtQdWh8hsVHprQZg~wkJgjlQ~s7IeiVs7X3SrjzxUO8Fel4ad9DOeTJnY7QbqNs6gKoQZgzvf1xCCzwHVqMQbD~SsMuKbytlkzSBbW0SG-rvIIAFdseHuylgXKz4Eq2~jBfsMLFQNxc~n2Lanthy1MIJ4ziR1KHLgBijvuvPFJdQmh74yH6ENEHiqFW8qa1-Aqwya00ge2QquPaDM6lFKaO5wgukK8Q__"
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
              src="https://s3-alpha-sig.figma.com/img/2e52/6519/fa95c4c6a73feebe1aefb12040e5e515?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UK8jzJObACdfvZdl6BWzJfhKPYNehaQ9e9GdrdGSGp953n7QSeqtPSLpByKk5NRrgLChkScLiuANNOLbroPcSEtKzES7PCdSfeUsBZUlZiIlXkImYhAcT7qtuIyuHCzBUn1rgfMm5i8nGvVTRKByjBynISpE3s68LKQug9gOo0RhcY8z5JnCSOJVPlWP0BQuOI-m3IcEbiJ0nE8XuYgKk8QwTh1fDraPStyTqZfy7cRustoTxhu~iB7TdkLHxakCYt6iWIVZGXmJck1bcX6mw1YtyRGnelCwKC2L7PSsXr3eG6Nm3k7m6Rpj99rZuC0~SMHwOpOGfFeNYkAcGWv2UQ__"
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="md:w-[100%] md:h-[740px] lg:w-[50%] lg:h-[370px] overflow-hidden flex flex-col gap-[40px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/2e52/6519/fa95c4c6a73feebe1aefb12040e5e515?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UK8jzJObACdfvZdl6BWzJfhKPYNehaQ9e9GdrdGSGp953n7QSeqtPSLpByKk5NRrgLChkScLiuANNOLbroPcSEtKzES7PCdSfeUsBZUlZiIlXkImYhAcT7qtuIyuHCzBUn1rgfMm5i8nGvVTRKByjBynISpE3s68LKQug9gOo0RhcY8z5JnCSOJVPlWP0BQuOI-m3IcEbiJ0nE8XuYgKk8QwTh1fDraPStyTqZfy7cRustoTxhu~iB7TdkLHxakCYt6iWIVZGXmJck1bcX6mw1YtyRGnelCwKC2L7PSsXr3eG6Nm3k7m6Rpj99rZuC0~SMHwOpOGfFeNYkAcGWv2UQ__"
              alt=""
              className="w-[100%] h-[50%] rounded-[5px] object-cover"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/b0c4/afd5/ca605bb092eeb4d435105cc14d75e027?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OEIXp0Hrcne-m-4oJmmo95A~Ph6olyPURNS16k4iPOt~LoCmJAuWfxK53ZSjYHNsqvmTWH1H9Bm4vwMkJAnUfXKiPfnAXJwzHoUM1MU13dCAVG4TbVQTaB5ufpse6Wfs~DjOV2YCW24imePwgtzqKf8M5fLRL9ciIGL42lssDUqR0PjuQ4IjOtCtlEBaxMJyXg3yb~qq4yotoaW5U3BTdDqXoiBkRR6nLzwMX2cZZmbwOyzuD3VTXQYYnv73OMoYOL-ljGXHng-~d8M~mjqvGR~uN6qWO1SPXfpp2d6xVi06zzjqZvwCcont2BZqpQbAjXKRLnm0gm3ncQLl9QPd~Q__"
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
