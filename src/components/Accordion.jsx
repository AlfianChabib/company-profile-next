import { Collapse } from "react-collapse";
import { SlArrowDown } from "react-icons/sl";

export default function Accordion({ open, toggle, title, desc }) {
  return (
    <div className="w-full">
      <div
        className="history-anim2 bg-white py-4 px-8 border-t border-b-gray-300 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <h2 className="text-xl text-gray-800">{title}</h2>
        <div
          className={`${
            open ? "rotate-180" : ""
          } transition-all ease-in-out duration-500 text-gray-600`}
        >
          <SlArrowDown />
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="py-4 px-8">{desc}</div>
      </Collapse>
    </div>
  );
}
