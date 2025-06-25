import Image from 'next/image';
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import LangSelect from "./lang-select";
import { Dictionary } from "@/lib/dictionaries";
import LocalizedLink from "./localized-link";
import GitHubIcon from './ui/icons/brands';

export const NAVLINKS = [
  {
    title: "documentation",
    href: `/docs${page_routes[0].href}`,
    absolute: true,
  },
  {
    title: "blog",
    href: "/blog",
  },
  {
    title: "application",
    href: "#",
  }
  // {
  //   title: "community",
  //   href: "https://github.com/nisabmohd/Aria-Docs/discussions",
  // },
];

export function Navbar({ dict }: { dict: Dictionary }) {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar dict={dict} />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu dict={dict} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search dict={dict} />
            <div className="flex ml-2.5 sm:ml-0">
              <LangSelect />
              <Link
                href="https://github.com/yongzhangf"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GitHubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <LocalizedLink href="/" className="flex items-center gap-2.5">
      <Image src="/public/logo/logo-t-128.png" width={24} height={24} className="w-6 h-6 text-muted-foreground" alt="" />
      <h2 className="text-md font-bold font-code">Yong`s Site</h2>
    </LocalizedLink>
  );
}

export function NavMenu({
  isSheet = false,
  dict,
}: {
  isSheet?: boolean;
  dict: Dictionary;
}) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <LocalizedLink
            key={item.title + item.href}
            className="flex items-center gap-1 text-stone-800 dark:text-stone-300/85"
            activeClassName="!text-red-600 dark:font-medium font-semibold"
            href={item.href}
            absolute={item.absolute}
          >
            {dict.navbar.links[item.title as keyof typeof dict.navbar.links]}
          </LocalizedLink>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
