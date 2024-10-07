import { cn } from "@/lib/utils";

interface BackdropProps {
  children: React.ReactNode;
  className?: string;
  container?: string;
}

function BackdropGradient({ children, className, container }: BackdropProps) {
  return (
    <div className={cn("relative flex w-full flex-col", container)}>
      <div
        className={cn("radial--blur absolute mx-10 rounded-[50%]", className)}
      />
      {children}
    </div>
  );
}

export default BackdropGradient;
