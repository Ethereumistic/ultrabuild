"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectImageProps {
    src: string
    alt: string
    className?: string
}

export function ProjectImage({ src, alt, className }: ProjectImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {/* Skeleton with centered spinner shown while loading */}
            {isLoading && !hasError && (
                <div className="absolute inset-0 w-full h-full bg-muted/50 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Failed to load image</p>
                </div>
            )}

            {/* Actual image with smooth opacity transition */}
            <img
                src={src}
                alt={alt}
                className={cn(
                    "w-full h-full object-cover transition-opacity duration-500 ease-in-out",
                    isLoading ? "opacity-0" : "opacity-100"
                )}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false)
                    setHasError(true)
                }}
            />
        </div>
    )
}
