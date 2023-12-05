"use client";
import { useEffect, useState } from "react";
import { history } from "@/content";
import Heading from "./Heading";
import HistoryAnim from "./HistoryAnim";
import HistoryModal from "./HistoryModal";
import Accordion from "./Accordion";

export default function History() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setMobile(false);
      }
    });
    window.innerWidth <= 768 && setMobile(true);
  }, []);

  return (
    <section
      className="container flex flex-col relative w-full mt-4"
      id="history"
    >
      <div className="flex my-2 lg:pl-20 md:pl-12 pl-8">
        <Heading text="History" />
      </div>
      <div className="flex w-full h-full items-center justify-end relative gap-4">
        <div className="flex flex-col flex-1 w-full h-full items-center justify-center">
          {mobile
            ? history.map((item, index) => (
                <Accordion
                  key={index}
                  open={index === open}
                  title={item.title}
                  desc={item.description}
                  toggle={() => toggle(index)}
                />
              ))
            : history.map((item, index) => (
                <HistoryAnim
                  key={index}
                  item={item}
                  index={index}
                  setModal={setModal}
                />
              ))}
        </div>
        <HistoryModal modal={modal} history={history} />
      </div>
    </section>
  );
}
