"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const services = [
  {
    id: 1,
    title: "Пътно строителство и поддръжка",
    description:
      "Изграждане на пътната инфраструктура на България със съвременни инженерни решения за общини и предприемачи.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/funnel/1.png",
    target: "Общини и предприемачи",
    href: "/services?tab=roads",
  },
  {
    id: 2,
    title: "Саниране и фасади",
    description:
      "Трансформиране на стари сгради в модерни такива с авангарден ремонт и дизайн на фасади за търговски и жилищни имоти.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/funnel/2.png",
    target: "Търговски и жилищни",
    href: "/services?tab=facades",
  },
  {
    id: 3,
    title: "Градско и парково строителство",
    description: "Създаване на оживени обществени пространства и устойчива градска среда, както за публични, така и за частни проекти.",
    image: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/funnel/3.png",
    target: "Обществени и частни",
    href: "/services?tab=urban",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const hoverVariants = {
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export default function ServicesFunnel() {
  return (
    <>
    <section className="w-full bg-background py-8.5 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 "
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-4 ">
            <span className="text-primary">Нашите Услуги</span>
            <br />
            <span className="text-foreground">Съобразени за Вашите нужди</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
          От пътни мрежи до градски паркове, ние предлагаме цялостни строителни решения, подкрепени от експертиза и иновации
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants as any} whileHover="hover" className="group h-full">
              <motion.div
                variants={hoverVariants as any}
                className="relative h-full bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-muted">
                  <motion.div variants={imageVariants as any} className="w-full h-full">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 sm:p-7 lg:p-8 flex flex-col">
                  {/* Target audience badge */}
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-accent bg-muted px-3 py-1.5 rounded-full border border-border w-fit">
                    {service.target}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 text-balance leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <Link href={service.href}>
                    {/* <motion.div
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    > */}
                        <Button variant="default" className="w-full">
                          <span>Разбери повече</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    {/* </motion.div> */}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      
    </section>
    <div className="w-full bg-[repeating-linear-gradient(45deg,#f9831e_0px,#f9831e_20px,#202020_20px,#202020_40px)] py-1"></div>
    </>
  )
}
