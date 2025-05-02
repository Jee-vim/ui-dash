"use client";
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";
import styles from "@/styles/component/layout.module.css";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

type LayoutContextType = {
  on: boolean;
  toggle: () => void;
  isNavbar: boolean;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

const Root = ({
  children,
  isNavbar = false,
}: {
  children: React.ReactNode;
  isNavbar?: boolean;
}) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <LayoutContext.Provider value={{ on, toggle, isNavbar }}>
      <div className={styles.main_wrapper}>{children}</div>
    </LayoutContext.Provider>
  );
};

const Trigger = () => {
  const { on, toggle } = useLayout();
  return (
    <button type="button" onClick={toggle} className="transition-all">
      {on ? <HiMenuAlt3 size={22} /> : <HiMenuAlt2 size={22} />}
    </button>
  );
};

const Content = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isNavbar } = useLayout();
  return (
    <div
      className={cn(className, {
        [styles.content]: !isNavbar,
        "h-dvh": !isNavbar,
        "w-full h-dvh overflow-hidden": isNavbar,
      })}
    >
      {children}
    </div>
  );
};

const ContentWithNavbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-[calc(100vh-var(--h-navbar))]",
        styles.content,
        className,
      )}
    >
      {children}
    </div>
  );
};

const Sidebar = ({
  className,
  height,
  children,
  isFullHide = false,
}: {
  className?: string;
  height?: string;
  children?: React.ReactNode;
  isFullHide?: boolean;
}) => {
  const { on } = useLayout();
  return (
    <div
      className={cn(
        "min-w-[var(--w-sidebar)] md:w-[240px] lg:min-w-[280px] transition-all duration-300 bg-dark-500 p-3",
        height ? height : "h-dvh ",
        on &&
        !isFullHide &&
        "md:w-[var(--h-navbar)] lg:min-w-[var(--h-navbar)]",
        !on &&
        isFullHide && [
          "absolute -translate-x-full left-0 top-0 z-[-1]",
          "md:translate-x-0 md:relative md:z-auto",
          "md:w-0 md:min-w-0 md:opacity-100",
          "opacity-0 overflow-hidden p-0",
        ],
        className,
      )}
    >
      {children}
    </div>
  );
};

const Navbar = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(styles.main_navbar, className)}> {children}</div>;
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("Layout components must be used within Layout.Root");
  }
  return context;
};

export const Layout = {
  Root,
  Trigger,
  Sidebar,
  Navbar,
  Content,
  ContentWithNavbar,
};
