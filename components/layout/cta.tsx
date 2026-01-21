"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
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

interface CTAProps {
    title?: string
    description?: string
    primaryButtonText?: string
    primaryButtonHref?: string
    secondaryButtonText?: string
    secondaryButtonHref?: string
}

export function CTA({
    title = "Готови ли сте да работим заедно?",
    description = "Нека обсъдим Вашия следващ проект. Ние сме готови да доставим качество и безупречност.",
    primaryButtonText = "Свържете се с нас",
    primaryButtonHref = "/contact",
    secondaryButtonText = "Преглед на услуги",
    secondaryButtonHref = "/services"
}: CTAProps) {
    return (
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
                        {title}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
                        {description}
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex gap-4 justify-center">
                        <Link href={primaryButtonHref} >
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                {primaryButtonText}
                            </Button>
                        </Link>

                        <Link href={secondaryButtonHref} >
                            <Button
                                size="lg"
                                variant="outline"
                                className="dark:hover:text-white hover:bg-secondary hover:text-secondary-foreground"
                            >
                                {secondaryButtonText}
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
