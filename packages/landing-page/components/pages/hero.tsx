import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroHeader } from "@/config/contents"

export default function HeroHeader() {
  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold lg:text-4xl">
            {heroHeader.header}
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
            {heroHeader.subheader}
          </h2>
        </div>
        <Link
          href="https://qlock.lemonsqueezy.com/checkout/buy/8ce7560d-30b2-432a-8209-3db4173fb2ad"
          target="_blank"
          className={`w-[15rem] ${cn(buttonVariants({ size: "lg" }))}`}
        >
          Get Early Access Edition
        </Link>
      </div>
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={heroHeader.image}
            width={500}
            height={500}
            alt="Header image"
            className="rounded-lg shadow-lg lg:rounded-xl lg:shadow-xl"
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}
