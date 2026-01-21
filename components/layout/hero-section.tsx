"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, animate } from "framer-motion"
import { Button } from "@/components/ui/button"

const projectImages = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/hero/1.png",
    alt: "Highway Infrastructure Project",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/hero/2.png",
    alt: "Urban Development Project",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/Ethereumistic/ultrabuild-assets/hero/3.png",
    alt: "Building Renovation Project",
  },
]

// --- New Animated Number Component ---
// We define this small helper component here to handle the count-up animation.

type AnimatedStatNumberProps = {
  value: number
}

function AnimatedStatNumber({ value }: AnimatedStatNumberProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    // This animates from 0 to the target 'value'
    const controls = animate(0, value, {
      duration: 2, // Animation duration in seconds
      ease: "easeOut", // Makes the animation slow down at the end
      onUpdate(latest) {
        // We use toLocaleString to add commas (e.g., 1,300)
        // and Math.round to remove decimals.
        node.textContent = Math.round(latest).toLocaleString()
      },
    })

    // Cleanup function to stop the animation if the component unmounts
    return () => controls.stop()
  }, [value]) // Rerun animation if the value changes

  // We start with 0, and the useEffect will animate it to the target value
  return <motion.span ref={nodeRef}>0</motion.span>
}

// --- End of Animated Number Component ---

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // --- Dynamic Stats Calculation ---
  const establishmentYear = 2017
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = Math.max(1, currentYear - establishmentYear)

  const baseKm = 500
  const baseProjects = 150

  const dynamicKm = baseKm + yearsOfExperience * 100
  const dynamicProjects = baseProjects + yearsOfExperience * 10

  // Updated 'trustStats' to use raw numbers for animation
  // and a string for "ISO 9001"
  const trustStats = [
    { id: "years", value: yearsOfExperience, label: "Години Опит", suffix: "+" },
    { id: "km", value: dynamicKm, label: "километра пътища", suffix: "+" },
    { id: "projects", value: dynamicProjects, label: "Проекти", suffix: "+" },
    { id: "iso", value: "ISO 9001", label: "Сертификат", suffix: "" }, // This is a string
  ]
  // --- End Dynamic Stats ---

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[750px] lg:h-[814px] overflow-hidden bg-black">
        {/* Image Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={projectImages[currentSlide].src}
            alt={projectImages[currentSlide].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* --- Stats in 4 Corners (Updated) --- */}
        {/* We now map over the stats array to make this cleaner */}
        {trustStats.map((stat, idx) => {
          // Determine position based on index
          const positions: string[] = [
            "top-6 left-6 sm:top-8 sm:left-8 md:top-12 md:left-12", // Top-Left
            "top-6 right-6 sm:top-8 sm:right-8 md:top-12 md:right-12", // Top-Right
            "bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12", // Bottom-Left
            "bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12", // Bottom-Right
          ]

          // Determine animation props based on index
          const animationProps = {
            initial: { opacity: 0, x: idx % 2 === 0 ? -20 : 20, y: idx < 2 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0, y: 0 },
            transition: { delay: 0.5 + idx * 0.1, duration: 0.5 },
            viewport: { once: true },
          }

          return (
            <motion.div
              key={stat.id}
              {...animationProps}
              className={`absolute z-20 flex flex-col items-center text-center ${positions[idx]}`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary block mb-2">
                {/* Check if the value is a number to animate it */}
                {typeof stat.value === 'number' ? (
                  <>
                    <AnimatedStatNumber value={stat.value} />
                    {stat.suffix}
                  </>
                ) : (
                  // Otherwise, just display the string (for "ISO 9001")
                  stat.value
                )}
              </span>
              <p className="text-xs sm:text-sm md:text-base text-white font-medium">
                {stat.label}
              </p>
            </motion.div>
          )
        })}
        {/* --- End Stats --- */}


        {/* Headline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight"
          >
            Изграждане на инфраструктурата <br /> на България.
            <br /> <span className="text-primary">От пътища до фасади.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 max-w-2xl"
          >
            Инженерно съвършенство и качествено строителство за всеки проект
          </motion.p>
        </div>
      </div>
      <div className="w-full bg-[repeating-linear-gradient(45deg,#f9831e_0px,#f9831e_20px,#202020_20px,#202020_40px)] py-1"></div>

    </div>
  )
}