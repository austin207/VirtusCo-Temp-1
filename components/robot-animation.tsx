"use client"

import { useEffect, useRef } from "react"

export function RobotAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Use non-null assertion to tell TypeScript that ctx is not null.
    const ctx = canvas.getContext("2d")!
    
    // Set canvas dimensions
    canvas.width = 400
    canvas.height = 400

    // Robot colors
    const bodyColor = "#3B82F6" // blue-500
    const accentColor = "#8B5CF6" // purple-500
    const eyeColor = "#FFFFFF"
    const highlightColor = "#DBEAFE" // blue-100

    // Animation variables
    let armAngle = 0
    let eyeSize = 5
    let growing = true

    function drawRobot() {
      // Store canvas reference to avoid null checks
      const currentCanvas = canvasRef.current!
      // Clear canvas
      ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height)

      // Body
      ctx.fillStyle = bodyColor
      ctx.beginPath()
      ctx.roundRect(150, 150, 100, 120, 10)
      ctx.fill()

      // Head
      ctx.fillStyle = bodyColor
      ctx.beginPath()
      ctx.roundRect(160, 90, 80, 70, 15)
      ctx.fill()

      // Eyes
      ctx.fillStyle = eyeColor
      ctx.beginPath()
      ctx.arc(180, 120, eyeSize, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(220, 120, eyeSize, 0, Math.PI * 2)
      ctx.fill()

      // Antenna
      ctx.strokeStyle = accentColor
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(200, 90)
      ctx.lineTo(200, 70)
      ctx.stroke()

      ctx.fillStyle = accentColor
      ctx.beginPath()
      ctx.arc(200, 65, 5, 0, Math.PI * 2)
      ctx.fill()

      // Arms (rotating)
      ctx.strokeStyle = accentColor
      ctx.lineWidth = 10

      // Left arm
      ctx.save()
      ctx.translate(150, 180)
      ctx.rotate(-Math.PI / 4 + Math.sin(armAngle) * 0.2)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(-40, 30)
      ctx.stroke()
      ctx.restore()

      // Right arm
      ctx.save()
      ctx.translate(250, 180)
      ctx.rotate(Math.PI / 4 - Math.sin(armAngle) * 0.2)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(40, 30)
      ctx.stroke()
      ctx.restore()

      // Legs
      ctx.fillStyle = accentColor
      ctx.fillRect(170, 270, 20, 40)
      ctx.fillRect(210, 270, 20, 40)

      // Highlight
      ctx.fillStyle = highlightColor
      ctx.beginPath()
      ctx.roundRect(170, 160, 60, 20, 5)
      ctx.fill()

      // Update animation variables
      armAngle += 0.05

      if (growing) {
        eyeSize += 0.1
        if (eyeSize >= 8) growing = false
      } else {
        eyeSize -= 0.1
        if (eyeSize <= 5) growing = true
      }

      requestAnimationFrame(drawRobot)
    }

    drawRobot()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <canvas ref={canvasRef} width="400" height="400" className="relative z-10"></canvas>
    </div>
  )
}
