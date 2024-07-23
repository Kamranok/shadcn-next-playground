import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import Home from "@/components/Home"
import ShadcnFullUiDemo from "@/components/ShadcnFullUiDemo"

export default function IndexPage() {
  return (
    <>
      {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
          <Button
            variant={"secondary"}
            className="animate-in zoom-in duration-500"
          >
            Secondary
          </Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section> */}

      <ShadcnFullUiDemo />

      {/* Net Ninja course components below */}
      {/* <section className="container gap-6 pb-8 pt-6 md:py-10">
        <Home />
      </section> */}
    </>
  )
}
