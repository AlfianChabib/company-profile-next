"use client";
import { useState } from "react";
import { history } from "@/content";
import Heading from "./Heading";
import HistoryAnim from "./HistoryAnim";
import HistoryModal from "./HistoryModal";

export default function History() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="container flex flex-col relative w-full" id="history">
      <div className="flex my-2 lg:pl-20 md:pl-12 pl-8">
        <Heading text="History" />
      </div>
      <div className="flex w-full h-full items-center justify-end relative gap-4">
        <div className="flex flex-col flex-1 w-full h-full items-center justify-center">
          {history.map((item, index) => (
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
