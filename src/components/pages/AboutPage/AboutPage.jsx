import logo from "../../../../public/logo.png"
import ParagraphHeadings from "../../ParagraphHeadings/ParagaraphHeadings.jsx"
import ArticleLists from "./ArticleLists.jsx"
import Paragraph from "./Paragraph.jsx"
import SectionTitles from "../../sectionTitles/sectionTitles.jsx"
import PageQuestions from "../../pageQuestions/pageQuestions.jsx"
import { useEffect } from "react"

function AboutPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <main>
                <SectionTitles title={"О нас"} />
                <section className="py-[50px] mb-[50px] bg-[#FFFFFF]">
                    <div className="container">
                        <div className="flex flex-col items-center md:flex-row gap-[25px] mb-[40px]">
                            <img src={logo} alt="" className="w-[200px] md:w-[200px] md:h-[160px]" />
                            <p className="text-[#4B4B4B] text-[18px] font-[500]">Радиаторы отопления и полотенцесушители, напольные и внутрипольные конвекторы уже давно перестали быть только функциональными изделиями, которые должны «прятаться за шторами».
                                Насыщенность рынка однотипными приборами отопления подтолкнула нас к продаже изделий нового поколения элегантных, лаконичных и нестандартных моделей, которые
                                уже успели хорошо зарекомендовать себя при эксплуатации в «наших» системах
                                отопления. Теперь современные приборы отопления являются полноценными элементами декора
                                интерьера. Они призваны подчеркивать его эксклюзивность и стиль, и являются эдакой «изюминкой» в проектах дизайнеров.</p>
                        </div>
                        <article className="flex flex-col gap-[20px]">
                            <div className="">
                                <ParagraphHeadings title={"Миссия компании"} />
                                <p className="text-[#4B4B4B] text-[20px] font-[500]"><span className="text-[#3A8F34]">«Теплый Поток»</span> создан чтобы дарить комфорт в элегантной форме, доставляя украшая ваш дом.</p>
                                <ul>
                                    <ArticleLists text={"Мы меняем к лучшему жизнь людей в их домах."} />
                                    <ArticleLists text={"Дарим удобство и уют, чувство спокойствия и надежности."} />
                                    <ArticleLists text={"С заботой о вас!"} />
                                </ul>
                            </div>
                            <div>
                                <ParagraphHeadings title="Бизнес-идея" />
                                <Paragraph text={"Наша миссия — это причина нашего существования, а бизнес-идея — его цель. И заключается она в стремлении создания у вас чувства полной удовлетворенности с помощью индивидуального подбора объектов отопления для дома, которые будут не просто функциональны и качественны, но и красиво впишутся в интерьер, соблюдая дизайн-эстетику, а в некоторых случаях будут самостоятельными арт-объектами. А также осуществление достойного и искреннего клиентского сервиса. Всё это мы стремимся достигнуть с помощью постоянного обучения и самосовершенствования, отслеживания новых тенденций и изучения инноваций."} />
                            </div>
                            <div>
                                <ParagraphHeadings title="Наша философия" />
                                <Paragraph text={"Когда мы задумались над тем, какой должна быть наша компания, какие люди и как в ней должны трудиться, осознанием стала мысль: главное, что нужно делать в жизни — это быть внимательным к моменту «здесь и сейчас». Когда все мысли сосредоточены на текущем моменте, человек по-настоящему внимателен и не отвлекается ни на что другое. Когда человек хорошо делает свое дело, тогда он счастлив и приносит пользу другим людям."} />
                            </div>
                            <div>
                                <ParagraphHeadings title="Наши ценности:" />
                                <ul className="mb-[40px]">
                                    <ArticleLists text={"Здравый смысл"} />
                                    <ArticleLists text={"Ориентация на качество и разнообразие"} />
                                    <ArticleLists text={"Гарант надежности и стабильности"} />
                                    <ArticleLists text={"Нацеленность на результат"} />
                                    <ArticleLists text={"Честность"} />
                                    <ArticleLists text={"Неравнодушие"} />
                                    <ArticleLists text={"Уважение к сотрудникам и клиентам"} />
                                    <ArticleLists text={"Личностное развитие и творческая свобода"} />
                                </ul>
                                <Paragraph text={`Компания «Теплый Поток» внимательно следит за мировыми технологическими новинками и современными тенденциями в дизайне приборов отопления. В нашем интернет-магазине вы можете выбрать не только стандартные модели, но и заказать продукцию по индивидуальным размерам понравившегося цвета, либо с нанесением изображения, подобрать вариант, подходящий именно под ваш интерьер. Каждое изделие проходит тщательный контроль качества на производстве. Приборы отопления полностью удовлетворяют всем требованиям технических регламентов, соответствуют положениям мировых стандартов качества и безопасности, предъявляемых к данному типу изделий. Все изделия выпускаются из высококлассного сырья с использованием только качественных комплектующих. Все представленное оборудование соответствует мировым стандартам, прошло сертификацию в России и застраховано. Наше оборудование подобрано для российских условий эксплуатации, что обеспечивает его надежную работу.`} />
                            </div>
                            <div>
                                <ParagraphHeadings title="Для вас качественный сервис" />
                                <ul>
                                    <ArticleLists text={"Наша главная витрина – это онлайн-каталог, в котором представлен широкий и удобный выбор товаров от ведущих европейских и российских производителей"} />
                                    <ArticleLists text={"Основа нашей деятельности – это гармония цены и качества"} />
                                    <ArticleLists text={"Гарант надежности и стабильности"} />
                                    <ArticleLists text={"Наши находчивые менеджеры – это специалисты в своем деле, которые помогут в подборе оборудования под ваши потребности и ответят на любые технические вопросы в режиме on-line"} />
                                    <ArticleLists text={"Вы можете оформить заказ на сайте и заказать доставку «до вашего дома» в удобное для вас время или самостоятельно забрать товар из магазина «Теплый Поток»"} />
                                </ul>
                            </div>
                            <div>
                                <ParagraphHeadings title="Максимально удобно для вас" />
                                <ul>
                                    <ArticleLists text={"Разнообразие товаров в наличии и под заказ"} />
                                    <ArticleLists text={"Комфортный сервис для подбора оборудования"} />
                                    <ArticleLists text={"Подробная информация о технических характеристиках и применении"} />
                                    <ArticleLists text={"Оборудования"} />
                                    <ArticleLists text={"Быстрая обработка заказа"} />
                                    <ArticleLists text={"Удобная доставка"} />
                                    <ArticleLists text={"Профессиональные консультанты, которые ценят ваше время"} />
                                </ul>
                            </div>
                            <ParagraphHeadings title="Мы открыты к сотрудничеству и всегда будем рады проконсультировать вас по вопросам выбора модели и комплектации изделия по телефону +7 977 837 12 45." />
                        </article>
                    </div>
                </section>
                <PageQuestions />
            </main>
        </>
    )
}

export default AboutPage