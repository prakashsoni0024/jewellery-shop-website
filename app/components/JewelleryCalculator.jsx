"use client";
import { useEffect, useState } from "react";
import axios from "axios";


export default function JewellersUnifiedCalculator() {
  const [mode, setMode] = useState("owner"); // "owner" or "customer"

  // Live prices
  const [gold24K, setGold24K] = useState(null);
  const [gold22K, setGold22K] = useState(null);
  const [silver, setSilver] = useState(null);
  const [time, setTime] = useState("");

  // Common Inputs
  const [weight, setWeight] = useState(1);
  const [gst, setGst] = useState(3);

  // Owner mode Inputs
  const [useLivePrice, setUseLivePrice] = useState(true);
  const [gold24Price, setGold24Price] = useState(null);
  const [gold22Price, setGold22Price] = useState(null);
  const [silverPrice, setSilverPrice] = useState(null);
  const [makingCharges, setMakingCharges] = useState(0);

  // Customer mode Inputs
  const [metal, setMetal] = useState("24K");
  const [includeGst, setIncludeGst] = useState(true);

  const [totalCost, setTotalCost] = useState(0);

  // Fetch live prices from backend
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get("https://jewellery-backend-1.onrender.com/api/live-prices");
        setGold24K(res.data.gold["24k"]);
        setGold22K(res.data.gold["22k"]);
        setSilver(res.data.silver.price);

        setGold24Price(res.data.gold["24k"]);
        setGold22Price(res.data.gold["22k"]);
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

  // Calculate total cost
  useEffect(() => {
    if (mode === "owner") {
      let rate = 0;

      // Owner me bhi metal select hoga
      if (metal === "24K")
        rate = useLivePrice ? gold24K || 0 : gold24Price || 0;
      if (metal === "22K")
        rate = useLivePrice ? gold22K || 0 : gold22Price || 0;
      if (metal === "Silver")
        rate = useLivePrice ? silver || 0 : silverPrice || 0;

      const base = weight * rate + weight * makingCharges;
      const totalWithGst = base + (base * gst) / 100;
      setTotalCost(totalWithGst.toFixed(2));
    } else if (mode === "customer") {
      let rate = 0;
      if (metal === "24K") rate = gold24K || 0;
      if (metal === "22K") rate = gold22K || 0;
      if (metal === "Silver") rate = silver || 0;

      let total = weight * rate;
      if (includeGst) total += (total * gst) / 100;

      setTotalCost(total.toFixed(2));
    }
  }, [
    mode,
    weight,
    gold24Price,
    gold22Price,
    silverPrice,
    makingCharges,
    gst,
    gold24K,
    gold22K,
    silver,
    metal,
    includeGst,
    useLivePrice,
  ]);

  return (
    <section className="md:max-w-6xl  mx-auto p-6 bg-white rounded-3xl shadow-xl space-y-6">
      <h2 className="text-3xl md:text-4xl text-center font-serif text-gray-900">
        💎Indra Jewellers Calculator
      </h2>

      {/* MODE toggle */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {[ "customer", "owner"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-6 py-2 font-medium uppercase rounded-full transition-all duration-300
              ${
                mode === m
                  ? "bg-black text-yellow-500 hover:bg-yellow-500 hover:text-black shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:border-yellow-500 hover:text-yellow-600 border border-gray-300"
              }`}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      {/* OWNER FORM */}
     {mode === "owner" && (
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
        <option value="Silver">Silver</option>
      </select>
    </div>

   {/* Manual Prices (only if live price off) */}
{!useLivePrice && (
  <div className="space-y-2">
    {metal === "24K" && (
      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
        <span className="text-gray-800 font-medium">Gold 24K (₹/g)</span>
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
        <span className="text-gray-800 font-medium">Gold 22K (₹/g)</span>
        <input
          type="number"
          value={gold22Price || ""}
          onChange={(e) => setGold22Price(parseFloat(e.target.value))}
          className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    )}
    {metal === "Silver" && (
      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
        <span className="text-gray-800 font-medium">Silver (₹/g)</span>
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

      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
        <span className="text-gray-800 font-medium">Making Charges (₹/g)</span>
        <input
          type="number"
          value={makingCharges}
          onChange={(e) => setMakingCharges(parseFloat(e.target.value))}
          className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
        <span className="text-gray-800 font-medium">GST (%)</span>
        <input
          type="number"
          value={gst}
          onChange={(e) => setGst(parseFloat(e.target.value))}
          className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </div>
  </div>
)}

      {/* CUSTOMER FORM */}
      {mode === "customer" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
            <span className="text-gray-800 font-medium">Metal</span>
            <select
              value={metal}
              onChange={(e) => setMetal(e.target.value)}
              className="w-32 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
            >
              <option value="24K">Gold 24K</option>
              <option value="22K">Gold 22K</option>
              <option value="Silver">Silver</option>
            </select>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
            <span className="text-gray-800 font-medium">Weight (g)</span>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-24 text-black p-1 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400"
            />
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
      )}

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
