import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Errors = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage("/emoji.png");
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AnimatePresence
        initial={false}
        exit={false}
        transition={{
          duration: 2000,
          ease: "linear",
        }}
      >
        <div
          className="text-center text-3xl font-bold text-red bg-white rounded-lg"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          Мы пока что разрабатываем эту страницу
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Errors;