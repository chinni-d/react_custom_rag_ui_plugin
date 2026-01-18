"use client" 

import * as React from "react"
import { motion } from "framer-motion";
 
interface ShiningTextProps {
  text: string;
}

export function ShiningText({text}: ShiningTextProps) {
  return (
    <motion.div
      className="bg-[linear-gradient(110deg,#9ca3af,35%,#fff,50%,#9ca3af,75%,#9ca3af)] bg-[length:200%_100%] bg-clip-text text-sm text-transparent m-0 inline-block"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {text}
    </motion.div>
  );
}
