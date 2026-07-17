import { cn } from "@/lib/utils";

type LinkArrowProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function LinkArrow({
  href = "#",
  children,
  className,
  light,
}: LinkArrowProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 border-b border-current pb-0.5 text-[0.92rem] font-semibold transition-all duration-200 hover:gap-[11px]",
        light ? "text-white" : "text-text-dark",
        className,
      )}
    >
      {children}
      <p>icon</p>
    </a>
  );
}
