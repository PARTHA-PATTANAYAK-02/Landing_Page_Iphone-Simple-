"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="mb-8"
      >
        <Image
          src="/images/apple-logo.png"
          alt="Apple Logo"
          width={80}
          height={80}
          className="text-white"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-lg"
      >
        iPhone 16 Pro Max
      </motion.p>
    </motion.div>
  );
}
