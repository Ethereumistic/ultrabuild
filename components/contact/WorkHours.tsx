"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Clock, XCircle } from "lucide-react"

export function WorkHours({ className }: { className?: string }) {
  const hours = [
    {
      icon: <Clock className="w-4 h-4 text-primary" />,
      days: "Понеделник - Петък",
      time: "08:00 - 17:00",
    },
    {
      icon: <XCircle className="w-4 h-4 text-muted-foreground" />,
      days: "Събота - Неделя",
      time: "Затворено",
    },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Работно време</CardTitle>
      </CardHeader>
      <CardContent className="pb-8">
        <ul className="space-y-6">
          {hours.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-lg font-medium text-foreground">
                  {item.days}
                </span>
              </div>
              <span className="text-lg text-muted-foreground">
                {item.time}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}