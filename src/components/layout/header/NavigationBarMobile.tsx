// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavCategories from "./NavCategories";

// Icons & Constants
import { Menu } from "lucide-react";
import { NavigationBarLinks } from "@/app/constants";

const NavigationBarMobile = () => {
  const t = useTranslations("Layout.NavigationBar");
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            size={"xs"}
            aria-label="Menu"
            className="text-base font-normal"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only" />
          </SheetHeader>

          <ul className="flex flex-col gap-4 px-4 mt-10">
            {NavigationBarLinks.map((link) => (
              <li key={link.labelKey} className="border-b pb-4 last:border-0">
                {link.labelKey === "categories" ? (
                  <NavCategories layout="mobile" />
                ) : (
                  <Button
                    variant={"link"}
                    size={"sm"}
                    className="text-base font-normal p-0  pr-4"
                  >
                    {t(`links.${link.labelKey}`)}
                  </Button>
                )}
              </li>
            ))}
          </ul>

          <SheetFooter>
            <Button variant={"outline"}>{t("auth.signUp")}</Button>
            <Button>{t("auth.signIn")}</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationBarMobile;
