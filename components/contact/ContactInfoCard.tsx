"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pin } from "lucide-react"

interface ContactInfoCardProps {
  title: string
  icon: React.ReactNode
  address: string[]
  contacts: {
    icon: React.ReactNode
    text: string
    name?: string
    href: string
  }[]
  mapEmbedUrl?: string
  mapUrl?: string
  className?: string
}

export function ContactInfoCard({
  title,
  icon,
  address,
  contacts,
  mapEmbedUrl,
  mapUrl,
  className,
}: ContactInfoCardProps) {
  return (
    <Card className={`flex flex-col ${className || ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex text-3xl items-center gap-3">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>

      {/* This CardContent is also a flex-col, allowing us to use
        a flex-grow spacer to push the map to the bottom.
      */}
      <CardContent className="space-y-4 h-full flex flex-col">

        {/* === SOLUTION ===
            By adding a 'min-h-24' (6rem), we ensure that this address
            block always occupies at least that much vertical space.
            This standardizes the starting position of the 'Contact Links'
            section below it, regardless of whether the address is
            1 line or 4 lines.
        */}
        {mapUrl ? (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 min-h-18 group/address hover:opacity-80 transition-opacity"
          >
            <Pin className="w-4 h-4 text-primary shrink-0 mt-1 group-hover/address:scale-110 transition-transform" />
            <div className="space-y-1">
              {address.map((line, idx) => (
                <p key={idx} className="text-sm text-muted-foreground group-hover/address:text-primary transition-colors">
                  {line}
                </p>
              ))}
              <span className="text-[10px] text-primary font-medium opacity-0 group-hover/address:opacity-100 transition-opacity">Виж в Google Maps →</span>
            </div>
          </a>
        ) : (
          <div className="flex items-start gap-3 min-h-18">
            <Pin className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div className="space-y-2">
              {address.map((line, idx) => (
                <p key={idx} className="text-base text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Contact Links */}
        <div className="space-y-6">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
            >
              <div className="flex items-center justify-center w-6 h-6 text-primary shrink-0">
                {contact.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-base font-medium leading-none mb-1">
                  {contact.text}
                </span>
                {contact.name && (
                  <span className="text-sm text-muted-foreground leading-none">
                    {contact.name}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* This div grows to fill all available space, pushing
            the map to the very bottom of the card. */}
        <div className="grow"></div>

        {/* Embedded Map */}
        {mapEmbedUrl && (
          <div className="overflow-hidden rounded-md border mt-4">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="dark:invert dark:grayscale"
            ></iframe>
          </div>
        )}
      </CardContent>
    </Card>
  )
}