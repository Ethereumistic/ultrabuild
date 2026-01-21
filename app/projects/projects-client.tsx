"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { SanityProject } from "@/components/projects/sanity-project"
import { Project, ProjectType } from "@/types/sanity"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectsClientProps {
    projectTypes: ProjectType[]
    sanityProjects: Project[]
}

export function ProjectsClient({ projectTypes, sanityProjects }: ProjectsClientProps) {
    const [activeTab, setActiveTab] = useState("all")

    // Build tabs from Sanity project types
    const tabs = [
        { id: "all", label: "Всички проекти" },
        ...projectTypes.map(type => ({
            id: type._id,
            label: type.title,
        })),
    ]

    // Map Sanity projects to renderable components
    const allProjects = sanityProjects.map(project => ({
        id: project._id,
        typeId: project.projectType._id,
        component: () => <SanityProject project={project} />,
    }))

    // Filter projects based on active tab
    const filteredProjects = allProjects.filter(
        (project) => activeTab === "all" || project.typeId === activeTab
    )

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
                        <TabsList className={`grid w-full mb-12 ${tabs.length <= 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'}`}>
                            {tabs.map((type) => (
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


            {/* CTA Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                        Заинтересовани ли сте в подобни проекти?
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                        Свържете се с нас днес и открийте как УЛТРА БИЛД може да трансформира вашия проект.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90 px-8 py-3 font-semibold">
                            Свържете се с нас
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
