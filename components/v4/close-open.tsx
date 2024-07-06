import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

export default function CloseOpen({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="transition-all"
    >
      {isOpen ? <HiMenuAlt3 size={22} /> : <HiMenuAlt2 size={22} />}
    </button>
  );
}
