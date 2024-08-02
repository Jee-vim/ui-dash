import { cn } from "@/lib/utils";

export default function Sidebar({
  className,
  height,
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={cn(
        "min-w-[var(--w-sidebar)] md:w-[240px] lg:min-w-[280px] transition-all bg-dark-500 p-3",
        className,
        height ? height : "h-dvh ",
      )}
    >
      sidebar
    </div>
  );
}
