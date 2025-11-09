"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// --- IMPORTANT ---
// 1. Get your free access key from https://web3forms.com/
// 2. Paste it here to replace the placeholder
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"

// --- Image Slider Data ---
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

// 1. Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Името трябва да е поне 2 символа."),
  email: z
    .string()
    .email("Моля, въведете валиден имейл.")
    .min(1, "Имейлът е задължителен."),
  message: z
    .string()
    .min(10, "Съобщението трябва да е поне 10 символа.")
    .max(1000, "Съобщението е твърде дълго."),
  // This is a hidden honeypot field for bot prevention
  "bot-check": z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

// 2. Define the Form Component
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null)
  
  // State for the background slider
  const [currentSlide, setCurrentSlide] = useState(0)

  // Autoplay effect for the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      "bot-check": "",
    },
  })

  // 3. Handle form submission
  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setSubmissionStatus(null)

    if (values["bot-check"]) {
      setIsSubmitting(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append("access_key", WEB3FORMS_ACCESS_KEY)
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("message", values.message)
      formData.append("subject", "Ново запитване от сайта на Ultrabuild")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmissionStatus("success")
        form.reset()
      } else {
        console.error("Web3Forms error:", data.message)
        setSubmissionStatus("error")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setSubmissionStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmissionStatus(null), 5000)
    }
  }

  return (
    // Card is now relative and overflow-hidden to contain the slider
    // Added h-full to make it fill the grid cell
    <Card className="h-full relative overflow-hidden">
      
      {/* === Background Slider === */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={projectImages[currentSlide].src}
          alt={projectImages[currentSlide].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* === Form Content === */}
      {/* This content now sits on top of the overlay (z-20) */}
      <div className="relative z-20 h-full flex flex-col">
        <CardHeader>
          {/* Text is now white for readability */}
          <CardTitle className="text-2xl text-white">
            Форма за запитване
          </CardTitle>
          <CardDescription className="text-white/80">
            Ще се свържем с вас възможно най-скоро.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 flex flex-col h-full"
            >
              {/* --- HONEYPOT FIELD (FOR BOTS) --- */}
              <input
                type="checkbox"
                {...form.register("bot-check")}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Име</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Вашето име"
                          {...field}
                          disabled={isSubmitting}
                          // Custom style for dark background
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
                        />
                      </FormControl>
                      <FormMessage className="text-primary" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Имейл</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="vashiat@email.bg"
                          {...field}
                          disabled={isSubmitting}
                          // Custom style for dark background
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
                        />
                      </FormControl>
                      <FormMessage className="text-primary" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/90">Съобщение</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Вашето запитване..."
                          {...field}
                          rows={6}
                          disabled={isSubmitting}
                          // Custom style for dark background
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 h-64"
                        />
                      </FormControl>
                      <FormMessage className="text-primary" />
                    </FormItem>
                  )}
                />
              </div>

              {/* --- Submission Button & Status (pushed to bottom) --- */}
              <div className="flex-grow"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Изпращане...
                    </>
                  ) : (
                    <>
                      Изпрати запитване
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {/* Status messages are now light for visibility */}
                {submissionStatus === "success" && (
                  <div className="flex items-center text-sm font-medium text-emerald-400">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Съобщението е изпратено успешно!
                  </div>
                )}
                {submissionStatus === "error" && (
                  <div className="flex items-center text-sm font-medium text-red-400">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Грешка при изпращане. Моля, опитайте по-късно.
                  </div>
                )}
              </div>

              
            </form>


          </Form>
        </CardContent>
      </div>
    </Card>
  )
}