"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export function EUProjectInfo() {
  return (
    <>
    <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">


        {/* Main Project Card */}
        <Card className="p-4 mb-6 border border-border bg-card">
                    {/* Header with EU Flag */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="relative w-48 h-32 flex-shrink-0">
            <Image
              src="https://flagcdn.com/eu.svg"
              alt="European Union Flag"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              Съфинансирано от
              <br /> Европейския Съюз
            </h2>
          </div>
        </div>
          <div className="space-y-6">
            {/* Project Title */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Наименование на проекта:</h3>
              <p className="text-foreground text-base sm:text-lg font-semibold">
                BG05SFPR002-1.004-2435-C01 „Адаптирана работна среда в УЛТРА БИЛД ООД"
              </p>
            </div>

            {/* Program & Date Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Програма</p>
                <p className="text-foreground font-semibold">„Развитие на човешките ресурси" 2021-2027</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Дата на договора</p>
                <p className="text-foreground font-semibold">11.12.2024 г.</p>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Кратко описание на проекта:</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Проектът на УЛТРА БИЛД ООД включва изпълнението на следните дейности:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">а/</span>
                  <span>
                    Разработване и прилагане на „зелени" модели на организация на труд съобразно спецификата на
                    конкретните работни места в предприятията. Изготвяне на „зелени" карти за организация на работни
                    процеси на конкретните работни места. Обучение на лицата от целевата група насочено към внедряване
                    на „зелени" модели на организация на труд.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">б/</span>
                  <span>Закупуване на лични предпазни средства (ЛПС) и специално работно облекло.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">в/</span>
                  <span>Осигуряване на социални придобивки за работещите</span>
                </li>
              </ul>
            </div>

            {/* Project Goals */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-3">Цели по проекта:</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">а/</span>
                  <span>
                    Подобряване на екологосъобразността на работната среда в предприятието в посока устойчивост и
                    опазване на околната среда, чрез разработване и прилагане на „зелени" модели на работа и „зелени"
                    карти за организация на работните процеси.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">б/</span>
                  <span>
                    Подобряване на условията на труд и постигане на добре приспособена работна среда, която отчита
                    рисковете за здравето, чрез закупуване на лични предпазни средства (ЛПС) и специално работно
                    облекло.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">в/</span>
                  <span>
                    Стимулиране на работоспособността, производителността и мотивацията на служителите, чрез осигуряване
                    на социални придобивки.
                  </span>
                </li>
              </ul>
            </div>

            {/* Project Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="border-l-4 border-accent pl-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Обща стойност на проекта</p>
                <p className="text-foreground font-bold text-lg">193 026,22 лв.</p>
                <p className="text-xs text-muted-foreground mt-1">(100% безвъзмездно финансиране)</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Начало</p>
                <p className="text-foreground font-semibold">11.12.2024 г.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Край</p>
                <p className="text-foreground font-semibold">11.06.2026 г.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* EU Disclaimer */}
        {/* <div className="bg-muted p-4 sm:p-6 border-l-4 border-primary text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Съфинансирано от Европейския Съюз.</span> Възгледите и
            мненията, изразени в този документ, обаче принадлежат на автора им и не отразяват задължително възгледите на
            Европейския съюз или органите на управление на него.
          </p>
        </div> */}
      
    </section>
        <div className="w-full bg-[repeating-linear-gradient(45deg,#FAC300_0px,#FAC300_20px,#202020_20px,#202020_40px)] py-1"></div>

    </>
  )
}
