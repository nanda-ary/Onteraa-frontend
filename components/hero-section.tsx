import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section  className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/banner-gradient-shape.svg')" }}>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6">
              <div className="max-w-4xl text-center">
                <h1 className="font-grotesk mt-8 max-w-4xl text-balance text-5xl font-medium md:text-6xl xl:text-7xl">
                  A Smart Platform to Help Run Your Business Automatically
                </h1>
                <p className="font-grotesk mt-8 max-w-4xl text-pretty text-xl font-semibold">
                 From ideas to execution, ONTERAA uses powerful AI to guide your decisions, manage operations, and grow your business with less effort.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Try it Now</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-12xl">
            <div className="flex flex-col items-center md:flex-row">
             
              <div className="relative py-6 md:w-[calc(100%)]">
                <div className="relative w-full overflow-hidden bg-background py-6">
                  <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-background to-transparent z-10" />

                  <InfiniteSlider speed={40} speedOnHover={20} gap={112}>
                    <div className="flex">
                      <img
                        className="h-5 dark:invert"
                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                        alt="Nvidia Logo"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-4 dark:invert"
                        src="https://html.tailus.io/blocks/customers/column.svg"
                        alt="Column Logo"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-4 dark:invert"
                        src="https://html.tailus.io/blocks/customers/github.svg"
                        alt="GitHub Logo"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-5 dark:invert"
                        src="https://html.tailus.io/blocks/customers/nike.svg"
                        alt="Nike Logo"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-5 dark:invert"
                        src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                        alt="Lemon Squeezy Logo"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-4 dark:invert"
                        src="https://html.tailus.io/blocks/customers/laravel.svg"
                        alt="Laravel Logo"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-7 dark:invert"
                        src="https://html.tailus.io/blocks/customers/lilly.svg"
                        alt="Lilly Logo"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="h-6 dark:invert"
                        src="https://html.tailus.io/blocks/customers/openai.svg"
                        alt="OpenAI Logo"
                      />
                    </div>
                  </InfiniteSlider>
                </div>


                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>

             <div className="flex flex-col items-center md:flex-row">
             
              <div className="font-grotesk relative py-6 md:w-[calc(100%)]">
                <InfiniteSlider speedOnHover={20} speed={90} gap={20}>
  {[
    "NVIDIA",
    "COLUMN",
    "GITHUB",
    "NIKE",
    "LEMON SQUEEZY",
    "LARAVEL",
    "LILLY",
    "OPENAI",
    "LEMON SQUEEZY",
    "LARAVEL",
    "LILLY",
    "OPENAI"
  ].map((brand, index) => (
    <div key={index} className="flex">
      <span
        className="mx-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-primary hover:text-white cursor-default"
      >
        {brand}
      </span>
    </div>
  ))}
</InfiniteSlider>


                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
