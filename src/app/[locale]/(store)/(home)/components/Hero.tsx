// Next.js & Next-Intl
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Assets & Icons
import { heroImg } from "@/assets";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Sections.Hero");

  return (
    <section className="relative  min-h-[calc(100dvh-65px)] lg:min-h-[calc(100dvh-84px)]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 w-full">
        <Image
          src={heroImg}
          alt=""
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-white to-white/15 md:to-transparent md:via-transparent backdrop-blur-[2px] sm:backdrop-blur-none" />

      {/* Content */}
      <div className="grid min-h-[inherit] grid-cols-1 lg:grid-cols-2 items-center section-container ">
        <div className="max-w-md lg:max-w-xl flex flex-col gap-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            {t("subtitle")}
          </p>

          <h1 className="font-semibold tracking-tight leading-[0.92] text-5xl md:text-6xl xl:text-7xl">
            {t("title")}
          </h1>

          <p className="max-w-sm lg:max-w-md leading-relaxed text-black/75">
            {t("description")}
          </p>

          <Button className="h-12 w-fit rounded-none px-8 uppercase tracking-wider">
            {t("button")}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
