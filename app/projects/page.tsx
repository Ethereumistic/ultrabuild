"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DimitarBlagoev } from "@/components/projects/dimitar-blagoev"

const projectTypes = [
  { id: "all", label: "Всички проекти" },
  { id: "road", label: "Пътно строителство и поддръжка" },
  { id: "facades", label: "Саниране и фасади" },
  { id: "urban", label: "Градско и парково строителство" },
]

const projects = [
  {
    id: "dimitar-blagoev",
    type: "road",
    component: DimitarBlagoev,
  },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = projects.filter((project) => activeTab === "all" || project.type === activeTab)

  return (
    <main className="w-full bg-background">
      {/* Header Section */}
      <section className="w-full text-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Нашите Проекти</h1>
          <p className="text-lg text-muted-foreground">
            Разгледайте нашите завършени проекти и вижте как ние трансформираме инфраструктура
          </p>
        </div>
      </section>

      {/* Projects Filter Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              {projectTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="text-sm sm:text-base">
                  {type.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Projects Grid */}
            <div className="space-y-16">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => {
                  const ProjectComponent = project.component
                  return (
                    <div key={project.id}>
                      <ProjectComponent />
                    </div>
                  )
                })
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">Няма проекти за този тип</p>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
