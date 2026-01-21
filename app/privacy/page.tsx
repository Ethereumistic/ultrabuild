import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Политика за поверителност | Ultra Build",
    description: "Политика за поверителност на личните данни в УЛТРА БИЛД",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 ">
            <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/[0.02] p-8 md:p-12  border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10   blur-[100px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5   blur-[100px] -ml-32 -mb-32" />

                <h1 className="text-3xl md:text-5xl font-bold mb-12 text-white tracking-tight bg-gradient-to-br from-white via-white to-white/40 bg-clip-text">
                    Политика за поверителност на личните данни в УЛТРА БИЛД
                </h1>

                <div className="space-y-12 text-gray-400 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-primary tracking-widest text-sm uppercase">01</span>
                            Обща информация
                        </h2>
                        <div className="space-y-4">
                            <p>
                                От 25 май 2018 г. влезе в сила нов регламент за защита на личните данни (General Data Protection Regulation), приет от Европейския съюз. Регламентът има за цел да гарантира защитата на данните на физическите лица от всички държави членки на ЕС и да уеднакви регулациите за тяхната обработка.
                            </p>
                            <p>
                                УЛТРА БИЛД осъществява дейността си в съответствие със Закона за защита на личните данни и Регламент (ЕС) 2016/679 на Европейския парламент и на Съвета от 27 април 2016 година относно защитата на физическите лица във връзка с обработването на лични данни и относно свободното движение на такива данни.
                            </p>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-primary tracking-widest text-sm uppercase">02</span>
                            Приложение на настоящата Политика
                        </h2>
                        <p className="mb-8">
                            В качеството си на администратор на лични данни, УЛТРА БИЛД отговаря на всички изисквания на новата регулация, като събира единствено данни на лицата дотолкова, доколкото са необходими за предоставянето на услугата, и ги пази отговорно и законосъобразно.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">2.1 Администратор на лични данни</h3>
                                <div className="bg-white/5 p-6    border border-white/5 space-y-3 shadow-inner">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Наименование</p>
                                        <p className="text-gray-200">УЛТРА БИЛД</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">ЕИК</p>
                                        <p className="text-gray-200">204796422</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Управител</p>
                                        <p className="text-gray-200">Стефан Стефанов</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">E-mail</p>
                                        <p className="text-primary">ultrabild@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">2.2 Надзорен орган (КЗЛД)</h3>
                                <div className="bg-white/5 p-6    border border-white/5 space-y-3 shadow-inner">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Адрес</p>
                                        <p className="text-gray-200">гр. София 1592, бул. "Проф. Цветан Лазаров" № 2</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Телефон</p>
                                        <p className="text-gray-200">02 915 3 518</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Уеб сайт</p>
                                        <a href="https://www.cpdp.bg" target="_blank" className="text-primary hover:underline">www.cpdp.bg</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <p>
                                УЛТРА БИЛД е администратор на личните данни (т.е. информацията, която идентифицира конкретно лице, като например име и фамилия или адрес на електронна поща), които събираме от и за вас чрез уебсайта.
                            </p>
                            <p>
                                Настоящата Политика за поверителност важи за всички потребители, включително тези, които използват уебсайта без да са регистрирани или абонирани за услуги в него.
                            </p>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-primary tracking-widest text-sm uppercase">03</span>
                            Видове лични данни
                        </h2>
                        <p className="mb-6">УЛТРА БИЛД може да събира за единствено следните данни:</p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {["име и фамилия", "телефонен номер", "адрес на електронна поща"].map((tag) => (
                                <span key={tag} className="px-4 py-2   bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="italic mb-8">които предоставяте, като попълвате форми за контакт в сайта</p>

                        <div className="p-6 bg-yellow-500/5 border border-yellow-500/10   ">
                            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Ние не събираме специални категории данни:</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                {[
                                    "расов или етнически произход",
                                    "политически възгледи",
                                    "религиозни или философски убеждения",
                                    "членство в синдикални организации",
                                    "генетични и биометрични данни",
                                    "данни относно здравословното състояние",
                                    "сексуална ориентация",
                                    "данни за присъди и престъпления"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-500">
                                        <span className="w-1 h-1   bg-yellow-500/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-primary tracking-widest text-sm uppercase">04</span>
                            Цели на събирането
                        </h2>
                        <p className="mb-6">
                            Основната причина, поради която събираме личните Ви данни е да Ви осигурим достъп до уебсайта или услугите на УЛТРА БИЛД, както и да осъществим взаимодействието Ви с такива услуги.
                        </p>
                        <div className="space-y-4">
                            <p className="text-white font-medium">Понастоящем единствено обработваме данните Ви с цел:</p>
                            <ul className="space-y-3">
                                {["Обработка на запитвания", "Оказване на съдействие", "Персонализирана комуникация с вас"].map((goal, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-white/5 p-4   border border-white/5">
                                        <span className="text-primary font-bold">0{i + 1}</span>
                                        <span className="text-gray-300">{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mt-8 text-sm bg-blue-500/5 p-4   border border-blue-500/10">
                            Понастоящем не обработваме данните ви с цел изпращане на оферти или маркетингови съобщения. Ако планираме такива действия в бъдеще, то ще бъде направено само с предварителното ви съгласие.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-primary tracking-widest text-sm uppercase">05</span>
                            Вашите права
                        </h2>
                        <div className="space-y-8">
                            {[
                                { title: "9.1 Оттегляне на съгласието", desc: "Можете по всяко време да оттеглите съгласието си за обработка чрез искане в свободен текст на посочения по-горе email." },
                                { title: "9.2 Право на достъп", desc: "Имате право да изискате потвърждение дали се обработват лични данни, свързани с Вас и да получите копие от тях." },
                                { title: "9.4 Право на изтриване", desc: "Право 'да бъдеш забравен' - можете да поискате изтриване на Вашите лични данни при определени обстоятелства." },
                                { title: "9.8 Право на възражение", desc: "Можете да възразите по всяко време срещу обработването на лични данни за целите на директен маркетинг или профилиране." }
                            ].map((right) => (
                                <div key={right.title}>
                                    <h3 className="text-white font-semibold mb-2">{right.title}</h3>
                                    <p className="text-gray-400">{right.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 italic text-sm">
                            За пълния списък и подробно описание на Вашите права, моля прочетете разделите от 9.1 до 9.8 в пълния документ.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/10 opacity-60">
                        <h2 className="text-xl font-bold text-white mb-4">Последна актуализация</h2>
                        <p className="text-sm italic">
                            УЛТРА БИЛД може да променя или актуализира настоящата Политика за поверителност, за да се гарантира спазването на приложимото право.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
