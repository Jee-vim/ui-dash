"use client";
import { useEffect, useState } from "react";

export function useClickOutside(
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ref: React.RefObject<any>,
) {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}

export function useEsc(callback: () => void) {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        callback();
      }
    });
  }, []);
}

export function useScrollX() {
  const handleWheel = (e: WheelEvent) => {
    if (e.altKey) {
      e.preventDefault();
      const container = e.currentTarget as HTMLElement;
      container.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const container = document.querySelector(".canban-container");
    if (container) {
      const wheelHandler = (e: any) => handleWheel(e);
      container?.addEventListener("wheel", wheelHandler);
      return () => {
        container?.removeEventListener("wheel", wheelHandler);
      };
    }
  }, []);
}

export const useCheckPosition = (
  setPosition: (position: "top" | "bottom") => void,
  REF: React.RefObject<HTMLDivElement>,
  isActive: boolean,
) => {
  const check = () => {
    const RECT = REF.current?.getBoundingClientRect();
    if (!RECT) return;

    const SPACE_ABOVE = RECT.top;
    const SPACE_BELOW = window.innerHeight - RECT.bottom;
    const HEIGHT = 200;

    if (SPACE_BELOW >= HEIGHT || SPACE_BELOW >= SPACE_ABOVE) {
      setPosition("bottom");
    } else {
      setPosition("top");
    }
  };

  useEffect(() => {
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [isActive]);
};

export const useDisableScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
