import { Dot } from "@/components/Dot";
import { EmailForm } from "@/components/EmailForm";
import { Navbar } from "@/components/Navbar";
import Container from "../Container";

// const floatIcons = [
//   {
//     id: "icon-browser-scan",
//     className: "top-[-6px] left-[18%] [animation-delay:0.2s]",
//   },
//   {
//     id: "icon-chip-shield",
//     className: "top-[8%] right-[6%] size-16 [animation-delay:1.1s]",
//   },
//   {
//     id: "icon-monitor-shield",
//     className: "bottom-[14%] left-0 [animation-delay:0.6s]",
//   },
//   {
//     id: "icon-card-shield",
//     className: "bottom-0 right-[12%] [animation-delay:1.6s]",
//   },
// ] as const;

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-b-lg bg-(image:--bg-hero) pb-30 md:pb-42.5">
      <Container>
        <Dot className="top-30 left-[6%]" />
        <Dot small className="top-60 left-[48%]" />
        <Dot className="top-20 right-[8%]" />
        <Dot small className="top-95 right-[4%]" />
        <Dot small className="top-107.5 left-[3%]" />

        <Navbar />

        <div>
          <div
            id="home"
            className="relative z-5 grid items-center justify-center gap-12.5 pt-17.5 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div>
              <h1 className="text-5xl font-semibold text-white md:text-[3.4rem] lg:text-[4.4rem] text-center lg:text-justify font-sora">
                Your Cyber
                <br />
                Guardians
              </h1>
            </div>
            <div>
              <p className="mb-7 text-[1.02rem] text-faint text-center lg:text-justify font-medium">
                At Cytrix we understand the ever-growing threat landscape of the
                digital world. Our mission is to provide comprehensive cyber
                security services that protect your digital frontiers.
              </p>
              <EmailForm />
            </div>
          </div>

          <div className="relative z-5 mt-16 flex items-center justify-between gap-6 pt-8.5 text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex" aria-hidden>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=92&h=92&fit=crop&crop=faces"
                  alt=""
                  className="-ml-3.5 size-12 rounded-full border-3 border-primary object-cover first:ml-0"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=92&h=92&fit=crop&crop=faces"
                  alt=""
                  className="-ml-3.5 size-12 rounded-full border-3 border-primary object-cover"
                />
                <div className="-ml-3.5 flex size-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/60 backdrop-blur-none font-heading text-[0.85rem] font-bold text-navy-900">
                  8k+
                </div>
              </div>
              <p className="m-0 text-[0.92rem] font-medium text-[#cdd9e4]">
                Active client with
                <br />
                positive reviews
              </p>
            </div>

            <div className="flex items-center justify-center gap-3.5 lg:justify-end">
              <p>icon</p>
              <p className="m-0 text-[0.92rem] font-medium text-[#cdd9e4]">
                <strong className="text-base bg-(image:--accent-gradient) bg-clip-text text-transparent">
                  2026
                </strong>{" "}
                The world best
                <br />
                Cyber Security Services
              </p>
            </div>
          </div>

          <div className="grid place-items-center -mt-52">
            <img src="/hero.webp" alt="hero-image" />
          </div>
        </div>

        {/* <a
          href="#about"
          className="absolute -bottom-14.5 left-1/2 z-20 flex size-29.5 -translate-x-1/2 items-center justify-center rounded-full bg-(--accent-gradient) shadow-[0_16px_40px_-12px_rgba(61,220,151,0.55)]"
          aria-label="Get started"
        >
          <svg
            className="absolute inset-0 animate-spin-slow"
            viewBox="0 0 118 118"
            aria-hidden
          >
            <defs>
              <path
                id="circlePath"
                d="M 59,59 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
              />
            </defs>
            <text
              fontFamily="Poppins, sans-serif"
              fontSize="9.5"
              fontWeight="700"
              fill="#16321f"
              letterSpacing="2"
            >
              <textPath href="#circlePath">
                GET STARTED • GET STARTED • GET STARTED •{" "}
              </textPath>
            </text>
          </svg>
          <div className="relative z-2 flex size-11.5 items-center justify-center rounded-full bg-navy-800">
            <p>icon</p>
          </div>
        </a> */}
      </Container>
    </div>
  );
}
