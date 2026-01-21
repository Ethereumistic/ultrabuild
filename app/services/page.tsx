"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Construction, Building, Trees } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "roads",
    name: "Инфраструктура и пътно строителство",
    shortName: "Пътища",
    icon: <Construction className="w-4 h-4" />,
    images: ["https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/funnel/1.png",
      "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/funnel/1.png"],
    description: `Квалифицирани и амбициозни инженери и технически специалисти с десетилетия опит. Оборудвани с необходима пътностроителна техника, за развитието на съвременната пътна инфраструктура.`,
    highlights: [
      "Съвременна техника и машини",
      "Квалифицирани инженери и технически специалисти",
      "Зимно пътно обслужване",
      "Проекти за поддръжка и реконструкция на пътища",
      "Изпълнение на държавни и местни договори за пътно строителство",
    ],
    caseStudy:
      'През зимния сезон 2023/2024 успешно извършихме зимни ремонтни дейности на автомагистрала „ТРАКИЯ“ в участъка Ямбол (км 275+394 до км 313+840), включително всички свързани пътни мрежи. Нашият екип постигна изключителни резултати с минимално време на престой и максимални стандарти за безопасност.',
    cta: "Request Infrastructure Quote",
  },
  {
    id: "facades",
    name: "Саниране на сгради",
    shortName: "Саниране",
    icon: <Building className="w-4 h-4" />,
    images: ["https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/funnel/2.png"],
    description: `Трансформирайте имотите си с нашите цялостни услуги за реставрация на фасади и обновяване на сгради. Ние сме специализирани в трансформации на търговски и жилищни сгради, съчетавайки модерни техники с вечна естетика.`,
    highlights: [
      "Саниране на търговски и жилищни сгради",
      "Енергийно ефективни подобрения на сгради",
      "Структурни ремонти и укрепване",
      "Топлоизолационни и хидроизолационни решения",
      "Съвременни облицовъчни и довършителни системи",
    ],
    caseStudy:
      "Нашите екипи за обновяване на фасади са преобразили над 50 търговски и жилищни имота, подобрявайки както естетическата привлекателност, така и структурната цялост. Използваме най-съвременни материали и устойчиви практики, за да осигурим дълготрайни резултати, отговарящи на съвременните строителни стандарти.",
    cta: "Explore Renovation Options",
  },
  {
    id: "urban",
    name: "Градско и парково развитие",
    shortName: "Паркове",
    icon: <Trees className="w-4 h-4" />,
    images: ["https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/funnel/3.png"],
    description: `Създаване на оживени обществени пространства и зони за отдих, които подобряват живота в общността. Нашите услуги за градско и парково развитие са насочени към общини и частни предприемачи, търсещи устойчиви, иновативни решения.`,
    highlights: [
      "Изграждане на обществени паркове",
      "Развитие на градски площади и места за отдих",
      "Устойчиво озеленяване и зелена инфраструктура",
      "Обществени удобства и съоръжения",
      "Планиране на пространството, фокусирано върху общността",
    ],
    caseStudy:
      "Успешно сме реализирали проекти за градско развитие, създавайки модерни обществени пространства. Нашият подход дава приоритет на устойчивостта, достъпността и ангажираността на общността, което води до процъфтяващи обществени пространства, които се превръщат в местни забележителности.",
    cta: "Start Your Project Today",
  },
]

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("roads")

  useEffect(() => {
    const tabParam = searchParams.get("tab") || searchParams.get("service") || "roads"
    if (services.some((s) => s.id === tabParam)) {
      setActiveTab(tabParam)
    }
  }, [searchParams])

  const currentService = services.find((s) => s.id === activeTab) || services[0]

  return (
    <main className="min-h-screen bg-background py-8">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">
            Нашите основни услуги
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Цялостни решения за инфраструктура, обновяване на сгради и градско развитие.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full ">
          <Tabs orientation="horizontal" value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab List */}
            <div className="flex justify-center mb-4 ">
              <TabsList className="flex  w-full  gap-2 h-auto bg-muted/50 p-2 rounded-lg">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex items-center gap-2 px-3 py-3 text-base font-medium transition-all"
                  >
                    <span className="hidden md:block mr-2">{service.icon}</span>
                    {service.shortName}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Contents */}
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                {/* NEW: Wrapper Grid for 2-Column Layout on Large Screens */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Column 1: Image Carousel Section */}
                  <div className="relative bg-muted/30 rounded-xl overflow-hidden self-start">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {service.images.map((image, idx) => (
                          <CarouselItem key={idx} className="w-full">
                            {/* CHANGED: Adjusted aspect ratio for column layout */}
                            <div className="relative w-full aspect-video lg:aspect-square">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${service.name} - Image ${idx + 1}`}
                                fill
                                className="object-cover rounded-xl"
                                priority
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {service.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-4 bg-background/80 hover:bg-background text-foreground" />
                          <CarouselNext className="right-4 bg-background/80 hover:bg-background text-foreground" />
                        </>
                      )}
                    </Carousel>
                  </div>

                  {/* Column 2: Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 ">
                    {/* Left Column - Description and Highlights */}
                    <div className="flex flex-col space-y-6">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.name}</h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                          {service.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="mt-auto">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Ключови услуги</h3>
                        <ul className="space-y-3">
                          {service.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground text-base">
                              <span className="inline-flex items-center justify-center w-6 h-6 mt-1 rounded-full bg-primary/20 text-primary flex-shrink-0 font-bold text-sm">
                                ✓
                              </span>
                              <span className="text-pretty">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Case Study and CTA */}
                    <div className="flex flex-col space-y-6">
                      {/* Case Study */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">Нашият опит</h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                          {service.caseStudy}
                        </p>
                      </div>

                      {/* CTA Section */}
                      <div className="space-y-4 mt-auto">
                        <Button
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base py-6"
                        >
                          <Link href="/contact">
                            Свържи се с нас
                          </Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-primary hover:text-white font-semibold text-base py-6"
                        >
                          <Link href="/projects">
                            Виж проекти
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

      </div>
    </main>
  )
}