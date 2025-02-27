"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-2 text-center mb-4">
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{timeLeft.days}</div>
        <div className="text-xs text-gray-500">Days</div>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs text-gray-500">Hours</div>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs text-gray-500">Minutes</div>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs text-gray-500">Seconds</div>
      </div>
    </div>
  )
}

