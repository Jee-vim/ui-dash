"use client";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import styles from "@/styles/component/layout.module.css";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CloseOpen from "../v3/close-open";
import { useWindowSize } from "@/hooks";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const IS_LARGE = width > 1024;

  return (
    <div className="overflow-hidden h-dvh">
      <Navbar className="relative">
        <CloseOpen
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className={cn(`lg:!hidden !rounded-l-none !rounded-r-lg left-0 `, {
            "!w-fit": isOpen,
          })}
        />
      </Navbar>
      <main
        className={cn(
          "relative h-[calc(100vh-var(--h-navbar))]",
          styles.main_wrapper,
        )}
      >
        <Sidebar
          className={cn(`hidden absolute lg:block`, {
            "left-0 !min-w-[200px] !h-[calc(100vh-var(--h-navbar))]": isOpen,
            "left-[-280px]": !isOpen && !IS_LARGE,
            "md:!w-[240px] lg:!min-w-[280px] left-0 !relative !h-[calc(100vh-var(--h-navbar))]":
              IS_LARGE,
          })}
          height="h-[calc(100vh-var(--h-navbar)]"
        />
        <main className={cn("px-2 lg:px-0", styles.main_content_with_navbar)}>
          {children}
        </main>
        <Sidebar
          className="hidden lg:block"
          height="h-[calc(100vh-var(--h-navbar)]"
        />
      </main>
    </div>
  );
}
