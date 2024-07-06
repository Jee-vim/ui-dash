import { MdKeyboardArrowLeft } from "react-icons/md";
import { cn } from "@/lib/utils";

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
      className={cn("absolute top-3 bg-dark-700 p-3 ", {
        "right-0 rounded-l-lg ": isOpen,
        "left-0 rounded-r-lg": !isOpen,
      })}
    >
      <MdKeyboardArrowLeft
        className={`${isOpen && "rotate-180"} transition-all`}
      />
    </button>
  );
}
