import { Package, RefreshCcw, ShieldCheck, Truck } from "lucide-react";
import { NavbarLinks, Stat } from "../types";

export const NavigationBarLinks: NavbarLinks[] = [
  {
    labelKey: "home",
    href: "/",
  },
  {
    labelKey: "books",
    href: "/",
  },
  {
    labelKey: "categories",
    href: "/",
  },
  {
    labelKey: "releases",
    href: "/",
  },
  {
    labelKey: "about",
    href: "/",
  },
];

export const CategoriesPlaceholder: string[] = [
  "Fantasia",
  "Romance",
  "Suspense",
  "Ficção Científica",
  "Horror",
  "História",
];

export const StatsArray: Stat[] = [
  {
    titleKey: "shipping.title",
    descriptionKey: "shipping.description",
    icon: Truck,
  },
  {
    titleKey: "secure.title",
    descriptionKey: "secure.description",
    icon: ShieldCheck,
  },
  {
    titleKey: "packaging.title",
    descriptionKey: "packaging.description",
    icon: Package,
  },
  {
    titleKey: "returns.title",
    descriptionKey: "returns.description",
    icon: RefreshCcw,
  },
];
