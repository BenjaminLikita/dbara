import { ChevronDown, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/dbara";
import clsx from "clsx";

// function NavLinks({ mobile = false }: { mobile?: boolean }) {
function NavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant={"link"}
          size={"sm"}
          className={clsx("", {
            "bg-white/10": link.label === "Home",
          })}
        >
          <a
            key={link.href}
            href={link.href}
            className={clsx("", {
              "flex gap-1 items-end": "hasChevron" in link && link.hasChevron,
            })}
          >
            {link.label}
            {"hasChevron" in link && link.hasChevron && <ChevronDown />}
          </a>
        </Button>
      ))}
    </>
  );
}

export function Navbar() {
  return (
    <header className="z-30 py-10">
      <div>
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            className="flex items-center gap-2.5 font-heading text-[1.35rem] font-bold tracking-wide text-white"
          >
            <p className="text-xs">icon</p>
            DBARA
          </a>

          <nav className="hidden items-center gap-3 rounded-full border border-white/7 bg-white/4 p-2.5 backdrop-blur-sm lg:flex">
            <NavLinks />
          </nav>

          <div className="hidden items-center gap-5.5 lg:flex">
            <a
              href="#signup"
              className="text-[0.93rem] font-medium text-[#e7edf3] hover:text-white"
            >
              Sign up
            </a>
            <Button asChild>
              <a href="#login">Login</a>
            </Button>
          </div>

          <button
            type="button"
            className="p-2 text-white lg:hidden"
            aria-label="Open menu"
          >
            <MenuIcon className="size-6.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
