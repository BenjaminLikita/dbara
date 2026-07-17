import { Button } from "@/components/ui/button";
import { pricingFeatures, pricingPlans } from "@/lib/dbara";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="pb-30 font-sora px-4">
      <h2 className="mx-auto my-4.5 mb-15 max-w-170 text-[2rem] md:text-[2.7rem] text-center font-medium">
        Invest Once, Reap Benefits Forever
      </h2>

      <div className="flex flex-wrap justify-center gap-5 mx-auto max-w-300">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "rounded-lg border border-transparent lg:w-80 bg-[#f3f3f3] p-[42px_36px] transition-all duration-300 shadow-[0_24px_50px_-30px_rgba(20,40,70,0.3)] hover:border-accent-teal",
              plan.popular &&
                "border border-accent-teal shadow-none hover:shadow-[0_24px_50px_-30px_rgba(20,40,70,0.3)]",
            )}
          >
            <div className="mb-3.5 flex items-center gap-3">
              <h3 className="text-[1.5rem] font-semibold">{plan.name}</h3>
              {plan.popular && (
                <span className="bg-[#dbf0ed] text-[#06b59c] rounded-full px-2 py-1 text-sm font-medium">
                  Popular
                </span>
              )}
            </div>
            <p className="min-h-12 text-xs font-medium text-text-muted">
              {plan.description}
            </p>
            <div className="mb-4 flex items-baseline gap- text-[3rem] font-semibold">
              <sub className="text-[1.4rem] font-bold">$</sub>
              {plan.price}{" "}
              <small className="text-[1rem] font-medium">/ month</small>
            </div>
            <Button
              variant="secondary"
              asChild
              size="lg"
              className="mb-7.5 hover:shadow shadow-[#4edc909b]"
            >
              <a href="#">Get Started</a>
            </Button>
            <div className="mb-3.5 text-[0.9rem] font-semibold text-text-dark">
              Features :
            </div>
            <ul className="list-none">
              {pricingFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 py-0.5 text-xs font-medium text-text-dark"
                >
                  <Check color="#1beacd" size={18} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
