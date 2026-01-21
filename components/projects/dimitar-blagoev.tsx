"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Hammer, AlertCircle, Zap, Construction } from "lucide-react"

const PROJECT_DATA = {
  title: "Нова кръговата развързка Димитър Благоев",
  category: "Пътно строителство и поддръжка",
  location: "Ямбол, България",
  briefText:
    "Модерна кръгова развързка проектирана според международни стандарти, оптимизирайки трафика и повишавайки безопасността.",
  description: `Проектът представлява изграждането на съвременна кръгова развързка на булевард "Димитър Благоев" в Ямбол. Развързката е проектирана със съответствие на международни стандарти за безопасност на пътното движение.

Сложното инженерно решение включва оптимизиране на потока на пътното движение, подобряване на видимостта и безопасността на пешеходците. Проектът демонстрира ангажимента на УЛТРА БИЛД към устойчиво и съвременно развитие на локалната инфраструктура.

Всяка детайл беше внимателно разработена, от дренажната система до осветлението, гарантирайки дълготрайност и оптимална функционалност.`,
  fullVideo: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/projects/road/dimitar-blagoev/full.mp4",
  timeline: [
    {
      title: "Подготовка",
      icon: AlertCircle,
      description:
        "Площадката беше внимателно подготвена преди началото на строителния процес. Провеждаха се подробни инженерни проучвания и планиране на всички логистични аспекти.",
      highlights: [
        "Инженерни проучвания и анализ на площадката",
        "Планиране на логистичните операции",
        "Подравняване на безопасностни мерки",
        "Маркиране на работната зона",
      ],
      src: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/projects/road/dimitar-blagoev/prep.mp4",
    },
    {
      title: "Преди",
      icon: Hammer,
      description:
        "Началото на активната работа на площадката. Екипът започна с необходимите подготвителни работи, включително маркиране и подравняне.",
      highlights: [
        "Маркиране на работната зона",
        "Подготовка на оборудването",
        "Проверка на безопасностните протоколи",
        "Начало на демонтажните работи",
      ],
      src: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/projects/road/dimitar-blagoev/before.mp4",
    },
    {
      title: "По време",
      icon: Construction,
      description:
        "Интензивна фаза на строителството с пълна мощност. Съвременна техника и квалифицирани специалисти работят координирано.",
      highlights: [
        "Екскавация и подравняване на почвата",
        "Монтаж на нова асфалтна повърхност",
        "Инсталация на дренажни системи",
        "Постоянно качествен контрол",
      ],
      src: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/projects/road/dimitar-blagoev/mid.mp4",
    },
    {
      title: "След",
      icon: Zap,
      description:
        "Окончателното завършване и приемане на проекта. Кръговата развързка е готова за использване, със всички финални щрихи и проверки извършени.",
      highlights: [
        "Завършване на всички construccionni работи",
        "Инсталация на разметка и знаци",
        "Финално почистване на площадката",
        "Проверка на качеството и безопасността",
      ],
      src: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/projects/road/dimitar-blagoev/after.mp4",
    },
    {
      title: "Финален резултат",
      icon: CheckCircle2,
      isFinal: true,
      description:
        "Кръговата развързка е успешно завършена, превръщайки се в съвременна и безопасна инфраструктура. Проектът подобри значително потока на трафика и безопасността на всички участници.",
      highlights: [
        "Повишена безопасност на пътното движение",
        "Оптимизиран трафичен поток",
        "Устойчивост и дълготрайност",
        "Съответствие с международни стандарти",
      ],
      image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/projects/road/dimitar-blagoev/final.png",
    },
  ],
}

export function DimitarBlagoev() {
  return (
    <div className="w-full py-4">
      {/* Top Section: 2 Col Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="flex flex-col justify-start">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">
                {PROJECT_DATA.category}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{PROJECT_DATA.title}</h1>
              <p className="text-secondary text-base sm:text-lg mb-4">{PROJECT_DATA.location}</p>
              <p className="text-muted-foreground text-base leading-relaxed">{PROJECT_DATA.briefText}</p>
            </div>

            {/* Right Column - Full Video */}
            <div className="flex items-center">
              <video autoPlay muted loop playsInline className="w-full h-auto object-cover aspect-video rounded-xl">
                <source src={PROJECT_DATA.fullVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Времева линия на проекта</h2>

          {/* Timeline Items */}
          {/* --- FIX: Added 'relative' for the new continuous line */}
          <div className="relative space-y-0 md:space-y-20">
            {/* --- NEW: DESKTOP Full Vertical Line --- */}
            {/* This single line spans the full height of the container on desktop */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-[repeating-linear-gradient(45deg,#f9831e_0px,#f9831e_20px,#202020_20px,#202020_40px)] z-0" />

            {PROJECT_DATA.timeline.map((item, index) => {
              const isEven = index % 2 === 1
              const Icon = item.icon
              const isFinal = item.isFinal
              const isLastItem = index === PROJECT_DATA.timeline.length - 1

              return (
                // --- FIX: Added padding-bottom on mobile for line continuity, unless it's the last item ---
                <div key={index} className={`relative ${isLastItem ? "" : "pb-20 md:pb-0"}`}>
                  {/* --- NEW: MOBILE Timeline (Left Side) --- */}
                  {/* Mobile Vertical Line (don't show on last item) */}
                  {!isLastItem && (
                    <div className="md:hidden absolute top-0 right-[15px] w-2 h-full bg-[repeating-linear-gradient(45deg,#f9831e_0px,#f9831e_20px,#202020_20px,#202020_40px)]" />
                  )}
                  {/* Mobile Timeline Dot + Number */}
                  <div className="md:hidden flex items-center justify-center absolute -top-1 -right-0.5 size-10 rounded-full bg-primary border-4 border-muted z-10">
                    <span className="text-lg font-black text-primary-foreground">{index + 1}</span>
                  </div>

                  {/* --- NEW: DESKTOP Timeline (Center) --- */}
                  
                  {/* --- DELETED: Old per-item desktop line --- */}

                  {/* --- FIX: DESKTOP Timeline Dot + Icon --- */}
                  {/* Increased size from w-8 h-8 to w-12 h-12 and replaced number with Icon */}
                  <div className="hidden md:flex items-center justify-center absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-muted z-10">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* --- FIX: Added pl-12 on mobile to make space for the new timeline --- */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch pr-12 md:pr-0">
                    {/* REFACTORED: Video/Image Column */}
                    <div className={`flex items-center px-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
                      {isFinal ? (
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-auto object-cover aspect-video rounded-xl"
                        />
                      ) : (
                        <video autoPlay muted loop playsInline className="w-full h-auto object-cover aspect-video rounded-xl shadow-xl">
                          <source src={item.src} type="video/mp4" />
                        </video>
                      )}
                    </div>

                    {/* REFACTORED: Text Content Column */}
                    <div className={`flex flex-col justify-start px-4 ${isEven ? "md:order-1" : "md:order-2"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        {/* --- FIX: Hide icon on desktop (md:hidden) as it's now in the central timeline dot --- */}
                        <div className="flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-primary">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {item.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-sm text-foreground">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* --- DELETED: Old timeline dot and line elements --- */}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Заинтересовани ли сте в подобни проекти?
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Свържете се с нас днес и открийте как УЛТРА БИЛД може да трансформира вашия проект.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 font-semibold">
            Свържете се с нас
          </Button>
        </div>
      </section>
    </div>
  )
}