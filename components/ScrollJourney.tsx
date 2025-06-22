"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ScrollJourney() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const cameraY = useTransform(scrollYProgress, [0.2, 0.4], ["100%", "0%"]);
  const batteryY = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const chipY = useTransform(scrollYProgress, [0.6, 0.8], ["100%", "0%"]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const features = [
    {
      title: "Pro Camera System",
      description:
        "The most advanced iPhone camera system ever. Stunning low-light performance. Macro photography. Cinematic mode now in 4K Dolby Vision.",
      image: "/images/camera.jpg",
      y: cameraY,
    },
    {
      title: "All-Day Battery Life",
      description:
        "Up to 29 hours of video playback. The longest battery life ever in an iPhone.",
      image: "/images/battery.jpg",
      y: batteryY,
    },
    {
      title: "A17 Pro Chip",
      description:
        "The most powerful chip ever in a smartphone. 5-core GPU. 16-core Neural Engine.",
      image: "/images/chip.jpg",
      y: chipY,
    },
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section
        style={{ opacity: sectionOpacity }}
        className="h-screen bg-black flex justify-center items-center sticky top-0"
      >
        <motion.div className="relative w-full h-full" style={{ scale }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          >
            <source src="/images/iphone-spin.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <div>
              <motion.h1
                className="text-5xl md:text-8xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                iPhone 16 Pro Max
              </motion.h1>
              <motion.p
                className="text-xl md:text-3xl max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                A magical new way to interact with iPhone.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <motion.section
          key={feature.title}
          className="h-screen bg-black relative flex items-center justify-center"
          style={{ y: feature.y }}
        >
          {/* Image container with priority loading */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              priority={index === 0} // Only prioritize first image
              quality={80}
              className="object-cover opacity-70"
              unoptimized={process.env.NODE_ENV !== "production"} // Only for development
            />
          </div>

          <motion.div
            className="relative z-10 text-white text-center max-w-4xl px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {feature.title}
            </h2>
            <p className="text-xl md:text-2xl">{feature.description}</p>
          </motion.div>
        </motion.section>
      ))}

      {/* Final CTA */}
      <section className="h-screen bg-black flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to experience the future?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg font-medium"
            >
              Buy
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-gray-600 text-white rounded-full hover:bg-gray-900 transition text-lg font-medium"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
