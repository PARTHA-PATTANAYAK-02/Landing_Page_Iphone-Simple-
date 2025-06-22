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

  return (
    <section ref={ref} className="py-20 bg-gray-50 px-6">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Unmatched Performance</h2>
        <p className="text-gray-600 text-lg">
          Experience blazing speed with the A17 Pro chip, all-day battery, and
          the most advanced camera system ever.
        </p>
      </motion.div>
    </section>
  );
}
