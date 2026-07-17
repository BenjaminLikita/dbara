import { Dot } from "@/components/Dot";
import { Eyebrow } from "@/components/Eyebrow";

export function TestimonialsSection() {
  return (
    <section className="pb-[110px]">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[430px] overflow-hidden rounded-[var(--radius-lg)] bg-text-dark">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&h=860&fit=crop"
            alt="Security analyst reviewing data on a laptop in a server room"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute top-6 left-6 z-[3] flex items-center gap-2.5 rounded-full bg-white/92 py-2.5 pr-[22px] pl-2.5 text-[0.95rem] font-semibold backdrop-blur-sm">
            <span className="flex size-8 items-center justify-center rounded-full bg-accent-indigo">
              <p>icon</p>
            </span>
            Trusted
          </div>
        </div>

        <div>
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="my-[18px] text-[2rem] md:text-[2.6rem]">
            Share Your Thoughts{" "}
            <span className="text-faint">With The World</span>
          </h2>
          <p className="mb-7 max-w-[480px] text-text-muted">
            Our clients tell us what working with Cytrix actually feels like —
            from the first audit call to the moment an incident gets handled
            before it ever reaches their inbox.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[linear-gradient(150deg,var(--color-navy-700),var(--color-navy-950))] p-10 text-white lg:col-start-2">
          <Dot small className="top-6 right-[60px]" />
          <Dot className="top-[60px] right-[18%]" />

          <div
            className="mb-[22px] flex gap-1.5 text-accent-yellow"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <p>icon</p>
            ))}
          </div>

          <div className="mb-[22px] flex items-center gap-3.5">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=104&h=104&fit=crop&crop=faces"
              alt=""
              className="size-[52px] rounded-full object-cover"
            />
            <div>
              <strong className="block text-[1.05rem]">Mellisa J.</strong>
              <span className="text-[0.88rem] text-accent-teal">
                CEO, Rivertech Corp.
              </span>
            </div>
          </div>

          <blockquote className="max-w-[560px] text-[1.02rem] font-normal text-[#cdd9e4] italic">
            &ldquo;Since using Cytrix Cyber Security&apos;s services, I feel
            much more confident in the safety of my personal information online.
            Their team has been incredibly responsive and diligent in addressing
            any security concerns I&apos;ve had. Their expertise and
            professionalism are unmatched. Thank you, Cytrix Cyber Security, for
            keeping me safe in the digital world!&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
