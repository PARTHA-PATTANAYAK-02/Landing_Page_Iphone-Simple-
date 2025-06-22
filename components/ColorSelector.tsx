"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const colors = [
    {
      name: "Space Black",
      slug: "black",
      bg: "bg-gray-900",
      border: "border-gray-700",
      text: "text-white",
      image: "/images/black.png",
      price: "From $999",
    },
    {
      name: "Natural",
      slug: "natural",
      bg: "bg-gray-400",
      border: "border-gray-300",
      text: "text-gray-200",
      image: "/images/Natural.png",
      price: "From $999",
    },
    {
      name: "White",
      slug: "white",
      bg: "bg-white",
      border: "border-yellow-300",
      text: "text-gray-200",
      image: "/images/white.png",
      price: "From $1099",
    },
    {
      name: "Desert",
      slug: "desert",
      bg: "bg-amber-200",
      border: "border-purple-700",
      text: "text-white",
      image: "/images/desert.png",
      price: "From $1199",
    },
  ];

  const handleColorClick = (slug: string) => {
    setIsTransitioning(true);
    setSelectedColor(slug);
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const closeProductView = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedColor(null);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-24 bg-black text-white px-6 text-center relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Finish. <span className="text-gray-400">Pick your favorite.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Color matched aluminum edges and back glass with a textured matte
          finish.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {colors.map((color) => (
            <motion.div
              key={color.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleColorClick(color.slug)}
            >
              <div
                className={`w-32 h-32 rounded-full ${color.bg} ${color.border} border-2 flex items-center justify-center shadow-lg mb-4`}
              >
                <span className="sr-only">{color.name}</span>
              </div>
              <span className={`text-lg ${color.text}`}>{color.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product View Modal */}
      <AnimatePresence>
        {selectedColor && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={closeProductView}
            />

            {/* Product View */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: isTransitioning ? "100%" : "0%" }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="fixed bottom-0 left-0 right-0 bg-gray-100 text-black rounded-t-3xl z-50 p-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                  {colors.find((c) => c.slug === selectedColor)?.name}
                </h3>
                <button
                  onClick={closeProductView}
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1"
                >
                  <div className="relative h-96 bg-white rounded-xl shadow-lg flex items-center justify-center p-8">
                    <Image
                      src={
                        colors.find((c) => c.slug === selectedColor)?.image ||
                        ""
                      }
                      alt={
                        colors.find((c) => c.slug === selectedColor)?.name || ""
                      }
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>

                <div className="flex-1 text-left">
                  <h4 className="text-3xl font-bold mb-4">iPhone 16 Pro Max</h4>
                  <p className="text-xl text-gray-600 mb-6">
                    {colors.find((c) => c.slug === selectedColor)?.price}
                  </p>

                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-2">Features</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>A17 Pro chip with 6-core GPU</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Pro camera system with 48MP Main camera</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>Dynamic Island for alerts and activities</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        <span>All-day battery life</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/product/${selectedColor}`}
                      className="px-6 py-3 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition font-medium"
                    >
                      View Details
                    </Link>
                    <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition font-medium">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
