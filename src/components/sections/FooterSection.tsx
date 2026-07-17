import { Dot } from "@/components/Dot";
import { EmailForm } from "@/components/EmailForm";
import { socialLinks } from "@/lib/dbara";
import { cn } from "@/lib/utils";
import Container from "../Container";
import { footerData } from "@/lib/footer";

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden rounded-t-xl bg-(image:--bg-hero) text-[#cdd9e4] font-sora"
    >
      <Container className="max-w-[90%]! md:max-w-[70%]!">
        <Dot small className="top-12.5 left-[8%]" />
        <Dot className="top-22.5 right-[6%]" />
        <Dot small className="bottom-30 left-[14%]" />

        <div className="flex items-center flex-col md:flex-row justify-between gap-7.5 px-0 py-10 md:py-25 pb-12.5">
          <div className="text-center md:text-left w-full">
            <h2 className="mb-1 md:mb-2.5 text-[1.5rem] text-white md:text-[2.4rem] font-semibold">
              Subscribe Our Newsletter
            </h2>
            <p className="text-[0.7rem] md:text-[0.8rem] text-[#8fa3b8]">
              We&apos;ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <EmailForm className="min-w-full md:min-w-95" />
        </div>

        <div className="grid gap-10 border-t border-white/8 py-10 pb-12.5 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2.5 font-heading text-[1.35rem] font-bold tracking-wide text-white"
            >
              <p className="text-xs">icon</p>
              DBARA
            </a>
            <p className="max-w-[70%] md:max-w-70 text-xs text-white/70 font-medium">
              We understand the ever-growing threat landscape of the digital
              world, and we built Dbara to meet it head on.
            </p>
          </div>

          {footerData.map(({ items, title }) => (
            <div className="space-y-2">
              <h5 className="font-semibold text-[1.05rem] text-white">
                {title}
              </h5>
              <ul className="list-none space-y-1">
                {items.map(({ name, href, icon: Icon }) => (
                  <li key={name} className="">
                    {href ? (
                      <a
                        href={href}
                        className={cn(
                          "text-sm font-medium hover:text-accent-teal text-[#8fa3b8] transition-colors flex items-center gap-2",
                        )}
                      >
                        <div>{Icon && <Icon size={16} color="#3ad6c4" />}</div>
                        {name}
                      </a>
                    ) : (
                      <span
                        className={cn(
                          "text-sm font-medium hover:text-accent-teal text-[#8fa3b8] transition-colors flex items-center gap-2",
                        )}
                      >
                        <div>{Icon && <Icon size={16} color="#3ad6c4" />}</div>
                        {name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/8 py-7.5 pb-12.5 text-[0.88rem] text-[#7e93a8] md:flex-row">
          <p className="text-xs md:text-sm">
            Copyright © 2026 DBARA. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white bg-white/8 hover:bg-accent-teal hover:text-gray-800 transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
