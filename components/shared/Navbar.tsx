import styles from "@/styles/component/layout.module.css";
export default function Navbar({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={`${styles.main_navbar} ${className}`}>{children}</div>;
}
