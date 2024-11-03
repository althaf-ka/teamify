import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SliderSkeletonProps {
  count: number;
  labelClassName?: string;
  showLabel?: boolean;
}

export const CategorySliderSkeleton = ({
  count,
  labelClassName,
  showLabel = false,
}: SliderSkeletonProps) => {
  const skeletonItems = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="space-y-2">
      {showLabel ? (
        <div className="px-7">
          <Skeleton
            className={cn("bg-themeGray/20 h-5 w-20", labelClassName)}
          />
        </div>
      ) : null}
      <div className="flex space-x-2.5 overflow-hidden px-7">
        {skeletonItems.map((item) => (
          <div className="flex-shrink-0" key={item}>
            <Skeleton className="bg-themeGray/20 flex h-[35px] w-[100px] items-center gap-3 rounded-2xl px-4 py-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
