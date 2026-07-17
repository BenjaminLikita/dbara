import { Button } from "@/components/ui/button";
import { aboutServices } from "@/lib/dbara";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 w-full lg:max-w-[85%] mx-auto px-8">
      <div className="font-sora flex flex-col md:flex-row gap-y-6 justify-between items-start">
        <h1 className=" text-2xl font-semibold flex-4">About Us</h1>
        <div className="flex-5 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold">
            One-Stop Solution for Unmatched Protection
          </h2>
          <p className="mb-7.5 text-text-muted">
            From malware sweeps to firewall configuration, Cytrix brings every
            layer of defence under one roof — monitored around the clock by
            analysts who know what a real threat looks like.
          </p>
          <Button asChild variant="secondary">
            <a href="#services">Read More</a>
          </Button>
        </div>
      </div>

      <div className="my-15 flex gap-10 transition-all duration-700 flex-wrap items-stretch justify-center font-sora">
        {aboutServices.map((service, i) => (
          <div
            key={service.title}
            className={cn(
              "relative isolate flex flex-col justify-between gap-0 group rounded-[34px] w-full lg:w-92.5 p-10 bg-white/80 shadow-[0_24px_48px_-28px_rgba(20,40,70,0.25)] transition-shadow duration-1000 before:absolute before:inset-0 before:-z-10 before:rounded-[34px] before:bg-[linear-gradient(150deg,var(--color-navy-700),var(--color-navy-900))] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
              i === 0 &&
                "bg-[linear-gradient(150deg,var(--color-navy-700),var(--color-navy-900))]",
            )}
          >
            <div>
              <h4
                className={cn(
                  "mb-3 text-xl md:text-3xl font-semibold group-hover:text-white transition-all duration-300",
                  i === 0 && "text-white",
                )}
              >
                {service.title}
              </h4>
              <p
                className={cn(
                  "mb-8.5 font-medium text-sm md:text-base group-hover:text-white/80 text-gray-800 transition-all duration-300",
                  i === 0 && "text-white/80",
                )}
              >
                {service.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div
                className={cn(
                  "flex items-center justify-center rounded-full p-5 bg-primary w-fit border group-hover:border-[#1beacd] group-hover:bg-[#2a4a6982] transition-all duration-300",
                  i === 0 && "bg-[#2a4a6982] border-white/30",
                )}
              >
                <img src={service.icon} alt={service.title} className="w-10" />
              </div>
              <a
                href="/"
                className={cn(
                  "flex items-center gap-3 border-b border-gray-400 group-hover:border-[#1beacd] font-sora font-semibold group-hover:text-[#1beacd] transition-all duration-300",
                  i === 0 && "text-white",
                )}
              >
                Learn More <ChevronRight className="-mr-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
