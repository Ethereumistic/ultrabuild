"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Clock, XCircle } from "lucide-react"

export function WorkHours() {
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
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Работно време</CardTitle>
      </CardHeader>
      {/* <h1 className="font-bold ml-8">Работно време</h1> */}
      <CardContent>
        <ul className="space-y-2">
          {hours.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium text-foreground">
                  {item.days}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {item.time}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}