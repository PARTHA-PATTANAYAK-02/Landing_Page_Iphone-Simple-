"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ColorSelector() {
  const colors = [
    {
      name: "Midnight Black",
      slug: "black",
      bg: "bg-black",
      text: "text-white",
    },
    {
      name: "Starlight Silver",
      slug: "silver",
      bg: "bg-gray-200",
      text: "text-black",
    },
    {
      name: "Sunset Gold",
      slug: "gold",
      bg: "bg-yellow-300",
      text: "text-black",
    },
  ];

  return (
    <section className="py-16 bg-white px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Pick Your Style</h2>
      <p className="text-gray-600 mb-8">
        Choose from the available color options
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {colors.map((color, index) => (
          <motion.div
            key={color.slug}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={`/product/${color.slug}`}
              className={`px-6 py-3 rounded-full ${color.bg} ${color.text} shadow-md hover:opacity-90 transition`}
            >
              {color.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
