"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
        className="text-2xl font-bold text-gray-800"
      >
        Loading iPhone 16 Pro Max...
      </motion.h1>
    </motion.div>
  );
}
