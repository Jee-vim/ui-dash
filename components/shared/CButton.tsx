import Link from "next/link";
import styles from "@/styles/component/button.module.css";
import { cn } from "@/lib/utils";

export default function CButton({ title, href,newWindow }: any) {
  return href ? (
    <Link href={href} target={newWindow ? "_blank" : "_self"} className={cn(styles.container, styles.default)}>
      {title}
    </Link>
  ) : (
    <button className={cn(styles.container, styles.default)}>{title}</button>
  );
}
