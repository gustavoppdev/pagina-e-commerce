// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// Next-intl
import { useTranslations } from "next-intl";

// Constants
import { CategoriesPlaceholder } from "@/constants/index";

type Props = {
  layout: "desktop" | "mobile";
};

const NavCategories = ({ layout }: Props) => {
  const t = useTranslations("Layout.NavigationBar.links");
  return layout === "desktop" ? (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-normal text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground transition-colors duration-200 px-3">
            {t("categories")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 w-[320px] gap-1 p-3">
              {CategoriesPlaceholder.map((category) => (
                <NavigationMenuLink
                  key={category}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-150 cursor-pointer"
                >
                  {category}
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ) : (
    <Accordion type="single" collapsible defaultValue="categories">
      <AccordionItem value="categories">
        <AccordionTrigger className="text-base font-normal my-0 py-0 font-sans">
          {t("categories")}
        </AccordionTrigger>
        <AccordionContent className="pt-4 h-auto">
          <ul className="flex flex-col gap-2">
            {CategoriesPlaceholder.map((category) => (
              <li key={category}>
                <Button variant={"link"} size={"sm"} className="font-normal">
                  {category}
                </Button>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default NavCategories;
