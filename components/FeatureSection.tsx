"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FeatureSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section id="features" ref={ref} className="py-32 bg-black text-white px-6">
      <motion.div
        style={{ scale, opacity, y }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Pro. Beyond.
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          iPhone 16 Pro Max takes what you love about iPhone to the nth degree.
          With an even more advanced display, camera system, and A17 Pro chip —
          this is the most pro iPhone we've ever created.
        </p>
      </motion.div>
    </section>
  );
}
