"use client";
import "./globals.css";
import { ReactNode, useState, useEffect } from "react";
import Loader from "../components/Loader";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {loading ? (
          <Loader />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        )}
      </body>
    </html>
  );
}
