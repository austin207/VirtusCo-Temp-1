import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CountdownTimer } from "@/components/countdown-timer"
import { RobotAnimation } from "@/components/robot-animation"
import { XIcon } from "@/components/icons/x-icon"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            VirtusCo
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#mission">
            Mission
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
                    Bridging the Gap in Robotics Innovation
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    VirtusCo is launching soon. We&apos;re on a mission to connect talent with resources in the world of
                    robotics.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex-1 space-y-2" id="contact">
                    <CountdownTimer targetDate="2025-03-31T00:00:00" />
                    <form className="flex space-x-2">
                      <Input
                        className="max-w-lg flex-1"
                        placeholder="Enter your email"
                        type="email"
                        autoComplete="email"
                      />
                      <Button type="submit">
                        Notify Me
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Sign up to get notified when we launch.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                      <XIcon className="h-4 w-4" />
                      <span className="sr-only">X (formerly Twitter)</span>
                    </Button>
                  </Link>
                  <Link href="https://www.instagram.com/virtuscotech/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/company/virtusco/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:virtusco.tech@gmail.com">
                    <Button size="icon" variant="ghost">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <RobotAnimation />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900" id="about">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About VirtusCo</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  VirtusCo is a pioneering robotics solutions company at the forefront of technological innovation.
                  We&apos;re dedicated to creating advanced robotics systems that solve real-world problems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 shadow-sm">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 7V2" />
                    <path d="M15 7V2" />
                    <path d="M9 12v-1" />
                    <path d="M15 12v-1" />
                    <path d="M12 7v1" />
                    <path d="M19 7h1a2 2 0 0 1 2 2v.5a2 2 0 0 1-2 2h-1" />
                    <path d="M4 7H3a2 2 0 0 0-2 2v.5a2 2 0 0 0 2 2h1" />
                    <path d="M17 17v-1a2 2 0 0 0-2-2h-1" />
                    <path d="M7 17v-1a2 2 0 0 1 2-2h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Pushing the boundaries of what&apos;s possible in robotics technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 shadow-sm">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  >
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Making advanced robotics accessible to those who lack resources.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4 shadow-sm">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Talent Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Nurturing the next generation of robotics engineers and innovators.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="mission">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    At VirtusCo, we believe that talent is universal, but opportunity is not. Our mission is to bridge
                    the gap between those who lack resources and those who have resources to nurture talent in the field
                    of robotics. Through innovative robotic solutions, we&apos;re democratizing access to cutting-edge
                    technology.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-2">
                    Our robotic solutions range from industrial automation and educational platforms to healthcare
                    assistance systems and agricultural technology. We&apos;re committed to developing accessible,
                    affordable, and adaptable robotics that solve real-world problems.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">How We Do It</h3>
                  <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Connecting talented individuals with industry resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Providing accessible robotics education and training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Developing affordable robotics solutions for diverse applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Creating partnerships between industry leaders and emerging talent</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
              <Image
                alt="Advanced Robotics Solutions"
                src="/robotics.jpg" // Ensure the path is correct
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg border"
/>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Robotics Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  VirtusCo develops cutting-edge robotics solutions that solve real-world problems across multiple
                  industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">Industrial Automation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Smart robotic systems that streamline manufacturing processes, increase efficiency, and reduce
                  operational costs.
                </p>
              </div>
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">Educational Robotics</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Accessible robotics kits and curriculum designed to inspire the next generation of engineers and
                  innovators.
                </p>
              </div>
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">Healthcare Assistance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Robotic solutions that enhance patient care, assist medical professionals, and improve healthcare
                  outcomes.
                </p>
              </div>
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">Agricultural Robotics</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Autonomous systems that optimize farming operations, monitor crop health, and increase agricultural
                  productivity.
                </p>
              </div>
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">Custom Solutions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailored robotics development to address unique challenges across various industries and applications.
                </p>
              </div>
              <div className="flex flex-col space-y-2 border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold">Research & Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Collaborative R&D initiatives that push the boundaries of what&apos;s possible in robotics and automation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 VirtusCo. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

