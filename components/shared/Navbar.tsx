export default function Navbar({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={`main-navbar ${className}`}>{children}</div>;
}
