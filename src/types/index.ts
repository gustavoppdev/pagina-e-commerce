import { AppHref } from "@/i18n/navigation";
import { LucideProps } from "lucide-react";

import { ForwardRefExoticComponent, RefAttributes } from "react";

type TranslationKey = string;

export type NavbarLinks = {
  labelKey: TranslationKey;
  href: AppHref;
};

export type Stat = {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
