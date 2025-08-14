"use client";

import React, { useState } from "react";
import curtainImg from "@/assets/images/curtain.jpg";
import { motion } from "motion/react";

export default function Curtain() {
  const [visible, setVisible] = useState(true);
  const delay = 3.5; //animation delay
  return (
    <>
      {visible && (
        <div className="flex overflow-hidden absolute top-0 bottom-0 left-0 right-0 z-[999]">
          {" "}
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: [-1000, 0, -1000] }}
            transition={{
              duration: 8,
              delay: delay,
              times: [0, 0.3, 1],
              ease: ["easeOut", "easeIn"],
            }}
            className="w-1/2 min-h-screen bg-cover"
            style={{ backgroundImage: `url(${curtainImg.src})` }}
          ></motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: [1000, 0, 1000] }}
            transition={{
              duration: 8,
              delay: delay,
              times: [0, 0.3, 1],
              ease: ["easeOut", "easeIn"],
            }}
            onAnimationComplete={() => setVisible(false)}
            className="w-1/2 min-h-screen bg-cover"
            style={{ backgroundImage: `url(${curtainImg.src})` }}
          ></motion.div>
        </div>
      )}
    </>
  );
}
