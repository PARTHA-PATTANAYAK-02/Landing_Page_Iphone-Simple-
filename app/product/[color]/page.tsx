"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const colorData: Record<
  string,
  { title: string; desc: string; image: string }
> = {
  black: {
    title: "Midnight Black - iPhone 16 Pro Max",
    desc: "Sleek and professional. A modern classic.",
    image: "/images/black.png",
  },
  silver: {
    title: "Starlight Silver - iPhone 16 Pro Max",
    desc: "Bright, premium, and bold.",
    image: "/images/silver.png",
  },
  gold: {
    title: "Sunset Gold - iPhone 16 Pro Max",
    desc: "Warm glow with powerful presence.",
    image: "/images/gold.png",
  },
};

export default function ColorPage() {
  const params = useParams();
  const rawColor = params?.color;
  const color = typeof rawColor === "string" ? rawColor : rawColor?.[0];

  const data =
    color && colorData[color] ? colorData[color] : colorData["black"];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl text-gray-400 font-bold mb-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {data.title}
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-6 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {data.desc}
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={300}
          className="rounded-xl object-contain"
        />
      </motion.div>
    </motion.section>
  );
}
