// Next-Intl
import { useTranslations } from "next-intl";

// Utils & Constants

import { cn } from "@/lib/utils";
import { StatsArray } from "@/constants";

const Stats = () => {
  const t = useTranslations("Sections.Stats");
  return (
    <section className="section-container py-20 lg:py-30 border-y">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {StatsArray.map((stat) => {
          const Icon = stat.icon;

          return (
            <li
              key={stat.titleKey}
              className="flex flex-col gap-4 items-center text-center text-balance"
            >
              <Icon className="size-10" strokeWidth={1} />

              <h2 className="font-medium font-sans">{t(stat.titleKey)}</h2>

              <p
                className={cn(
                  "text-muted-foreground leading-relaxed max-w-3xs mx-auto",
                  stat.titleKey === "shipping.title" && "max-w-60",
                )}
              >
                {t(stat.descriptionKey)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Stats;
