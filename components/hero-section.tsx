'use client'
import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ArrowRight, Book, Menu, Rocket, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const menuItems = [
    { name: 'Features', href: '#' },
    { name: 'Solution', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
]

export default function Herosectiontwo() {
    const [menuState, setMenuState] = React.useState(false)

    return (
      <>
        <header>
          <nav
            data-state={menuState && "active"}
            className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
          >
            <div className="m-auto max-w-5xl px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                <div className="flex w-full justify-between lg:w-auto">
                  <Link
                    href="/"
                    aria-label="home"
                    className="flex items-center space-x-2"
                  >
                    <Logo />
                  </Link>

                  <button
                    onClick={() => setMenuState(!menuState)}
                    aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                  >
                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                  </button>
                </div>

                <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                  <div className="lg:pr-4">
                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                          >
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">
                        <span>Login</span>
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="#">
                        <span>Login</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="overflow-hidden">
          <section>
            <div className="relative pt-24">
              <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                  <Link
                    href="/"
                    className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                  >
                    <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                      Tutor
                    </span>
                    <span className="text-sm">
                      Sign up and start teaching lore
                    </span>
                    <span className="bg-(--color-border) block h-4 w-px"></span>

                    <ArrowRight className="size-4" />
                  </Link>

                  <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:[line-height:1.125]">
                    Tutor link{" "}
                  </h1>
                  <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                    A new way to teach, became a mentor and earn money Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, quia.
                  </p>

                  <div className="mt-8">
                    <Button size="lg" asChild>
                      <Link href="#">
                        <Book className="relative size-4 " />
                        <span className="text-nowrap text-color-red">
                          Start Tutoring
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative mt-16">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="relative mx-auto max-w-6xl overflow-hidden px-4">
                  <Image
                    className="z-2 border-border/25 relative hidden rounded-2xl border dark:block"
                    src="/images/camera.jpg"
                    alt="app screen"
                    width={2796}
                    height={2008}
                  />
                  <Image
                    className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
                    src="/images/camera.jpg"
                    alt="app screen"
                    width={2796}
                    height={2008}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-background relative z-10 pb-16">
            <div className="m-auto max-w-5xl px-6">
              <h2 className="text-center text-lg font-medium">
                Why Choose Tutor Link?
              </h2>
              <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border p-6 shadow-md">
                  <Rocket className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Fast Onboarding
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get started quickly with our easy-to-use platform and start
                    teaching in no time.
                  </p>
                </div>
                <div className="rounded-lg border p-6 shadow-md">
                  <Book className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Comprehensive Resources
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Access a wide range of teaching materials and tools to
                    enhance your sessions.
                  </p>
                </div>
                <div className="rounded-lg border p-6 shadow-md">
                  <ArrowRight className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Flexible Scheduling
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Set your own schedule and teach at your convenience,
                    anytime, anywhere.
                  </p>
                </div>
                <div className="rounded-lg border p-6 shadow-md">
                  <Menu className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Diverse Subjects
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Teach a variety of subjects and share your expertise with
                    eager learners.
                  </p>
                </div>
                <div className="rounded-lg border p-6 shadow-md">
                  <X className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">
                    Secure Payments
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Receive payments securely and on time for your tutoring
                    sessions.
                  </p>
                </div>
                <div className="rounded-lg border p-6 shadow-md">
                  <Image
                    src="/images/support-icon.svg"
                    alt="Support Icon"
                    className="mb-4 h-8 w-8 text-primary"
                    width={32}
                    height={32}
                  />
                  <h3 className="mb-2 text-lg font-semibold">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Our support team is available around the clock to assist you
                    with any issues.
                  </p>
                </div>
              </div>
            </div>
          </section>
            <section className="bg-gray-50 relative z-10 py-16">
              <div className="m-auto max-w-5xl px-6 text-center">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                Trusted By Learners & Educators
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We collaborate with renowned organizations and platforms to empower learning and growth worldwide.
              </p>
                <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
                {[
                { src: "/images/camera.jpg", alt: "University Partner 1", name: "University Partner 1" },
                { src: "/images/camera.jpg", alt: "Online Platform Partner 2", name: "Online Platform Partner 2" },
                { src: "/images/camera.jpg", alt: "Educational Organization Partner 3", name: "Educational Organization Partner 3" },
                { src: "/images/camera.jpg", alt: "Tutoring Service Partner 4", name: "Tutoring Service Partner 4" },
                { src: "/images/camera.jpg", alt: "School District Partner 5", name: "School District Partner 5" },
                { src: "/images/camera.jpg", alt: "Learning App Partner 6", name: "Learning App Partner 6" },
                ].map((partner, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center rounded-lg bg-white/70 backdrop-blur-md shadow-lg p-4 transition-transform duration-300 hover:scale-105"
                  style={{ height: "200px" }}
                >
                  <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${partner.src})` }}
                  aria-label={partner.alt}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-white text-sm font-medium">{partner.name}</span>
                  </div>
                </div>
                ))}
                </div>
                <p className="mt-10 text-md text-gray-500 leading-relaxed">
                These partnerships enable us to connect you with qualified and trusted tutors, ensuring a seamless learning experience.
                </p>
                </div>
              </section>
        </main>
      </>
    );
}
