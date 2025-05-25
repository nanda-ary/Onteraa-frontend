import Image from "next/image";
import { ONCounter } from "@/components/ui/OnCounter"


export default function ContentSection() {
  return (
    <section className="py-16 md:py-10  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/video-gradient-shape.svg')" }}>
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
        <h2 className="font-grotesk relative z-10 max-w-xl text-4xl  font-medium lg:text-5xl">
          Crafted with quality and creativity.
        </h2>

          <p className="font-grotesk mt-4 text-lg font-semibold">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
        </div>
       
        <div className="grid gap-6 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
           
              <Image
                src="/video-thumbs.webp"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={0}
              />
              <Image
                src="/video-thumbs.webp"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
   
          </div>

          <main className="font-grotesk">
      <ONCounter
        items={[
          { end: 30, suffix: "Days", label: "Average Saved / Week" },
          { end: 20, suffix: "m", label: "Worldwide Clients" },
          { end: 280, suffix: "++", label: "Joined UMKM" },
          { end: 300, suffix: "++", label: "BUMDES (Badan Usaha Milik Desa)" },
        ]}
      />
    </main>

        </div>
      </div>
    </section>
  );
}
