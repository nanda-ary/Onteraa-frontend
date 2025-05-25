"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ONButton } from "@/components/ui/BPButton"
import Link from "next/link";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function Features() {

   useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="bg-zinc-50 pt-16 md:pt-32 dark:bg-transparent [box-shadow:0_12px_20px_rgba(0,0,0,0.2)]">
  <div className="mx-auto max-w-6xl px-6 flex flex-col lg:flex-row items-center gap-12">
    <div className="flex w-full gap-4 justify-start md:justify-center">
      <div className="w-1/2" data-aos="fade-right">
        <Image
          src="/h1-about-left-1.webp"
          alt="Large feature"
          width={314}
          height={408}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <Image
          src="/h1-about-left-2.webp"
          alt="Small feature 1"
          width={230}
          height={160}
          className="rounded-xl object-cover w-full h-auto"
          data-aos="fade-down"
        />
        <Image
          src="/h1-about-left-3.webp"
          alt="Small feature 2"
          width={230}
          height={270}
          className="rounded-xl object-cover w-full h-auto"
          data-aos="fade-top"
        />
      </div>
    </div>
    <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
      <p className="font-grotesk text-lg font-semibold">WELCOME</p>
      <h2 className="font-grotesk mt-4 text-balance text-4xl font-semibold lg:text-5xl">
        Easy ways to accelerate digitalization, and tools to build your business.
      </h2>
      <p className="font-grotesk mt-4 text-lg font-semibold">
        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
      </p>
      <button className="bp-btn bp-btn--primary">Get Started</button>
    </div>
  </div>
  <div>
               
                <div className="relative py-6 md:w-[calc(100%)]">
  <div className="font-tertiary relative w-full overflow-hidden">
    <InfiniteSlider speed={40} speedOnHover={20} gap={0}>
      {["AGENT AI", "SMART AI", "ONERP"].map((text, idx) => (
        <div key={idx} className="m-0 p-0">
          <span className="text-headlines text-headlines__item dark:text-white">
            {text}
          </span>
        </div>
      ))}
    </InfiniteSlider>
  </div>
</div>

              </div>
</section>


    
  );
}
