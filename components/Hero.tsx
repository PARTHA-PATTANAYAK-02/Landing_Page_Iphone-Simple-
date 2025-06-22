"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-100"
    >
      <motion.h1 style={{ y }} className="text-5xl font-bold mb-4 text-center">
        iPhone 16 Pro Max
      </motion.h1>
      <p className="text-lg text-gray-600 max-w-xl text-center">
        The future of smartphone technology — powerful, sleek, and innovative.
      </p>
    </section>
  );
}
