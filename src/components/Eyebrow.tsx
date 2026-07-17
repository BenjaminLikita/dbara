import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function Eyebrow({ children, light, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-heading text-[0.95rem] font-semibold tracking-[0.08em] uppercase",
        'before:block before:h-0.5 before:w-7 before:rounded-sm before:bg-(--accent-gradient) before:content-[""]',
        light ? "text-[#a9c4dd]" : "text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
