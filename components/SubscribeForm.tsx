"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = (e: React.FormEvent) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) setError("Enter a valid email");
    else {
      setError("");
      alert(`Thanks for subscribing, ${email}!`);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-white px-6 flex flex-col items-center">
      <h3 className="text-2xl mb-4">Stay in the loop</h3>
      <form onSubmit={validate} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="you@example.com"
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Subscribe
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </section>
  );
}
