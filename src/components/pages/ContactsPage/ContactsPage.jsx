import PageQuestions from "../../pageQuestions/pageQuestions.jsx"
import SectionTitles from "../../sectionTitles/sectionTitles.jsx"
import { useEffect } from "react";

function ContactsPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <main>
                <SectionTitles title={"Контакты"} />
                <section className="bg-[#fff] py-[60px] mb-[50px]">
                    <div className="container">
                        <h2 className="text-[20px] font-[500] mb-[20px]">Где мы находимся:</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d390692.883545212!2d68.00200408878968!3d40.09128795012209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1744361481402!5m2!1suz!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-lg w-full mb-[50px]"
                        />
                        <h2 className="text-[#4B4B4B] text-[22px] font-[700] mb-[20px]">Наш адрес:</h2>
                        <p className="text-[#4B4B4B] text-[20px] font-[400] mb-[50px]">Москва, Павловская 16</p>
                        <ul className="flex flex-col gap-[20px]">
                            <li className="text-[#4B4B4B] text-[20px] font-[400]">
                                <span className="font-[500]">Пн-Пт:</span> 09:00 — 20:00 <br />
                                <span className="font-[500]">Сб-Вс:</span> 10:00 — 18:00
                            </li>
                            <li className="text-[#4B4B4B] text-[20px] font-[400]">+7 (977) 837-12-45</li>
                            <li className="text-[#4B4B4B] text-[20px] font-[400]">info@teplypotok.ru</li>
                            <li className="text-[#4B4B4B] text-[20px] font-[400]">
                                <span className="font-[500]">Как пройти</span> – текстовое описание … (схема на карте – активная ссылка, открывается следующей
                                страницей и фото - открывается следующей страницей)
                            </li>
                            <li className="text-[#4B4B4B] text-[20px] font-[400]">
                                <span className="font-[500]">Как проехать</span> – текстовое описание … (схема на карте - активная ссылка, открывается следующей
                                страницей и фото - открывается следующей страницей)
                            </li>
                            <li className="text-[#4B4B4B] text-[20px] font-[500]">Парковка …</li>
                            <li className="text-[#4B4B4B] text-[20px] font-[500]">Реквизиты …</li>
                        </ul>
                    </div>
                </section>
                <PageQuestions />
            </main>
        </>
    )
}

export default ContactsPage