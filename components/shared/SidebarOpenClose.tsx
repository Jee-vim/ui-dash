import { useEffect, useRef } from "react";

import { useWindowSize } from "@/hooks";
import { cn } from "@/lib/utils";
import styles from "@/styles/component/sidebar.module.css";

export default function SidebarWithOpenClose({
  isOpen,
  setIsOpen,
  className,
}: ISidebar) {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const refOutside = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && isOpen) {
      const handleClickOutside = (event: any) => {
        if (refOutside.current && !refOutside.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMobile, isOpen]);

  return (
    <div className={cn("relative w-fit", className)} ref={refOutside}>
      <div
        className={cn(styles.sidebarWithOpenClose, {
          [styles.sidebarWithOpenCloseActive]: !isOpen,
        })}
      >
        sidebar
      </div>
    </div>
  );
}
