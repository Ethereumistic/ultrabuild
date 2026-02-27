"use client"

import { Wifi } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// We isolate the Studio into a dynamic component.
const Studio = dynamic(() => import('next-sanity/studio').then(mod => mod.NextStudio), {
    ssr: false,
    loading: () => <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">Loading Editor...</div>
})

export default function StudioPage() {
    const [sanityConfig, setSanityConfig] = useState<any>(null)
    const isSiteOnly = process.env.NEXT_PUBLIC_SITE_ONLY === 'true'

    useEffect(() => {
        if (!isSiteOnly) {
            // Only import the config if we are NOT in site-only mode.
            // This prevents the Sanity dependencies from being pulled into the main bundle.
            import('../../../sanity.config').then((mod) => {
                setSanityConfig(mod.default)
            })
        }
    }, [isSiteOnly])

    if (isSiteOnly) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center font-sans">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center animate-pulse">
                    <Wifi className="text-2xl text-white" />
                </div>
                <h1 className="text-2xl font-bold mb-2">echoray.io CMS</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    За да поддържаме светкавична скорост, Мениджмънт студиото е хоствано на високопроизводителен CMS ендпойнт.
                </p>
                <Link href="https://ultrabuild.vercel.app/studio" target="_blank" rel="noopener noreferrer" className="mt-8 px-6 py-3 bg-white text-black rounded-full font-medium">
                    Отиди до Мениджмънт студио
                </Link>
            </div>
        )
    }

    if (!sanityConfig) return null

    return <Studio config={sanityConfig} />
}