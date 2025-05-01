"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getPagination } from "@/lib/utils";

export default function Pagination() {
  const path = usePathname();
  const { prev, next } = getPagination(path);
  return (
    <div className="w-full flex items-center justify-between mt-2">
      <Page title={prev?.title} href={prev?.href} action={"Prev"} />
      <Page title={next?.title} href={next?.href} action={"Next"} />
    </div>
  );
}

export const Page = ({
  title,
  href,
  action,
}: {
  title?: string;
  href?: string;
  action?: any;
}) => {
  return (
    <Link href={href ? href : "/"} className="rounded-lg p-2 bg-dark-300 w-full max-w-40">
      <p className="text-sm text-dark-800">{action}</p>
      <p className="font-bold capitalize">layout {title}</p>
    </Link>
  );
};
