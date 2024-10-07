import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface GlassSheetProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
  triggerClass?: string;
}

function GlassSheet({
  children,
  trigger,
  className,
  triggerClass,
}: GlassSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn(triggerClass)}>
        {trigger}
      </SheetTrigger>
      <SheetContent
        className={cn(
          "backdrop--blur__safari bg-themeGray border-themeGray bg-opacity-20 bg-clip-padding backdrop-blur-3xl backdrop-filter",
          className,
        )}
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}

export default GlassSheet;
