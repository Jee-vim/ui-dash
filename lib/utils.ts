import { LIST_LAYOUT } from "./constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getPagination(currentPath: string) {
  const currentIndex = LIST_LAYOUT.findIndex(
    (item) => item.href === currentPath,
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prevIndex =
    (currentIndex - 1 + LIST_LAYOUT.length) % LIST_LAYOUT.length;
  const nextIndex = (currentIndex + 1) % LIST_LAYOUT.length;

  const prevItem = LIST_LAYOUT[prevIndex];
  const nextItem = LIST_LAYOUT[nextIndex];

  return {
    prev: {
      title: prevItem.title,
      href: prevItem.href,
    },
    next: {
      title: nextItem.title,
      href: nextItem.href,
    },
  };
}
