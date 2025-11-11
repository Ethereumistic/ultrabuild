import { EUProjectInfo } from "@/components/layout/eu-project"
import HeroSection from "@/components/layout/hero-section"
import ServicesFunnel from "@/components/layout/services-funnel"
import { DimitarBlagoev } from "@/components/projects/dimitar-blagoev"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <ContactStripe /> */}
      <HeroSection /> 
      <ServicesFunnel />
      <EUProjectInfo />
      <div className="text-center pt-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-4 ">
            <span className="text-primary">Нашите Проекти</span>
            <br />
          </h2>

          </div>
      <DimitarBlagoev />
    </main>
  )
}
