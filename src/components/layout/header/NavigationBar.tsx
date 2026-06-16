// Next.js & Next-intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import NavIcons from "./NavIcons";
import NavCategories from "./NavCategories";

// Constants
import { NavigationBarLinks } from "@/constants";

const NavigationBar = () => {
  const t = useTranslations("Layout.NavigationBar.links");
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <nav className="relative section-container flex justify-between items-center py-4 lg:py-6">
        <Link
          href={"/"}
          className="group relative text-xl font-bold tracking-widest uppercase transition-opacity duration-200 hover:opacity-70"
        >
          Página
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
        </Link>

        <ul className="hidden lg:flex items-center gap-4">
          {NavigationBarLinks.map((link) => (
            <li key={link.labelKey}>
              {link.labelKey === "categories" ? (
                <NavCategories layout="desktop" />
              ) : (
                <Link
                  href={link.href}
                  className="group relative inline-flex items-center px-3 py-1.5 text-sm font-normal text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {t(link.labelKey)}
                  <span className="absolute bottom-0 left-3 right-3 h-px scale-x-0 bg-foreground transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <NavIcons />
      </nav>
    </header>
  );
};

export { NavigationBar };
