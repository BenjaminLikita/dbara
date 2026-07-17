import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn(className, "max-w-[80%] mx-auto")}>{children}</div>;
};

export default Container;
