"use client"

import { useState, useMemo } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VehicleGrid from "@/components/inventory/vehicle-grid"

type VehicleCategory = "all" | "building" | "autotransport" | "maintenance" | "light" | "mining"

type Vehicle = {
  id: string
  name: string
  // The category here will be one of the specific types, not 'all'
  category: Exclude<VehicleCategory, "all">
  image: string | null
  description: string
  // This is the key fix: tells TS the 'specs' object is a simple
  // key-value map of strings, which matches what VehicleGrid expects.
  specs: Record<string, string>
}

type VehicleData = Record<Exclude<VehicleCategory, "all">, Vehicle[]>

const VEHICLE_DATA: VehicleData = {
  building: [
    {
      id: "building-1",
      name: "BOMAG BF 300",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/1.webp",
      description: "Верижен асфалторазтилач",
      specs: {
        "Основна употреба": "Полагане и изравняване на асфалтови смеси за пътища и магистрали.",
        "Оборудване": "Стягаща греда, нагреватели, автоматична система за нивелация.",
      },
    },
    {
      id: "building-2",
      name: "JCB 3CX PLUS",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/2.webp",
      description: "Багер товарач",
      specs: {
        "Основна употреба": "Копаене, товарене и подравняване при всякакви строителни дейности.",
        "Оборудване": "Предна отваряема кофа, задна багерна уредба, опционален хидравличен чук.",
      },
    },
    {
      id: "building-3",
      name: "JCB 3CX 14H5WA ",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/3.webp",
      description: "Багер товарач",
      specs: {
        "Основна употреба": "Копаене, товарене и подравняване при всякакви строителни дейности.",
        "Оборудване": "Предна отваряема кофа, задна багерна уредба, опционален хидравличен чук.",
      },
    },
    {
      id: "building-4",
      name: "JCB 3CX 14H5Wl - 2 броя",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/4.webp",
      description: "Багер товарач",
      specs: {
        "Основна употреба": "Копаене, товарене и подравняване при всякакви строителни дейности.",
        "Оборудване": "Предна отваряема кофа, задна багерна уредба, опционален хидравличен чук.",
      },
    },
    {
      id: "building-6",
      name: "JCB JS175WTTAI",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/5.webp",
      description: "Колесен багер",
      specs: {
        "Основна употреба": "Тежки изкопни дейности, товарене и бързо придвижване.",
        "Оборудване": "Усилена стрела, хидравлични линии за прикачен инвентар (чук/свредел), стабилизатори.",
      },
    },
    {
      id: "building-7",
      name: "JCB 86С -2",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/6.webp",
      description: "Миди багер",
      specs: {
        "Основна употреба": "Средни по обем изкопни дейности, подходящ за градски условия.",
        "Оборудване": "Верижна ходова част, булдозерно гребло, изкопна кофа.",
      },
    },
    {
      id: "building-8",
      name: "JCB 535-125",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/7.webp",
      description: "Телескопичен товарач",
      specs: {
        "Основна употреба": "Повдигане и разтоварване на материали на големи височини.",
        "Оборудване": "Телескопична стрела, товарни вилици, стабилизатори за сигурна работа.",
      },
    },
    {
      id: "building-9",
      name: "BOMAG BW 135 AD-5",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/8.webp",
      description: "Валяк двубандажен",
      specs: {
        "Основна употреба": "Уплътняване на асфалт, почва и чакъл при строителство.",
        "Оборудване": "Два вибриращи бандажа, система за оросяване с вода.",
      },
    },
    {
      id: "building-10",
      name: "BOMAG BW 161 AD",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/9.webp",
      description: "Валяк",
      specs: {
        "Основна употреба": "Тежко уплътняване на асфалт, почва и чакъл при магистрално строителство.",
        "Оборудване": "Два вибриращи бандажа, система за оросяване, осветление за нощна работа.",
      },
    },
    {
      id: "building-11",
      name: "BOMAG BW 213 D-5",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/10.webp",
      description: "Еднобандажен валяк",
      specs: {
        "Основна употреба": "Прецизно уплътняване на финишно асфалтово покритие.",
        "Оборудване": "Четири гладки пневматични гуми отпред и четири отзад.",
      },
    },
    {
      id: "building-12",
      name: "BOMAG BW 100 AD-5",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/11.webp",
      description: "Двубандажен валяк",
      specs: {
        "Основна употреба": "Леко уплътняване на асфалт при паркинги и алеи.",
        "Оборудване": "Два гладки вибриращи бандажа, спринклерна система за оросяване.",
      },
    },
    {
      id: "building-13",
      name: "BOMAG BW 28RH",
      category: "building",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/building-tech/12.webp",
      description: "Валяк пневматичен за асфалтови работи",
      specs: {
        "Основна употреба": "Финно уплътняване без следи по новия асфалт.",
        "Оборудване": "Пневматични гуми, система за контролирано налягане на гумите.",
      },
    },
  ],
  autotransport: [
    {
      id: "auto-1",
      name: "FORD TRANSIT - 3 броя",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/1.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Превоз на инструменти, материали и строителни бригади.",
        "Оборудване": "Закрито товарно помещение (фургон), пътническа кабина.",
      },
    },
    {
      id: "auto-2",
      name: "VOLKSWAGEN TRANSPORTER",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/2.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Ежедневен превоз на инструменти и материали.",
        "Оборудване": "Закрито товарно помещение, надеждно окачване за товари.",
      },
    },
    {
      id: "auto-3",
      name: "FORD PRITSCHE DK 300 M",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/3.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Превоз на едрогабаритни материали и оборудване.",
        "Оборудване": "Открита бордова каросерия (Pritsche), двойна кабина за екип.",
      },
    },

    {
      id: "auto-6",
      name: "FORD TRANSIT CUSTOM",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/1.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Доставка на специализирани товари и механизация.",
        "Оборудване": "Товарно отделение с посилени панели, места за укрепване.",
      },
    },
    {
      id: "auto-7",
      name: "MERCEDES 814 D VARIO - 2 броя",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/5.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Транспорт на строителни стоки и тежки машини.",
        "Оборудване": "Засилено шаси, бордова надстройка, хидравличен борд.",
      },
    },
    {
      id: "auto-9",
      name: "MERCEDES 818 D",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/6.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Градски и междуградски транспорт на техника и материали.",
        "Оборудване": "Голям товарен обем, специализирани места за укрепване на товари.",
      },
    },
    {
      id: "auto-10",
      name: "MERCEDES ATEGO 1217",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/7.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Доставяне на тежки материали, агрегати и строителни контейнери.",
        "Оборудване": "Самосвална каросерия и/или кран за товарене.",
      },
    },
    {
      id: "auto-11",
      name: "MAN 12.222 F",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/8.webp",
      description: "Товарен автомобил /водоноска/",
      specs: {
        "Основна употреба": "Измиване на улици и доставка на индустриална вода.",
        "Оборудване": "Резервоар (цистерна) за вода, помпа под високо налягане, маркучи.",
      },
    },
    {
      id: "auto-12",
      name: "MAN 19.364 - 2 броя",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/9.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Масивни превози на земна маса, пясък и чакъл.",
        "Оборудване": "Тристранен самосвал, усилено шаси за тежки натоварвания.",
      },
    },
    {
      id: "auto-14",
      name: "SCANIA G 480 LB",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/10.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Тежкотоварни превози за извънгабаритна техника (влекач).",
        "Оборудване": "Кабина със спално отделение, свързващо седло за полуремарке.",
      },
    },
    {
      id: "auto-15",
      name: "SKANIA P 114 340",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/15.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Тежкотоварен транспорт и строителна логистика.",
        "Оборудване": "Мощна ходова част (6x4 или 8x4), самосвален кош за инертни материали.",
      },
    },
    {
      id: "auto-16",
      name: "BMC TUGRA 4340",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/11.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "За регионални доставки в тежки строителни обекти.",
        "Оборудване": "Мощен дизелов агрегат, здраво офроуд шаси.",
      },
    },
    {
      id: "auto-17",
      name: "RENAULT K",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/16.webp",
      description: "Товарен автомобил",
      specs: {
        "Основна употреба": "Екстремни офроуд дейности, превоз на камъни и скална маса.",
        "Оборудване": "Подсилен самосвален кош, офроуд окачване с висок клирънс.",
      },
    },
    {
      id: "auto-19",
      name: "WIOLA W11P",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/12.webp",
      description: "Ремарке за лек автомобил",
      specs: {
        "Основна употреба": "Прикачване към лекотоварни автомобили за малки товари.",
        "Оборудване": "Стоманена платформа, куки за укрепване на товари.",
      },
    },
    {
      id: "auto-20",
      name: "MULLER MITTELTAL",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/13.webp",
      description: "Ремарке за товарен автомобил",
      specs: {
        "Основна употреба": "Тежкотоварно ремарке за трансфер на строителна техника.",
        "Оборудване": "Въздушно окачване, рампа за товарене (лафет).",
      },
    },
    {
      id: "auto-21",
      name: "BOCKMANN D K -3218/35 E",
      category: "autotransport",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/autotransport/14.webp",
      description: "Ремарке - тандем ",
      specs: {
        "Основна употреба": "Превозване на мини багери, валяци и компактна техника.",
        "Оборудване": "Тандемни оси, падаща товарна рампа, спирачна система.",
      },
    },
  ],
  maintenance: [
    {
      id: "maint-1",
      name: "MERCEDES UNIMOG 1400",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/1.webp",
      description: "роторен снегорин",
      specs: {
        "Основна употреба": "Високопроизводително почистване на снежни навявания и преспи.",
        "Оборудване": "Предна роторна уредба за изхвърляне на сняг, специализирана трансмисия.",
      },
    },
    {
      id: "maint-2",
      name: "DAF LF 55.220",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/2.webp",
      description: "Комбинирана машина за ЗП",
      specs: {
        "Основна употреба": "Редова поддръжка на пътища и градски артерии (ЗП).",
        "Оборудване": "Снегопочистващо гребло и бункер за опесъчаване / осоляване.",
      },
    },
    {
      id: "maint-3",
      name: "MERCEDES 1824 AXOR",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/3.webp",
      description: "Комбинирана машина за ЗП",
      specs: {
        "Основна употреба": "Редова поддръжка на пътища и градски артерии (ЗП).",
        "Оборудване": "Снегопочистващо гребло и бункер за опесъчаване / осоляване.",
      },
    },
    {
      id: "maint-4",
      name: "DAF FA LF 55",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/4.webp",
      description: "Комбинирана машина за ЗП",
      specs: {
        "Основна употреба": "Редова поддръжка на пътища и градски артерии (ЗП).",
        "Оборудване": "Снегопочистващо гребло и бункер за опесъчаване / осоляване.",
      },
    },
    {
      id: "maint-5",
      name: "MERCEDES 2633 AXOR",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/5.webp",
      description: "Комбинирана машина за ЗП",
      specs: {
        "Основна употреба": "Тежкотоварно магистрално почистване за екстремни условия (ЗП).",
        "Оборудване": "Усилено гребло, голям капацитет за сол, двойно задвижващи оси.",
      },
    },
    {
      id: "maint-6",
      name: "VOLVO FE 340 - 2 броя",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/6.webp",
      description: "Комбинирана машина за ЗП",
      specs: {
        "Основна употреба": "Балансирана поддръжка – градски и междуградски мрежи.",
        "Оборудване": "Стандартно гребло, силоз за опесъчаване, специализирано осветление.",
      },
    },
    {
      id: "maint-8",
      name: "DAF TGA 28.360",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/8.webp",
      description: "Комбинирана машина за ЗП",
      specs: {
        "Основна употреба": "Магистрално почистване с повишено сцепление.",
        "Оборудване": "Широко гребло, ротационни разпръсквачи от най-висок клас.",
      },
    },

    {
      id: "maint-11",
      name: "SKANIA P 114 340",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/11.webp",
      description: "Товарен автомобил/Снегорин",
      specs: {
        "Основна употреба": "Транспорт и зимна поддръжка (мултифункционалност).",
        "Оборудване": "Надстройка за опесъчаване, която може да се сменя със самосвален кош.",
      },
    },
    {
      id: "maint-12",
      name: "JCB JS175WTTAI",
      category: "maintenance",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/maintenance-tech/12.webp",
      description: "Колесен багер с мулчиращо устройство",
      specs: {
        "Основна употреба": "Почистване на крайпътни участъци от растителност.",
        "Оборудване": "Специализирано мулчиращо устройство на багерната стрела.",
      },
    },
  ],
  light: [
    {
      id: "light-1",
      name: "HITACHI ZX 19-6",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/1.webp",
      description: "Верижен багер",
      specs: {
        "Основна употреба": "Изкопи в много тесни и труднодостъпни пространства.",
        "Спецификации": "Работно тегло: 1.9 т, Компактен радиус на въртене.",
      },
    },
    {
      id: "light-2",
      name: "JSB SSL 250",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/2.webp",
      description: "Челен товарач /бобкат/",
      specs: {
        "Основна употреба": "Бързо товарене и заравняване в малки обекти.",
        "Спецификации": "Товароподемност: 1146 кг, Компактно междуосие за маневреност.",
      },
    },
    {
      id: "light-3",
      name: "Фугорези - 5 броя",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/3.webp",
      description: "Лека механизация",
      specs: {
        "Основна употреба": "Прецизно рязане на асфалтови и бетонови настилки.",
        "Спецификации": "Брой: 5 машини, Водно охлаждане за диамантения диск.",
      },
    },
    {
      id: "light-4",
      name: "Генератор за ток - 3броя",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/4.webp",
      description: "Лека механизация",
      specs: {
        "Основна употреба": "Мобилно електрозахранване за обекти без ток.",
        "Спецификации": "Брой: 3 генератора, Устойчиви на външни климатични условия.",
      },
    },
    {
      id: "light-5",
      name: "Stihl (Моторен трион)",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/5.webp",
      description: "Лека механизация",
      specs: {
        "Основна употреба": "Рязане на дървен материал, премахване на клони и дървета.",
        "Спецификации": "Брой: 4 броя, Високооборотни двутактови двигатели.",
      },
    },
    {
      id: "light-6",
      name: "Stihl (Моторни коси)",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/6.webp",
      description: "Лека механизация",
      specs: {
        "Основна употреба": "Поддръжка на зелени площи около пътната мрежа.",
        "Спецификации": "Брой: 4 броя, Ергономични презрамки и устойчива режеща корда.",
      },
    },
    {
      id: "light-7",
      name: "Stihl",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/7.webp",
      description: "Моторен свредел",
      specs: {
        "Основна употреба": "Пробиване на тесни дупки в почвата за колчета/табели.",
        "Спецификации": "Брой: 1 брой, Мобилно двутактово задвижване.",
      },
    },
    {
      id: "light-8",
      name: "BPR100/80D",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/8.webp",
      description: "Реверсивна вибрационна плоча",
      specs: {
        "Основна употреба": "Дълбоко уплътняване на почви и изкопни фундаменти.",
        "Спецификации": "Работно тегло: 710 кг, Центробежна сила: 100 kN.",
      },
    },
    {
      id: "light-9",
      name: "WP 1550А",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/9.webp",
      description: "Виброплоча",
      specs: {
        "Основна употреба": "Уплътняване на финишно покритие при ремонти.",
        "Спецификации": "Работно тегло: 89 кг, Висока маневреност.",
      },
    },
    {
      id: "light-10",
      name: "Sweeper",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/10.webp",
      description: "Метачна машина",
      specs: {
        "Основна употреба": "Почистване (измитане) на строителни настилки.",
        "Спецификации": "Тип: Моторна компактна, Твърда ротационна четка.",
      },
    },
    {
      id: "light-11",
      name: "STM450-700",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/11.webp",
      description: "Машина за рязане на камък",
      specs: {
        "Основна употреба": "Прецизно рязане на естествен камък и блоков материал.",
        "Спецификации": "Макс. дължина на рязане: 700 мм, Водно охлаждане за диска.",
      },
    },
    {
      id: "light-12",
      name: "Stihl BR 430",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/12.webp",
      description: "Уред за обдухване",
      specs: {
        "Основна употреба": "Обдухване на строителен прах и листа.",
        "Спецификации": "Дебит: 850 м³/ч, Брой: 3 машини.",
      },
    },
    {
      id: "light-13",
      name: "GBH 5-40 DCE",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/13.webp",
      description: "Перфоратор",
      specs: {
        "Основна употреба": "Пробиване и сечене в твърд бетон и асфалт.",
        "Спецификации": "Енергия на удара: 8.8 J, Мощност: 1150 W.",
      },
    },
    {
      id: "light-14",
      name: "GWS 850C Ф125",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/14.webp",
      description: "Ъглошлайф",
      specs: {
        "Основна употреба": "Рязане и шлайфане на метал и малки бетонови елементи.",
        "Спецификации": "Диаметър диск: 125 мм, Мощност: 850 W.",
      },
    },
    {
      id: "light-15",
      name: "IEC 58/230",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/15.webp",
      description: "Иглен вибратор",
      specs: {
        "Основна употреба": "Уплътняване на прясно отлят бетон за премахване на въздуха.",
        "Спецификации": "Диаметър: 58 мм, Захранване: 230 V.",
      },
    },
    {
      id: "light-16",
      name: "BS-1000",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/16.webp",
      description: "Гудронатор",
      specs: {
        "Основна употреба": "Разпръскване на битумна емулсия при асфалтиране.",
        "Спецификации": "Капацитет: 1000 л, Вградена система за подгряване.",
      },
    },
    {
      id: "light-17",
      name: "Сигнално ремарке",
      category: "light",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/light/17.webp",
      description: "Пътна сигнализация",
      specs: {
        "Основна употреба": "Временна организация и безопасност на движението.",
        "Спецификации": "Светодиодна дъска със стрелки и предупредителни знаци.",
      },
    },
  ],
  mining: [
    {
      id: "mining-1",
      name: "HYUNDAI HL970A",
      category: "mining",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/mining-tech/1.webp",
      description: "Колесен челен товарач",
      specs: {
        "Основна употреба": "Изгребване и товарене на скална маса в кариери.",
        "Оборудване": "Огромна предна кофа (4.2 - 5.2 м³), усилени гуми против разкъсване.",
      },
    },
    {
      id: "mining-2",
      name: "SUMITOMO SH360LC-7",
      category: "mining",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/mining-tech/2.webp",
      description: "Верижен багер с пневматичен чук",
      specs: {
        "Основна употреба": "Разбиване на твърди скални образования в минна среда.",
        "Оборудване": "Прикачен тежък пневматичен чук, бронирано верижно шаси.",
      },
    },
    {
      id: "mining-3",
      name: "HYUNDAI HX300AL",
      category: "mining",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/mining-tech/3.webp",
      description: "Верижен багер с пневматичен чук",
      specs: {
        "Основна употреба": "Прецизно разбиване на скални маси и подготовка за трошене.",
        "Оборудване": "Прикачен тежък пневматичен чук, усилена хидравлика.",
      },
    },
    {
      id: "mining-4",
      name: "METSO LT1213",
      category: "mining",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/mining-tech/4.webp",
      description: "Мобилна роторна трошачка",
      specs: {
        "Основна употреба": "Първично и вторично трошене на изкопана скална маса на обекта.",
        "Оборудване": "Роторен трошачен модул (до 400 т/ч), верижно шаси за мобилност.",
      },
    },
    {
      id: "mining-5",
      name: "METSO S4.9",
      category: "mining",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/opt/mining-tech/5.webp",
      description: "Мобилно сито",
      specs: {
        "Основна употреба": "Фракциониране (разделяне по размер) на вече натрошена скална маса.",
        "Оборудване": "Вибриращи сита на няколко нива, конвейерни ленти за извеждане.",
      },
    },
  ],
}

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>("all")

  const filteredVehicles = useMemo(() => {
    if (activeCategory === "all") {
      return Object.values(VEHICLE_DATA).flat()
    }
    return VEHICLE_DATA[activeCategory as keyof typeof VEHICLE_DATA] || []
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Механизация
          </h1>
          <p className="text-lg text-muted-foreground">
            Преглед на нашия модерен флот оборудване и техника за строителни дейности
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as VehicleCategory)}
          className="w-full "
        >
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-4  md:pb-1">
            <TabsTrigger
              value="all"
              className="text-xs sm:text-sm font-medium"
            >
              Всички
            </TabsTrigger>
            <TabsTrigger
              value="building"
              className="text-xs sm:text-sm font-medium"
            >
              Строителна
            </TabsTrigger>
            <TabsTrigger
              value="autotransport"
              className="text-xs sm:text-sm font-medium"
            >
              Автотранспорт
            </TabsTrigger>
            <TabsTrigger
              value="maintenance"
              className="text-xs sm:text-sm font-medium"
            >
              Поддържаща
            </TabsTrigger>
            <TabsTrigger
              value="light"
              className="text-xs sm:text-sm font-medium"
            >
              Лека
            </TabsTrigger>
            <TabsTrigger
              value="mining"
              className="text-xs sm:text-sm font-medium "
            >
              Минна
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <TabsContent value="all" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="building" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="autotransport" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="maintenance" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="light" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="mining" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
