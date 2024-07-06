"use client";
import { useEffect, useRef, useState } from "react";

import { useWindowSize } from "@/hooks";
import { cn } from "@/lib/utils";
import styles from "@/styles/component/sidebar.module.css";
import CloseOpen from "./close-open";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
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
    <div className="relative w-fit" ref={refOutside}>
      <CloseOpen isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={cn(styles.sidebarWithOpenClose, {
          [styles.sidebarWithOpenCloseActive]: !isOpen,
        })}
      >
        <CloseOpen isOpen={isOpen} setIsOpen={setIsOpen} />
        sidebar
      </div>
    </div>
  );
}
