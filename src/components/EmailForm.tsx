import type { FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type EmailFormProps = {
  className?: string;
  buttonLabel?: string;
};

export function EmailForm({
  className,
  buttonLabel = "Sign Up",
}: EmailFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div
        className={cn(
          "flex items-center rounded-full border border-white/12 bg-white/5 py-1.5 pr-1.5 pl-6",
          className,
        )}
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          className="text-sm md:text-base"
          required
          aria-label="Email address"
        />
        <Button
          variant="secondary"
          type="submit"
          size="sm"
          className="text-xs md:text-[0.95rem] hidden md:block h-auto!"
        >
          {buttonLabel}
        </Button>
      </div>
      <Button
        variant="secondary"
        type="submit"
        className="w-full text-xs md:text-[0.95rem] block md:hidden"
      >
        {buttonLabel}
      </Button>
    </form>
  );
}
