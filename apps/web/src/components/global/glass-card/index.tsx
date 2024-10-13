import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

function GlassCard({ children, className }: GlassCardProps) {
  return (
    <Card
      className={cn(
        className,
        "bg-themeGray border-themeGray backdrop--blur__safari backdrop-blur-4xl rounded-2xl bg-opacity-40 bg-clip-padding backdrop-filter",
      )}
    >
      {children}
    </Card>
  );
}

export default GlassCard;
