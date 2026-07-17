import { AnimatedCounter } from "@/components/AnimatedCounter";
import { partners } from "@/lib/dbara";
import { cn } from "@/lib/utils";

export function TrustSection() {
  return (
    <section className="w-full lg:max-w-[75%] mx-auto">
      <div className="relative z-10 rounded-lg bg-white/30 p-20 my-20 shadow-xl">
        <div className="flex flex-wrap flex-col md:flex-row justify-center gap-y-4 gap-10 border-b border-(--line-soft-dark) pb-8 text-left md:text-center lg:justify-between lg:text-left">
          <h3 className="max-w-65 text-3xl font-sora font-semibold flex-2">
            Build for all sites
            <br />
            &amp; platform
          </h3>
          <p className="text-sm text-text-muted flex-2 font-medium font-sora">
            Lorem ipsum dolor sit amet, consectetuer aenean. commodo ligula eget
            dolor aenean massa sociis natoque adipiscing penatibus.
          </p>
          <div className="w-full shrink-0 text-center lg:w-auto lg:text-right flex-1 hidden md:block">
            <div className="font-heading text-[2.6rem] font-extrabold text-accent-teal">
              <AnimatedCounter
                target={270}
                className="text-primary font-bold"
              />
              +
            </div>
            <div className="text-[0.9rem] text-text-muted">Trusted Company</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 pt-[30px] lg:justify-between">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={cn(
                "flex items-center gap-2.5 font-heading text-[1.15rem] font-bold opacity-75 grayscale-[0.4] transition-all hover:opacity-100 hover:grayscale-0",
                partner.colorClass,
              )}
            >
              <p>icon</p>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
