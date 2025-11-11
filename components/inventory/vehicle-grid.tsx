"use client"

import { useState, useEffect, useRef } from "react" // <-- 1. Import 'useRef'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

interface Vehicle {
  id: string
  name: string
  description: string
  image: string
  specs: Record<string, string>
}

interface VehicleGridProps {
  vehicles: Vehicle[]
}

export default function VehicleGrid({ vehicles }: VehicleGridProps) {
  const [api, setApi] = useState<CarouselApi | undefined>()
  const [current, setCurrent] = useState(0)
  
  // 2. Create a ref for the carousel
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const selectedVehicle = vehicles[current]

  if (!selectedVehicle) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-center text-muted-foreground">Няма налични превозни средства</p>
      </div>
    )
  }

  // 3. Create a new handler for thumbnail clicks
// 3. Create a new handler for thumbnail clicks
const handleThumbnailClick = (index: number) => {
    // Tell the carousel to scroll to the new slide
    api?.scrollTo(index)

    // Check if we are on a mobile screen (Tailwind's 'sm' breakpoint is 640px)
    const isMobile = window.innerWidth < 1080

    // if (isMobile && carouselRef.current) {
    if (carouselRef.current) {
      
      // --- START OF CHANGES ---

      // 1. Calculate the element's top position relative to the document
      const elementTop = carouselRef.current.getBoundingClientRect().top + window.scrollY;
      
      // 2. Define your desired offset (20px padding from the top)
      const offset = 86; 
      
      // 3. Calculate the final scroll position
      const targetScrollY = elementTop - offset;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });

    }
  }

  return (
    <div className="space-y-8">
      {/* Main Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* 4. Attach the ref to the Carousel component */}
        <Carousel
          ref={carouselRef} // <-- Attach ref here
          setApi={setApi}
          className="w-full relative lg:self-start"
        >
          <CarouselContent className="h-[400px] lg:h-[500px]">
            {vehicles.map((vehicle) => (
              <CarouselItem key={vehicle.id}>
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-3 sm:left-0 top-1/2 -translate-y-1/2 z-10 size-8 bg-background/50 hover:bg-background/80 text-foreground " variant="ghost" />
          <CarouselNext className="absolute -right-3 sm:right-0 top-1/2 -translate-y-1/2 z-10 size-8 bg-background/50 hover:bg-background/80 text-foreground " variant="ghost" />
        </Carousel>

        {/* Specs Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{selectedVehicle.name}</h2>
            <p className="text-lg text-primary font-semibold">{selectedVehicle.description}</p>
          </div>

          <div className="space-y-6 mb-8">
            {Object.entries(selectedVehicle.specs).map(([key, value]) => (
              <div key={key} className="border-l-4 border-primary pl-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">{key}</h3>
                <p className="text-foreground text-base leading-relaxed">{value}</p>
              </div>
            ))}
          </div>

          <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg">
            Запитване за това превозно средство
          </Button>
        </div>
      </div>

      {/* Navigation Thumbnails */}
      <div className="flex items-center justify-center gap-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 flex-1">
          {vehicles.map((vehicle, index) => (
            <button
              key={vehicle.id}
              // 5. Use the new click handler
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                current === index
                  ? "border-primary ring ring-primary"
                  : "border-secondary hover:border-primary/50"
              }`}
            >
              <img
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}