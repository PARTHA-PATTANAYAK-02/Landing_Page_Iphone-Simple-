"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollJourney() {
  const containerRef = useRef(null);

  useEffect(() => {
    new LocomotiveScroll({
      el: containerRef.current!,
      smooth: true,
      multiplier: 1,
    });
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const cameraY = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "0%"]);
  const batteryY = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const chipY = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "0%"]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div data-scroll-container ref={containerRef} className="relative">
      <motion.section
        style={{ opacity: sectionOpacity }}
        className="h-screen bg-black flex justify-center items-center"
      >
        <motion.div className="relative w-full h-screen overflow-hidden">
          <video
            src="/images/iphone-spin.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Optional overlay content */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                iPhone 16 Pro Max
              </h1>
              <p className="text-lg md:text-2xl">
                A magical new way to experience the future.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/images/camera.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Pro Camera System</h2>
          <p className="text-lg">
            Capture cinema-quality video and DSLR-level photos with the upgraded
            triple-lens system.
          </p>
        </div>
      </section>

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/images/battery.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">All-Day Battery</h2>
          <p className="text-lg">Up to 36 hours of continuous use.</p>
        </div>
      </section>

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/images/chip.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">A17 Pro Chip</h2>
          <p className="text-lg">Unmatched performance and power efficiency.</p>
        </div>
      </section>
    </div>
  );
}
