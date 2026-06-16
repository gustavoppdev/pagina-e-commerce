import { AppHref } from "@/i18n/navigation";

type TranslationKey = string;

export type NavbarLinks = {
  labelKey: TranslationKey;
  href: AppHref;
};
