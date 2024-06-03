/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pP8Xg6qpBMx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gray-950 text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PaletteIcon className="h-6 w-6" />
          <span className="sr-only">Pixel Perfect Design</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Work
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-fullpt-12 md:pt-24 lg:pt-32">
          <div className="container     px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] items-center	mb-8 x-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Pixel Perfect Design
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-300">
                  We are a team of talented graphic designers who specialize in creating visually stunning and impactful
                  designs for businesses of all sizes.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/90 dark:focus-visible:ring-gray-700"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 1"
                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-950/80 p-4 transition-all duration-300 group-hover:bg-gray-950/60">
                <h3 className="text-lg font-semibold">Branding Design</h3>
                <p className="text-gray-400">A comprehensive branding solution for a leading tech startup.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 2"
                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-950/80 p-4 transition-all duration-300 group-hover:bg-gray-950/60">
                <h3 className="text-lg font-semibold">Website Design</h3>
                <p className="text-gray-400">A modern and responsive website design for a fashion brand.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 3"
                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-950/80 p-4 transition-all duration-300 group-hover:bg-gray-950/60">
                <h3 className="text-lg font-semibold">Packaging Design</h3>
                <p className="text-gray-400">
                  A unique and eye-catching packaging design for a premium skincare brand.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 4"
                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-950/80 p-4 transition-all duration-300 group-hover:bg-gray-950/60">
                <h3 className="text-lg font-semibold">Social Media Design</h3>
                <p className="text-gray-400">Visually engaging social media content for a lifestyle brand.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 5"
                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-950/80 p-4 transition-all duration-300 group-hover:bg-gray-950/60">
                <h3 className="text-lg font-semibold">Print Design</h3>
                <p className="text-gray-400">Stunning print materials for a local non-profit organization.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 6"
                className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-950/80 p-4 transition-all duration-300 group-hover:bg-gray-950/60">
                <h3 className="text-lg font-semibold">UI/UX Design</h3>
                <p className="text-gray-400">A user-friendly and visually appealing mobile app design.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container grid max-w-md items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let\'s Bring Your Vision to Life
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of talented designers is ready to collaborate with you and create stunning designs that will
                elevate your brand.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/90 dark:focus-visible:ring-gray-700"
              prefetch={false}
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-400">&copy; 2024 Pixel Perfect Design. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}