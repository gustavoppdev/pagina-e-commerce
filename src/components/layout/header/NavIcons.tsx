// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";

// Components
import { Button } from "@/components/ui/button";
import NavigationBarMobile from "./NavigationBarMobile";

// Icons
import { Search, ShoppingBag, User2 } from "lucide-react";
import { useTranslations } from "next-intl";

const NavIcons = () => {
  const t = useTranslations("Layout.NavigationBar.alt");

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"ghost"}
        size={"icon-sm"}
        aria-label={t("search")}
        asChild
      >
        <Link href={"/"}>
          <Search className="size-5" strokeWidth={1.5} />
        </Link>
      </Button>

      <Button
        variant={"ghost"}
        size={"icon-sm"}
        aria-label={t("user")}
        className="hidden lg:flex"
        asChild
      >
        <Link href={"/"}>
          <User2 className="size-5" strokeWidth={1.5} />
        </Link>
      </Button>

      <span
        aria-hidden={true}
        className="bg-foreground/15 h-4 w-px rounded hidden lg:block"
      />

      <Button
        variant={"ghost"}
        size={"icon-sm"}
        aria-label={t("cart")}
        className="relative"
        asChild
      >
        <Link href={"/"}>
          <ShoppingBag className="size-5" strokeWidth={1.5} />
          <span className="absolute top-0 -right-0.5 size-3.5 rounded-full bg-foreground text-white grid place-content-center text-[10px]">
            2
          </span>
        </Link>
      </Button>

      <span
        aria-hidden={true}
        className="bg-foreground/15 h-4 w-px rounded lg:hidden"
      />

      <NavigationBarMobile />
    </div>
  );
};

export default NavIcons;
