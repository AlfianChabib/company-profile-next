"use client";
import { motion } from "framer-motion";

const scaleAnimation = {
  initial: { scale: 0, x: "50%" },
  open: {
    scale: 1,
    x: "0",
    transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1] },
  },
  closed: {
    scale: 0,
    x: "50%",
    transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1] },
  },
};

export default function HistoryModal({ modal, history }) {
  const { active, index } = modal;

  return (
    <motion.div
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      className="modal hidden  md:flex h-[350px] w-[400px] bg-ultraDark text-white absolute overflow-hidden pointer-events-none"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="modal-slider absolute h-full w-full px-4"
      >
        {history.map((item, index) => (
          <div
            key={index}
            className="flex h-[350px] relative items-center justify-center"
          >
            <p className="text-xl leading-10">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
