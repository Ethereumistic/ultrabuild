"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, Award, Users, Zap, CheckCircle2, Construction } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function AboutPage() {
  const achievements = [
    { icon: Building2, label: "Завършени проекти", value: "150+" },
    { icon: Construction, label: "км изградени пътища", value: "500+" },
    { icon: Users, label: "Квалифицирани специалисти", value: "50+" },
    { icon: Award, label: "Години опит", value: "7+" },
  ]

  const credentials = [
    {
      title: "Член на Камара на строителите",
      description: "Признатия орган на всички лицензирани строители в Република България",
    },
    {
      title: "Европейско финансиране",
      description: "Активна участница в проекти, финансирани от Европейските фондове",
    },
    {
      title: "Квалифициран инженерен отбор",
      description: "Амбициозни и опитни професионалисти с дълголетен опит в строителството",
    },
  ]

  const services = [
    {
      title: "Пътна инфраструктура",
      description: "Проектиране, изграждане и поддържане на съвременни пътни мрежи",
    },
    {
      title: "Благоустройство",
      description: "Инфраструктурни решения за общественото благоустройство",
    },
    {
      title: "Саниране на сгради",
      description: "Реставрация и обновяване на фасади на търговски и жилищни сгради",
    },
    {
      title: "Производство на инертни материали",
      description: "Добив и производство на инертни материали от кариера „Крачола“",
    },
  ]

  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            // MODIFIED: Switched to a grid for a 2-column layout on medium screens and up
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column: Original Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
                  За нас
                </h1>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground">
                {/* MODIFIED: Removed max-w-3xl, the grid column handles width */}
                "УЛТРА БИЛД" ООД е българска частна компания, специализирана в изпълнението на инфраструктурно
                строителство с над 7 години опит. Ние вярваме в качеството, надеждността и устойчивото развитие.
              </p>
            </motion.div>

            {/* Right Column: NEW CONTENT (using your 'credentials' array) */}
            <motion.div variants={itemVariants} className="hidden md:block gap-2 flex">


              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="bg-muted/50 border border-border p-6 space-y-2 hover:border-primary/50 transition-colors"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                      <p className="text-3xl font-bold text-foreground">{achievement.value}</p>
                      <p className="text-sm text-muted-foreground">{achievement.label}</p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full px-4 py-8 md:py-16 ">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Ние строим устойчиви основи
                </h2>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  През 2017 година, „УЛТРА БИЛД“ ООД се основа с ясна мисия: доставяне на
                  висококачествени инфраструктурни решения, които служат на общностите и
                  развиват икономиката.
                </p>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  Основната дейност на дружеството е строителство и поддръжка на пътища и
                  съоръжения. Компанията разполага със собствена материално-техническа база
                  и квалифициран инженерно-технически състав.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  Свързано дружество с „УЛТРА БИЛД“ ООД е „СПН КОНСТРУКШЪН“ ООД, чиято основна
                  дейност е производство и преработка на инертни материали от кариера
                  „Крачола“, с. Бояджик.
                </p>
              </div>
            </motion.div>


            {/* Right Column - Stats Grid */}

            <div className="space-y-5">
              <h3 className="font-semibold text-foreground text-lg">Ключови направления:</h3>
              {services.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{service.title}</p>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 md:hidden">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-muted/50 border border-border p-6 space-y-2 hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                    <p className="text-3xl font-bold text-foreground">{achievement.value}</p>
                    <p className="text-sm text-muted-foreground">{achievement.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>


          </motion.div>
        </div>
      </section>

      <div className="w-full bg-[repeating-linear-gradient(45deg,#f9831e_0px,#f9831e_20px,#202020_20px,#202020_40px)] py-1"></div>


      {/* Timeline/Milestones */}
      <section className="w-full px-4 py-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-foreground">
              Нашата история
            </motion.h2>

            {/* MODIFIED: Changed from 'space-y-8' to a responsive grid */}
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
              {[
                {
                  year: "2017",
                  title: "Основаване",
                  description: "Създаване на УЛТРА БИЛД ООД с фокус върху пътностроителното инженерство",
                },
                {
                  year: "2018-2020",
                  title: "Разширение",
                  description: "Придобиване на съвременна техника и разширяване на екипа с квалифицирани специалисти",
                },
                {
                  year: "2020-2023",
                  title: "Растеж и признание",
                  description:
                    "Приемане като член на Камара на строителите; успешно участие в европейски финансирани проекти",
                },
                {
                  year: "2023-2024",
                  title: "Утвърждаване",
                  description:
                    "Поддържане на АМ 'ТРАКИЯ'; разширяване на портфолиото на услуги; укрепване на позицията като надежден партньор",
                },
              ].map((milestone, idx) => (
                // MODIFIED: Item layout changes to 'flex-col' on desktop
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 sm:gap-8 md:flex-col md:gap-4"
                >
                  {/* MODIFIED: Bubble/Line container now supports 'flex-row' on desktop */}
                  <div className="flex flex-col items-center md:flex-row md:w-full md:items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                      {idx + 1}
                    </div>

                    {/* Vertical Line (Mobile Only) */}
                    {idx < 3 && <div className="w-1 h-20 bg-primary/20 mt-4 md:hidden"></div>}

                    {/* Horizontal Line (Desktop Only) */}
                    {idx < 3 && <div className="hidden md:block flex-1 h-1 bg-primary/20 ml-4"></div>}
                  </div>

                  {/* MODIFIED: Adjusted padding for desktop */}
                  <div className="pb-8 md:pb-0 md:mt-2">
                    <p className="text-sm font-semibold text-primary mb-1">{milestone.year}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Credentials Section */}
      <section className="w-full px-4 sm:px-6 py-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-foreground">
              Наши сертификати и признание
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {credentials.map((credential, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, borderColor: "hsl(var(--primary))" }}
                  className="bg-background border border-border p-8 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <Award className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{credential.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{credential.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-8 py-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-balance">
              Нашите ценности
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Качество",
                  description: "Всеки проект е извършен с най-високи стандарти на качество и внимание към детайла",
                },
                {
                  title: "Надеждност",
                  description: "Ние стоим зад своите обещания и доставяме резултати, които издържат на времето",
                },
                {
                  title: "Устойчивост",
                  description: "Ние инвестираме в решения, които полезват окружаващата среда и общностите",
                },
              ].map((value, idx) => (
                <motion.div key={idx} variants={itemVariants} className="space-y-3">
                  <div className="w-12 h-1 bg-primary"></div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                  <p className="leading-relaxed opacity-90">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full bg-[repeating-linear-gradient(45deg,#f9831e_0px,#f9831e_20px,#202020_20px,#202020_40px)] py-1"></div>


      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-foreground">
              Готови ли сте да работим заедно?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Нека обсъдим Вашия следващ проект. Ние сме готови да доставим качество и
              безупречност.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Link href="/contact" >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Свържете се с нас
                </Button>
              </Link>

              <Link href="/services" >
                <Button
                  size="lg"
                  variant="outline"
                  className="dark:hover:text-white hover:bg-secondary hover:text-secondary-foreground"
                >
                  Преглед на услуги
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
