// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Assets
import { heroImg } from "@/assets";

const Hero = () => {
  const t = useTranslations("Sections.Hero");

  return (
    <section className="relative bg-[#FEFEFE]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 section-container items-center py-20 lg:py-0">
        {/* Content */}
        <div className="flex flex-col gap-10 items-center text-center md:items-start md:text-start max-w-md lg:max-w-136 mx-auto text-pretty">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            {t("subtitle")}
          </span>

          <h1 className="font-semibold tracking-tight leading-[1.05] text-5xl md:text-6xl xl:text-7xl">
            {t("title")}
          </h1>

          <span aria-hidden={true} className="h-px w-10 bg-foreground block" />

          <p className="max-w-sm lg:max-w-md leading-relaxed text-muted-foreground text-lg">
            {t("description")}
          </p>

          <Button className="h-12 w-fit rounded-none px-8 uppercase tracking-wider">
            {t("button")}
          </Button>
        </div>

        {/* Image */}
        <div className="relative aspect-561/701 max-w-md lg:max-w-none">
          <Image
            src={heroImg}
            placeholder="blur"
            alt=""
            fill
            sizes="(max-width: 640px) calc(100vw - 16px), (max-width: 768px) 448px,(max-width: 1024px) 348px, (max-width: 1280px) 452px, (max-width: 1536px) 540px, 668px"
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
