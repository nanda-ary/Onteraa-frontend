"use client"
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const features = [
  {
    icon: <Zap className="size-6" aria-hidden />,
    title: "Customizable",
    text: "Extensive customization options, allowing you to tailor every aspect to meet your specific needs.",
  },
  {
    icon: <Settings2 className="size-6" aria-hidden />,
    title: "You have full control",
    text: "From design elements to functionality, you have complete control to create a unique and personalized experience.",
  },
  {
    icon: <Sparkles className="size-6" aria-hidden />,
    title: "Powered By AI",
    text: "Elements to functionality, you have complete control to create a unique experience.",
  },
];

export default function Features() {

   useEffect(() => {
      AOS.init({
        duration: 800,
        once: false,
      });
    }, []);

  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mt-4 text-lg font-semibold">
           FEATURE
          </p>
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Create your business with Ai
          </h2>
        </div>
         <div className="mx-auto mt-8 grid max-w-screen-xl grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-3 md:mt-16">
      {features.map((feature, index) => (
        <Card
          key={index}
          className={`group transition-all duration-500 ease-in-out rounded-xl border border-lime-400 bg-neutral-900 p-6 text-white shadow hover:shadow-lg ${
            index % 2 === 0 ? "hover:-translate-y-2" : "hover:translate-y-2"
          }`}
          data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
          data-aos-duration="1000"
        >
          <CardHeader className="pb-3">
            <CardDecorator>
              {feature.icon}
            </CardDecorator>
            <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
          </CardHeader>

          <CardContent>
            <p className="mt-3 text-sm text-neutral-300">{feature.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
