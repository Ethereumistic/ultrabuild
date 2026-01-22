"use client"

import {
  Building,
  Mail,
  Phone,
  Pin,
  Warehouse,
} from "lucide-react"
// CHANGED: Added .tsx extensions to imports to fix resolution error
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfoCard } from "@/components/contact/ContactInfoCard"
import { WorkHours } from "@/components/contact/WorkHours"
import { motion } from "framer-motion"

// --- Data for Info Cards (Unchanged) ---

const hqInfo = {
  title: "Централен офис",
  icon: <Building className="w-5 h-5" />,
  address: [
    'гр. Ямбол, ул. "Димитър Благоев" №19, вх. Е, ап. 180, ет. 5',
  ],
  contacts: [
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+359 896 382 895",
      name: "Централен Офис",
      href: "tel:+359896382895",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+359 893 277 266",
      name: "Стефан Стефанов",
      href: "tel:+359893277266",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "ultrabild@gmail.com",
      href: "mailto:ultrabild@gmail.com",
    },
  ],
  mapUrl: 'https://maps.google.com/maps?q=гр.%20Ямбол,%20ул.%20%22Димитър%20Благоев%22%20№19',
}

const storageInfo = {
  title: "Складова база",
  icon: <Warehouse className="w-5 h-5" />,
  address: ["гр. Ямбол, ул. Ормана 72"],
  contacts: [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "office@ultrabuild.bg",
      href: "mailto:office@ultrabuild.bg",
    },
  ],
  mapUrl: 'https://maps.google.com/maps?q=гр.%20Ямбол,%20ул.%20Ормана%2072',
}

// --- Main Page Component ---

export default function ContactPage() {
  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: delay },
  })

  return (
    <div
      id="contacts"
      className="w-full bg-background py-8"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header (Unchanged) */}
        <motion.div
          {...fadeIn(0)}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Свържете се с нас
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Имате въпроси или сте готови да започнете проект? Попълнете формата
            или ни се обадете директно.
          </p>
        </motion.div>

        {/* === Main Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">

          {/* Column 1: Contact Form (spans 2) */}
          <motion.div
            {...fadeIn(0.2)}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>

          {/* Column 2: Info Area (spans 2) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* HQ */}
              <motion.div
                {...fadeIn(0.6)}
                className="md:col-span-1"
              >
                <ContactInfoCard {...hqInfo} className="h-full" />
              </motion.div>

              {/* Storage */}
              <motion.div
                {...fadeIn(0.8)}
                className="md:col-span-1"
              >
                <ContactInfoCard {...storageInfo} className="h-full" />
              </motion.div>

              {/* Work Hours (spans both columns) */}
              <motion.div
                {...fadeIn(0.4)}
                className="md:col-span-2"
              >
                <WorkHours />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}