"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import JewellersCalculator from "../components/JewelleryCalculator";

export default function CalculatorPage() {
  // ====== LIVE PRICES ======
  const [gold24K, setGold24K] = useState(0);
  const [gold22K, setGold22K] = useState(0);
  const [silver, setSilver] = useState(0);
  const [time, setTime] = useState("");

  // ====== FETCH LIVE PRICES ======
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/live-prices`);
        setGold24K(Number(res.data.gold["24k"]) || 0);
        setGold22K(Number(res.data.gold["22k"]) || 0);
        setSilver(Number(res.data.silver.price) || 0);
        setTime(
          new Date(res.data.updatedAt * 1000).toLocaleTimeString("en-IN"),
        );
      } catch (err) {
        console.error("Price fetch error", err);
      }
    };
    fetchPrices();
  }, []);

  return (
    <main className="bg-[#faf9f7] min-h-screen">
      {/* HERO / TITLE */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900">
          Jewellers <span className="text-yellow-600">Valuation</span>
        </h1>
        <p className="mt-3 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Calculate the exact value of your precious metals, making buying and
          selling easier.
        </p>
      </section>

      {/* CALCULATOR CONTENT */}
      <div className="max-w-5xl mx-auto space-y-10 px-4">
        {/* LIVE PRICES */}
        <section>
          <h2 className="flex items-center gap-2 text-xl font-serif text-gray-800 font-semibold mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            Live Gold & Silver Price
          </h2>
          <div className="grid grid-cols-1 text-gray-700 sm:grid-cols-3 gap-4">
            <PriceCard title="Gold 24K" price={gold24K * 10} />
            <PriceCard title="Gold 22K" price={gold22K * 10} />
            <PriceCard title="Silver" price={silver * 10} />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Updated at {time} • Prices per 10 gram • International Bullion
            Market
          </p>
        </section>

        {/* PREMIUM JEWELLERY CALCULATOR */}
        <section className="bg-[#faf9f7] py-7">
          <JewellersCalculator />
        </section>
      </div>

      {/* LUXURY DIVIDER */}
      <section className="bg-[#faf9f7] py-7">
        <div className="mt-10 flex items-center justify-center gap-6 text-gray-400">
          <span className="h-px w-24 bg-gray-300"></span>
          <span className="text-xl text-yellow-500">✦</span>
          <p className="font-serif italic text-sm md:text-sm text-gray-600 tracking-wide text-center max-w-2xl">
            Trust us to be part of your precious moments and to deliver
            jewellery that you’ll cherish forever.
          </p>
          <span className="text-xl text-yellow-500">✦</span>
          <span className="h-px w-24 bg-gray-300"></span>
        </div>
      </section>
    </main>
  );
}

/* ================= HELPERS ================= */
const PriceCard = ({ title, price }) => (
  <div className="bg-white border rounded-2xl p-4 shadow-sm">
    <p className="text-sm text-gray-500">{title} / 10g</p>
    <p className="text-lg font-semibold mt-1">₹ {price.toFixed(2)}</p>
  </div>
);

const Row = ({ label, children }) => (
  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
    <span>{label}</span>
    {children}
  </div>
);


export const metadata = {
  title: "Jewellery Valuation Calculator",
  description:
    "Accurate gold and silver jewellery valuation calculator with live price, GST and making charges in Jabalpur.",
};
