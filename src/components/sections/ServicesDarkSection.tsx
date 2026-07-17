import { Dot } from "@/components/Dot";
import { darkServices } from "@/lib/dbara";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

function DarkServiceCard({
  title,
  description,
  icon,
  layout,
}: (typeof darkServices)[number]) {
  return (
    <div
      className={cn(
        "group font-sora flex flex-col justify-between gap-10 md:gap-0 rounded-[40px] border border-white/7 p-[38px_34px] text-white transition-all duration-300 bg-white/6 backdrop-blur-none hover:border-[#1beacd]",
        layout === "big" && "lg:col-span-3 lg:row-span-2",
        layout === "row" && "lg:col-span-3 lg:row-span-1",
        layout === "default" && "lg:col-span-2 lg:row-span-1",
      )}
    >
      <div>
        <h4 className="mb-3.5 text-[1.45rem] font-semibold font-sora">
          {title}
        </h4>
        <p className="max-w-85 text-[0.93rem] text-[#a9bccd]">{description}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center rounded-full p-5 w-fit border border-white/10 group-hover:border-[#1beacd] bg-white/6 backdrop-blur-none transition-all duration-300">
          <img src={icon} alt={title} className="w-10" />
        </div>
        <a
          href="/"
          className="flex items-center gap-3 border-b border-gray-400 group-hover:border-[#1beacd] font-sora font-semibold group-hover:text-[#1beacd] transition-all duration-300"
        >
          Learn More <ChevronRight className="-mr-2" />
        </a>
      </div>
    </div>
  );
}

export function ServicesDarkSection() {
  return (
    <section
      id="services"
      className="relative mb-30 overflow-hidden rounded-none md:rounded-xl bg-[linear-gradient(150deg,var(--color-navy-700)_0%,var(--color-navy-900)_55%,var(--color-navy-950)_100%)] py-20 lg:py-36 px-6 lg:px-20 xl:px-40"
    >
      <Dot className="top-17.5 left-[6%]" />
      <Dot small className="top-35 right-[8%]" />
      <Dot small className="bottom-22.5 left-[4%]" />
      <Dot className="bottom-15 right-[5%]" />

      <h2 className="mx-auto mb-17.5 font-sora text-center font-semibold text-4xl text-md:text-5xl lg:text-6xl text-white">
        Safeguarding Your Cyberspace, <br className="hidden md:block" />
        Securing Your Digital Life
      </h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        {darkServices.map((service) => (
          <DarkServiceCard key={service.title} {...service} />
        ))}
      </div>

      <p className="mt-15 text-center text-[1rem] text-[#cdd9e4]">
        Check out all our services
        <a
          href="/"
          className="text-sm inline-flex ml-3 items-center gap-3 border-b border-gray-400 hover:border-[#1beacd] font-sora font-semibold hover:text-[#1beacd] transition-all duration-300"
        >
          View More <ChevronRight className="-mr-2" />
        </a>
      </p>
    </section>
  );
}
