"use client"

import { useState, useMemo } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VehicleGrid from "@/components/inventory/vehicle-grid"

type VehicleCategory = "all" | "snowplows" | "heavy-duty" | "excavators" | "backhoe" | "skid-steer"

type Vehicle = {
  id: string
  name: string
  // The category here will be one of the specific types, not 'all'
  category: Exclude<VehicleCategory, "all">
  image: string
  description: string
  // This is the key fix: tells TS the 'specs' object is a simple
  // key-value map of strings, which matches what VehicleGrid expects.
  specs: Record<string, string>
}

type VehicleData = Record<Exclude<VehicleCategory, "all">, Vehicle[]>

const VEHICLE_DATA: VehicleData = {  snowplows: [
    {
      id: "daf-lf-white",
      name: "DAF LF (Бял)",
      category: "snowplows",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/DAF-LF-White.png",
      description: "Магистрално и пътно снегопочистване",
      specs: {
        "Основна употреба": "Магистрално и пътно снегопочистване, опесъчаване",
        Оборудване: "Предно монтирано гребло, голям силоз (бункер) за пясък/сол, разпръскващ механизъм",
        Задвижване: "Мощно задвижване (6x4 или 8x4) за максимално сцепление при тежки зимни условия",
        Характеристики: "Висока надеждност и капацитет за обработка на дълги пътни участъци",
      },
    },
    {
      id: "daf-lf-yellow",
      name: "DAF LF (Жълт)",
      category: "snowplows",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/DAF-LF-Yellow.png",
      description: "Магистрално и пътно снегопочистване",
      specs: {
        "Основна употреба": "Магистрално и пътно снегопочистване, опесъчаване",
        Оборудване: "Предно монтирано гребло, голям силоз (бункер) за пясък/сол, разпръскващ механизъм",
        Задвижване: "Мощно задвижване (6x4 или 8x4) за максимално сцепление при тежки зимни условия",
        Характеристики: "Висока надеждност и капацитет за обработка на дълги пътни участъци",
      },
    },
    {
      id: "mercedes-sk",
      name: "Mercedes-Benz SK",
      category: "snowplows",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/Mercedes-Benz-SK.png",
      description: "Тежкотоварно снегопочистване",
      specs: {
        "Основна употреба": "Тежкотоварно снегопочистване, справяне със снегонавявания и почистване на главни пътища",
        Оборудване: "Тежкотоварно гребло, разпръсквач с голям капацитет",
        Задвижване: "Здраво задвижване (6x4 или 4x4), създадено за екстремни условия",
        Характеристики: "Доказана издръжливост и мощност, класическа машина за тежка зимна работа",
      },
    },
    {
      id: "mercedes-atego",
      name: "Mercedes-Benz Atego",
      category: "snowplows",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/Mercedez-Benz-Atego.png",
      description: "Градско снегопочистване",
      specs: {
        "Основна употреба": "Градско снегопочистване, почистване на по-тесни улици и второстепенни пътища",
        Оборудване: "Маневрено гребло и опесъчител, подходящи за градски условия",
        Задвижване: "Конфигурация 4x2 или 4x4, предлагаща отлична маневреност",
        Характеристики: "По-компактен размер, идеален за работа в зони с ограничен достъп",
      },
    },
  ],
  "heavy-duty": [
    {
      id: "mercedes-arocs",
      name: "Mercedes-Benz Arocs",
      category: "heavy-duty",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/Mercedes-Benz-Arocs.png",
      description: "Тежкотоварен самосвал",
      specs: {
        "Основна употреба": "Тежкотоварен самосвал, бетоновоз или влекач за извънгабаритни товари",
        Товароносимост: "До 41 тона (в зависимост от конфигурацията)",
        Задвижване: "Здрави конфигурации на осите (6x4 или 8x4) за максимално сцепление на обекта",
        Мощност: "Двигатели с висок въртящ момент (до 625 к.с.) за най-тежките товари",
        Характеристики: "Висок просвет, издръжливо шаси, създадено за работа извън пътя (off-road)",
      },
    },
  ],
  excavators: [
    {
      id: "jcb-js175w",
      name: "JCB JS175W (Колесен)",
      category: "excavators",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/JCB-JS175W.png",
      description: "Тежки изкопни дейности",
      specs: {
        Тип: "Колесен багер",
        "Основна употреба": "Тежки изкопни дейности, товарене и бързо придвижване между различни точки на обекта",
        "Работно тегло": "~17.5 тона",
        "Макс. дълбочина на копаене": "~5.8 метра",
        Характеристики: "Стабилизатори за сигурна работа; не изисква платформа за придвижване на къси разстояния",
      },
    },
    {
      id: "jcb-86c1",
      name: "JCB 86C 1 (Верижен)",
      category: "excavators",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/JCB-86C-1.png",
      description: "Мощни изкопни дейности",
      specs: {
        Тип: "Миди-багер (верижен)",
        "Основна употреба": "Мощни изкопни дейности в по-компактен размер. Идеален за общи изкопи",
        "Работно тегло": "~8.6 тона",
        "Макс. дълбочина на копаене": "~4.15 метра",
        Характеристики: "Вериги за висока стабилност; компактен заден радиус за работа в близост до сгради",
      },
    },
  ],
  backhoe: [
    {
      id: "hidromek-hmk102b",
      name: "HIDROMEK HMK 102B",
      category: "backhoe",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/HIDROMEK-HMK-102B.png",
      description: "Универсална машина",
      specs: {
        "Основна употреба": "Всички видове дейности на обекта – копаене, товарене, подравняване",
        "Мощност на двигателя": "~100 к.с.",
        "Макс. дълбочина на копаене": "~4.46 метра",
        "Обем на кофата (товарач)": "1.1 м³",
        Характеристики: "Здрава и мощна универсална машина за средни по големина обекти",
      },
    },
    {
      id: "jcb-3cx",
      name: "JCB 3CX",
      category: "backhoe",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/JCB-3CX.png",
      description: "Индустриалният стандарт",
      specs: {
        "Основна употреба": "Копаене, товарене, озеленяване и къртене - всичко в едно",
        "Мощност на двигателя": "~74 - 109 к.с.",
        "Макс. дълбочина на копаене": "~4.24 - 5.46 метра (в зависимост от стрелата)",
        "Обем на кофата (товарач)": "~1.0 м³",
        Характеристики: "Изключително гъвкав с широка гама прикачен инвентар (чукове, свредла и др.)",
      },
    },
  ],
  "skid-steer": [
    {
      id: "jcb-teleskid",
      name: "JCB Teleskid",
      category: "skid-steer",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/JCB-Teleskid.png",
      description: "Мини-товарач със телескопична стрела",
      specs: {
        "Основна употреба": "Уникален мини-товарач, който може да повдига, товари и достига по-високо и по-далеч",
        "Специфична функция": "Телескопична стрела",
        "Макс. височина на повдигане": "~4.0 метра",
        "Макс. хоризонтален обсег": "~2.25 метра",
        Товароподемност: "~1,455 кг",
        Характеристики: "Комбинира функциите на мини-товарач и малък телескопичен товарач",
      },
    },
    {
      id: "jcb-250",
      name: "JCB 250 (Колесен)",
      category: "skid-steer",
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/vehicle/JCB-250-Powerboom-tires.png",
      description: "Стандартен мини-товарач",
      specs: {
        Тип: "Колесен мини-товарач",
        "Основна употреба": "Стандартно товарене, подравняване и почистване на обекти в ограничени пространства",
        Товароподемност: "~1,134 кг",
        Характеристики: 'Уникална "Powerboom" стрела (едно рамо) за по-добра видимост и безопасен достъп',
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
            Строителна Механизация
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
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-4 pb-13.5 sm:pb-1">
            <TabsTrigger
              value="all"
              className="text-xs sm:text-sm font-medium"
            >
              Всички
            </TabsTrigger>
            <TabsTrigger
              value="snowplows"
              className="text-xs sm:text-sm font-medium"
            >
              Снегорини
            </TabsTrigger>
            <TabsTrigger
              value="heavy-duty"
              className="text-xs sm:text-sm font-medium"
            >
              Тежкотоварни
            </TabsTrigger>
            <TabsTrigger
              value="excavators"
              className="text-xs sm:text-sm font-medium"
            >
              Багери
            </TabsTrigger>
            <TabsTrigger
              value="backhoe"
              className="text-xs sm:text-sm font-medium"
            >
              Товарачи
            </TabsTrigger>
            <TabsTrigger
              value="skid-steer"
              className="text-xs sm:text-sm font-medium "
            >
              Мини
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <TabsContent value="all" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="snowplows" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="heavy-duty" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="excavators" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="backhoe" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
          <TabsContent value="skid-steer" className="mt-0">
            <VehicleGrid vehicles={filteredVehicles} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
