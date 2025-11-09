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
    href: string
  }[]
  mapEmbedUrl: string
}

export function ContactInfoCard({
  title,
  icon,
  address,
  contacts,
  mapEmbedUrl,
}: ContactInfoCardProps) {
  return (
    // We use h-full and flex flex-col to make the card fill the
    // height of its parent grid cell
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex text-2xl items-center gap-2">
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
        <div className="flex items-start gap-2 min-h-18">
          <Pin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
          <div className="space-y-1">
            {address.map((line, idx) => (
              <p key={idx} className="text-sm text-muted-foreground">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="space-y-2">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary">{contact.icon}</span>
              <span>{contact.text}</span>
            </a>
          ))}
        </div>

        {/* This div grows to fill all available space, pushing
            the map to the very bottom of the card. */}
        <div className="flex-grow"></div>

        {/* Embedded Map */}
        {/* We add 'mt-4' to give it some space from the contact
            links, in case the flex-grow spacer is small on
            large screens. */}
        <div className="overflow-hidden rounded-md border mt-4">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            // This CSS filter inverts the map in dark mode
            className="dark:invert dark:grayscale"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}