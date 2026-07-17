import { Button } from "@/components/ui/button";
import { Dot } from "@/components/Dot";
import { FaApple } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";

export function AppDownloadSection() {
  return (
    <section className="relative mb-30 overflow-hidden rounded-lg bg-[linear-gradient(150deg,var(--color-navy-700)_0%,var(--color-navy-950)_100%)] p-10 md:p-20 font-sora">
      <Dot className="top-10 left-[5%]" />
      <Dot small className="right-[30%] bottom-12.5" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <h2 className="max-w-130 text-[2rem] text-white md:text-[2.7rem]">
            Download Our Cyber{" "}
            <span className="text-[#5e7793]">Security App</span> Now!
          </h2>
          <p className="my-5.5 text-[#a9bccd]">
            Get real-time alerts, scan results and account controls in your
            pocket. Start your 30-day free trial today.
          </p>
          <div className="flex flex-wra justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl border border-white/18 px-5.5 py-2.5 text-white"
            >
              <FaApple />
              <span className="flex flex-col leading-snug">
                <span className="text-[0.5rem] tracking-[0.06em] text-[#9fb1c2] uppercase">
                  Download on the
                </span>
                <strong className="text-[0.8rem] font-semibold">
                  App Store
                </strong>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl border border-white/18 px-5.5 py-2.5 text-white"
            >
              <BiLogoPlayStore />
              <span className="flex flex-col leading-snug">
                <span className="text-[0.5rem] tracking-[0.06em] text-[#9fb1c2] uppercase">
                  Get it on
                </span>
                <strong className="text-[0.8rem] font-semibold">
                  Google Play
                </strong>
              </span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-5 w-60 rotate-[8deg] lg:mt-0 hidden md:block">
          <div className="rounded-[34px] border-8 border-[#1f2f42] bg-[linear-gradient(160deg,#15263b,#0a1422)] px-5 py-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="mx-auto mb-6.5 h-1.5 w-15 rounded bg-[#1f2f42]" />
            <p>icon</p>
            <h5 className="mb-3.5 text-center font-heading text-[1rem] text-white">
              Secure Your Data
              <br />
              Secure Your Privacy
            </h5>
            <p className="mb-5.5 text-center text-[0.7rem] leading-snug text-[#7e93a8]">
              Keep your information close and your privacy closer — monitor
              every device from one dashboard.
            </p>
            <Button asChild size="lg" className="py-2.75">
              <a href="#">Start Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
