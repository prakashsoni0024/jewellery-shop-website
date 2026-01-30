"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JewellersUnifiedCalculator() {
  // Live prices
  const [gold24K, setGold24K] = useState(null);
  const [gold22K, setGold22K] = useState(null);
  const [gold20K, setGold20K] = useState(null);
  const [gold18K, setGold18K] = useState(null);
  const [silver, setSilver] = useState(null);
  const [time, setTime] = useState("");

  // Common Inputs
  const [weight, setWeight] = useState(1);
  const [gst, setGst] = useState(3);

  // Owner mode Inputs
  const [useLivePrice, setUseLivePrice] = useState(true);
  const [gold24Price, setGold24Price] = useState(null);
  const [gold22Price, setGold22Price] = useState(null);
  const [gold20Price, setGold20Price] = useState(null);
  const [gold18Price, setGold18Price] = useState(null);
  const [silverPrice, setSilverPrice] = useState(null);

  // Customer mode Inputs
  const [metal, setMetal] = useState("24K");
  const [includeGst, setIncludeGst] = useState(true);

  const [totalCost, setTotalCost] = useState(0);

  const currentRate =
    metal === "24K"
      ? useLivePrice
        ? gold24K || 0
        : gold24Price || 0
      : metal === "22K"
        ? useLivePrice
          ? gold22K || 0
          : gold22Price || 0
        : metal === "20K"
          ? useLivePrice
            ? gold20K || 0
            : gold20Price || 0
          : metal === "18K"
            ? useLivePrice
              ? gold18K || 0
              : gold18Price || 0
            : metal === "Silver"
              ? useLivePrice
                ? silver || 0
                : silverPrice || 0
              : 0;
  const rate = currentRate;

  // Fetch live prices from backend
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get("https://jewellery-backend-1.onrender.com/api/live-prices");
        // const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/live-prices`);
        const g24 = Number(res.data.gold["24k"]) || 0;

        setGold24K(res.data.gold["24k"]);
        setGold22K(res.data.gold["22k"]);
        setGold20K(g24 * (20 / 24));
        setGold18K(g24 * (18 / 24));
        setSilver(res.data.silver.price);

        setGold24Price(res.data.gold["24k"]);
        setGold22Price(res.data.gold["22k"]);
        setGold20Price(g24 * (20 / 24));
        setGold18Price(g24 * (18 / 24));
        setSilverPrice(res.data.silver.price);

        const updated = new Date(
          res.data.updatedAt * 1000,
        ).toLocaleTimeString();
        setTime(updated);
      } catch (err) {
        console.error("Error fetching live prices", err);
      }
    };

    if (useLivePrice) fetchPrices();
  }, [useLivePrice]);

  useEffect(() => {
    const metalValue = weight * rate;
    const makingCharges = metalValue * 0.15; // 15%

    const base = metalValue + makingCharges;

    let total = base;
    if (includeGst) {
      total += (base * gst) / 100;
    }

    setTotalCost(total.toFixed(2));
  }, [weight, rate, gst, includeGst]);

  return (
    <section className="md:max-w-6xl  mx-auto p-6 bg-white rounded-3xl shadow-xl space-y-6">
      <h2 className="text-3xl md:text-4xl text-center font-serif text-gray-900">
        💎Indra Jewellers Calculator
      </h2>

        <div className="space-y-4">
          {/* Live Price Toggle */}
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl shadow-sm">
            <span className="text-gray-800 font-medium">Use Live Price</span>
            <input
              type="checkbox"
              checked={useLivePrice}
              onChange={() => setUseLivePrice(!useLivePrice)}
              className="w-5 h-5 accent-yellow-500"
            />
          </div>

          {/* Metal Selection */}
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
            <span className="text-gray-800 font-medium">Metal</span>
            <select
              value={metal}
              onChange={(e) => setMetal(e.target.value)}
              className="w-32 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
            >
              <option value="24K">Gold 24K</option>
              <option value="22K">Gold 22K</option>
              <option value="20K">Gold 20K</option>
              <option value="18K">Gold 18K</option>
              <option value="Silver">Silver</option>
            </select>
          </div>

          {/* Manual Prices (only if live price off) */}
          {!useLivePrice && (
            <div className="space-y-2">
              {metal === "24K" && (
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
                  <span className="text-gray-800 font-medium">
                    Gold 24K (₹/g)
                  </span>
                  <input
                    type="number"
                    value={gold24Price || ""}
                    onChange={(e) => setGold24Price(parseFloat(e.target.value))}
                    className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              )}
              {metal === "22K" && (
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
                  <span className="text-gray-800 font-medium">
                    Gold 22K (₹/g)
                  </span>
                  <input
                    type="number"
                    value={gold22Price || ""}
                    onChange={(e) => setGold22Price(parseFloat(e.target.value))}
                    className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              )}
              {metal === "20K" && (
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
                  <span className="text-gray-800 font-medium">
                    Gold 20K (₹/g)
                  </span>
                  <input
                    type="number"
                    value={gold20Price || ""}
                    onChange={(e) => setGold20Price(parseFloat(e.target.value))}
                    className="w-24 text-black p-1 rounded border"
                  />
                </div>
              )}

              {metal === "18K" && (
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
                  <span className="text-gray-800 font-medium">
                    Gold 18K (₹/g)
                  </span>
                  <input
                    type="number"
                    value={gold18Price || ""}
                    onChange={(e) => setGold18Price(parseFloat(e.target.value))}
                    className="w-24 text-black p-1 rounded border"
                  />
                </div>
              )}

              {metal === "Silver" && (
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
                  <span className="text-gray-800 font-medium">
                    Silver (₹/g)
                  </span>
                  <input
                    type="number"
                    value={silverPrice || ""}
                    onChange={(e) => setSilverPrice(parseFloat(e.target.value))}
                    className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              )}
            </div>
          )}

          {/* Weight, Making Charges, GST */}
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
              <span className="text-gray-800 font-medium">Weight (g)</span>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm text-sm">
              <span className="text-gray-700">Making Charges (15%)</span>
              <span className="font-semibold text-gray-900">
                ₹{(weight * rate * 0.15).toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
              <span className="text-gray-800 font-medium">
                Include GST ({gst}%)
              </span>
              <input
                type="checkbox"
                checked={includeGst}
                onChange={() => setIncludeGst(!includeGst)}
                className="w-5 h-5 accent-yellow-500"
              />
            </div>
          </div>
        </div>

      {/* TOTAL */}
      <div className="bg-yellow-500 text-black p-4 rounded-2xl flex justify-between font-bold text-lg shadow-lg">
        <span>Total Cost (₹)</span>
        <span>{totalCost}</span>
      </div>

      {/* Live price info */}
      {useLivePrice && (
        <p className="text-xs text-center text-gray-500 opacity-70">
          Live price updated at {time} • 24K: ₹{gold24K?.toFixed(2)} | 22K: ₹
          {gold22K?.toFixed(2)} | Silver: ₹{silver?.toFixed(2)}
        </p>
      )}

      <p className="text-xs text-center text-gray-400 mt-2">
        *Prices are India benchmark rates. Final jewellery cost may vary.
      </p>
    </section>
  );
}
