import CloseOpen from "./close-open";

export default function Navbar({ isOpen, setIsOpen }: ISidebar) {
  return (
    <div className="main-navbar">
      <CloseOpen isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
