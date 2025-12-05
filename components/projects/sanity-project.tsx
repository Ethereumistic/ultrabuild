"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Project } from "@/types/sanity"
import { getLucideIcon } from "@/lib/icon-mapper"
import { urlForImage } from "@/lib/sanity"

interface SanityProjectProps {
    project: Project
}

export function SanityProject({ project }: SanityProjectProps) {
    const CategoryIcon = getLucideIcon(project.projectType.icon)

    return (
        <div className="w-full py-4">
            {/* Top Section: 2 Col Grid */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Column */}
                        <div className="flex flex-col justify-start">
                            <div className="flex items-center gap-2 mb-2">
                                <CategoryIcon className="w-4 h-4 text-primary" />
                                <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                                    {project.projectType.title}
                                </p>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{project.title}</h1>
                            <p className="text-secondary text-base sm:text-lg mb-4">{project.location}</p>
                            <p className="text-muted-foreground text-base leading-relaxed">{project.subtitle}</p>
                        </div>

                        {/* Right Column - Hero Media */}
                        <div className="flex items-center">
                            {project.heroMedia?.videoUrl ? (
                                <video autoPlay muted loop playsInline className="w-full h-auto object-cover aspect-video rounded-xl">
                                    <source src={project.heroMedia.videoUrl} type="video/mp4" />
                                </video>
                            ) : project.heroMedia?.imageCarousel && project.heroMedia.imageCarousel.length > 0 ? (
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {project.heroMedia.imageCarousel.map((image, idx) => (
                                            <CarouselItem key={idx}>
                                                <img
                                                    src={urlForImage(image).width(1920).url()}
                                                    alt={`${project.title} - Image ${idx + 1}`}
                                                    className="w-full h-auto object-cover aspect-video rounded-xl"
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-4" />
                                    <CarouselNext className="right-4" />
                                </Carousel>
                            ) : project.heroMedia?.singleImage ? (
                                <img
                                    src={urlForImage(project.heroMedia.singleImage).width(1920).url()}
                                    alt={project.title}
                                    className="w-full h-auto object-cover aspect-video rounded-xl"
                                />
                            ) : (
                                <div className="w-full aspect-video bg-muted rounded-xl flex items-center justify-center">
                                    <p className="text-muted-foreground">No media available</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                        {project.processTitle || "Времева линия на проекта"}
                    </h2>

                    {/* Timeline Items */}
                    <div className="relative space-y-0 md:space-y-20">
                        {/* Desktop Full Vertical Line */}
                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-[repeating-linear-gradient(45deg,#FAC300_0px,#FAC300_20px,#202020_20px,#202020_40px)] z-0" />

                        {project.phases.map((phase, index) => {
                            const isEven = index % 2 === 1
                            const Icon = getLucideIcon(phase.icon)
                            const isLastItem = index === project.phases.length - 1

                            return (
                                <div key={index} className={`relative ${isLastItem ? "" : "pb-20 md:pb-0"}`}>
                                    {/* Mobile Timeline */}
                                    {!isLastItem && (
                                        <div className="md:hidden absolute top-0 right-[15px] w-2 h-full bg-[repeating-linear-gradient(45deg,#FAC300_0px,#FAC300_20px,#202020_20px,#202020_40px)]" />
                                    )}
                                    {/* Mobile Timeline Dot + Number */}
                                    <div className="md:hidden flex items-center justify-center absolute -top-1 -right-0.5 size-10 rounded-full bg-primary border-4 border-muted z-10">
                                        <span className="text-lg font-black text-primary-foreground">{index + 1}</span>
                                    </div>

                                    {/* Desktop Timeline Dot + Icon */}
                                    <div className="hidden md:flex items-center justify-center absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary border-4 border-muted z-10">
                                        <Icon className="w-6 h-6 text-primary-foreground" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch pr-12 md:pr-0">
                                        {/* Media Column */}
                                        <div className={`flex items-center px-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
                                            {phase.media?.videoUrl ? (
                                                <video autoPlay muted loop playsInline className="w-full h-auto object-cover aspect-video rounded-xl shadow-xl">
                                                    <source src={phase.media.videoUrl} type="video/mp4" />
                                                </video>
                                            ) : phase.media?.imageCarousel && phase.media.imageCarousel.length > 0 ? (
                                                <Carousel className="w-full">
                                                    <CarouselContent>
                                                        {phase.media.imageCarousel.map((image, idx) => (
                                                            <CarouselItem key={idx}>
                                                                <img
                                                                    src={urlForImage(image).width(1920).url()}
                                                                    alt={`${phase.title} - Image ${idx + 1}`}
                                                                    className="w-full h-auto object-cover aspect-video rounded-xl shadow-xl"
                                                                />
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    <CarouselPrevious className="left-4" />
                                                    <CarouselNext className="right-4" />
                                                </Carousel>
                                            ) : phase.media?.singleImage ? (
                                                <img
                                                    src={urlForImage(phase.media.singleImage).width(1920).url()}
                                                    alt={phase.title}
                                                    className="w-full h-auto object-cover aspect-video rounded-xl shadow-xl"
                                                />
                                            ) : (
                                                <div className="w-full aspect-video bg-muted rounded-xl flex items-center justify-center">
                                                    <p className="text-muted-foreground text-sm">No media</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Text Content Column */}
                                        <div className={`flex flex-col justify-start px-4 ${isEven ? "md:order-1" : "md:order-2"}`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-primary">
                                                    <Icon className="w-6 h-6 text-primary-foreground" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed mb-6">{phase.description}</p>

                                            {/* Highlights */}
                                            <div className="space-y-3">
                                                {phase.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                                        <p className="text-sm text-foreground">{highlight}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


        </div>
    )
}
