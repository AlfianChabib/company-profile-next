"use client";
import { useEffect, useState } from "react";
import "./button.css";

export default function Button({ text, width, height, theme }) {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setDark(true);
    } else if (!theme) {
      setDark(false);
    }
  }, [theme]);

  return (
    <div
      className={`button border font-semibold transition-all ${
        isDark
          ? "bg-dark text-light border-dark hover:bg-light"
          : "bg-light text-dark border-light hover:bg-ultraDark"
      }`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <p className={`first-text ${isDark ? "text-dark" : "text-light"}`}>
        {text}
      </p>
      <p className={`second-text ${isDark ? "text-light" : "text-dark"}`}>
        {text}
      </p>
    </div>
  );
}
