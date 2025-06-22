"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = (e: React.FormEvent) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-gray-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Stay in the know.
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sign up for updates on availability, events, and more.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 text-green-800 p-4 rounded-lg inline-block"
          >
            Thank you for subscribing!
          </motion.div>
        ) : (
          <motion.form
            onSubmit={validate}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition font-medium"
            >
              Notify Me
            </button>
          </motion.form>
        )}
        {error && (
          <motion.p
            className="text-red-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    </section>
  );
}
