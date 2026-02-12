"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

export default function JewellersUnifiedCalculator() {
  /* ================= LIVE PRICES ================= */
  const [gold24K, setGold24K] = useState(0);
  const [gold22K, setGold22K] = useState(0);
  const [gold20K, setGold20K] = useState(0);
  const [gold18K, setGold18K] = useState(0);
  const [silver, setSilver] = useState(0);
  const [time, setTime] = useState("");

  /* ================= COMMON INPUTS ================= */
  const [weight, setWeight] = useState("");
  const [gst, setGst] = useState(3);

  /* ================= MODE ================= */
  const [useLivePrice, setUseLivePrice] = useState(true);
  const [includeGst, setIncludeGst] = useState(true);
  const [metal, setMetal] = useState("24K");
  const [showReceipt, setShowReceipt] = useState(false);

  /* ================= MANUAL PRICES (OWNER MODE) ================= */
  const [manualPrices, setManualPrices] = useState({
    "24K": 0,
    "22K": 0,
    "20K": 0,
    "18K": 0,
    Silver: 0,
  });

  const [totalCost, setTotalCost] = useState("—");

  /* ================= FETCH LIVE PRICES ================= */
  const fetchPrices = async () => {
    try {
      const res = await axios.get(
        "https://jewellery-backend-1.onrender.com/api/live-prices",
      );

      const g24 = Number(res.data.gold["24k"]) || 0;
      const g22 = Number(res.data.gold["22k"]) || 0;
      const sil = Number(res.data.silver.price) || 0;

      setGold24K(g24);
      setGold22K(g22);
      setGold20K((g24 * 20) / 24);
      setGold18K((g24 * 18) / 24);
      setSilver(sil);

      setManualPrices({
        "24K": g24,
        "22K": g22,
        "20K": (g24 * 20) / 24,
        "18K": (g24 * 18) / 24,
        Silver: sil,
      });

      setTime(new Date(res.data.updatedAt * 1000).toLocaleTimeString("en-IN"));
    } catch (err) {
      console.error("Live price fetch failed", err);
    }
  };

  /* ================= AUTO REFRESH ================= */
  useEffect(() => {
    if (!useLivePrice) return;
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, [useLivePrice]);

  /* ================= RATE MAP ================= */
  const liveRates = {
    "24K": gold24K,
    "22K": gold22K,
    "20K": gold20K,
    "18K": gold18K,
    Silver: silver,
  };

  const rate = useLivePrice ? liveRates[metal] || 0 : manualPrices[metal] || 0;

  /* ================= CALCULATION ================= */
  useEffect(() => {
    if (rate <= 0 || weight <= 0) {
      setTotalCost("—");
      return;
    }

    const metalValue = weight * rate;
    const makingCharges = metalValue * 0.15; // FIXED 15%
    const base = metalValue + makingCharges;

    let total = base;
    if (includeGst) {
      total += (base * gst) / 100;
    }

    setTotalCost(total.toLocaleString("en-IN", { maximumFractionDigits: 2 }));
  }, [weight, rate, gst, includeGst, metal]);

  const generateInvoice = () => {
    const doc = new jsPDF();

    // ===== CALCULATIONS =====
    const w = Number(weight) || 0;
    const rateUsed = Number(rate) || 0;
    const metalValue = w * rateUsed;
    const makingCharges = metalValue * 0.15;
    const subTotal = metalValue + makingCharges;
    const gstAmount = includeGst ? (subTotal * gst) / 100 : 0;
    const grandTotal = subTotal + gstAmount;

    let y = 20;

    // ===== HEADER =====
    doc.setFontSize(18);
    doc.text("Indra Jewellers", 105, y, { align: "center" });

    y += 7;
    doc.setFontSize(10);
    doc.text("Jabalpur, Madhya Pradesh", 105, y, { align: "center" });

    y += 6;
    doc.text(
      `Invoice Date: ${new Date().toLocaleDateString("en-IN")}`,
      105,
      y,
      { align: "center" },
    );

    y += 10;
    doc.line(20, y, 190, y);

    // ===== BASIC DETAILS =====
    y += 10;
    doc.setFontSize(12);
    doc.text(`Metal: ${metal}`, 20, y);
    doc.text(`Weight: ${w} g`, 120, y);

    y += 8;
    doc.text(`Rate: Rs. ${rateUsed.toFixed(2)} / g`, 20, y);

    // ===== TABLE HEADER =====
    y += 12;
    doc.setFontSize(11);
    doc.text("Description", 20, y);
    doc.text("Amount (Rs.)", 160, y, { align: "right" });

    y += 3;
    doc.line(20, y, 190, y);

    // ===== TABLE ROWS =====
    y += 8;
    doc.text("Metal Value", 20, y);
    doc.text(metalValue.toFixed(2), 160, y, { align: "right" });

    y += 7;
    doc.text("Making Charges (15%)", 20, y);
    doc.text(makingCharges.toFixed(2), 160, y, { align: "right" });

    if (includeGst) {
      y += 7;
      doc.text(`GST (${gst}%)`, 20, y);
      doc.text(gstAmount.toFixed(2), 160, y, { align: "right" });
    }

    // ===== TOTAL =====
    y += 6;
    doc.line(20, y, 190, y);

    y += 10;
    doc.setFontSize(13);
    doc.text("Grand Total", 20, y);
    doc.text(`Rs. ${grandTotal.toFixed(2)}`, 160, y, { align: "right" });

    // ===== FOOTER =====
    y += 15;
    doc.setFontSize(9);
    doc.text(
      "*This is a computer generated invoice. Final price may vary based on design & purity.",
      20,
      y,
    );

    doc.save("Indra_Jewellers_Invoice.pdf");
  };

  /* ================= UI ================= */
  return (
    <section className="max-w-6xl mx-auto p-6 bg-white text-black rounded-3xl shadow-xl space-y-6">
      <h2 className="text-3xl md:text-4xl text-center font-serif text-gray-900">
        💎 Indra Jewellers Calculator
      </h2>

      {/* Toggle */}
      <Row label="Use Live Price">
        <input
          type="checkbox"
          checked={useLivePrice}
          onChange={() => setUseLivePrice(!useLivePrice)}
          className="w-5 h-5 accent-yellow-500"
        />
      </Row>

      {/* Metal */}
      <Row label="Metal">
        <select
          value={metal}
          onChange={(e) => setMetal(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="24K">Gold 24K</option>
          <option value="22K">Gold 22K</option>
          <option value="20K">Gold 20K</option>
          <option value="18K">Gold 18K</option>
          <option value="Silver">Silver</option>
        </select>
      </Row>

      {/* Manual Price */}
      {!useLivePrice && (
        <Row label={`${metal} Price (₹/g)`}>
          <input
            type="number"
            value={manualPrices[metal] === 0 ? "" : manualPrices[metal]}
            onChange={(e) =>
              setManualPrices({
                ...manualPrices,
                [metal]: Number(e.target.value) || 0,
              })
            }
            className="w-24 border rounded px-2 py-1"
          />
        </Row>
      )}

      {/* Weight */}
      <Row label="Weight (g)">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-24 border rounded px-2 py-1"
        />
      </Row>

      {/* Making Charges */}
      <Row label="Making Charges (15%)">
        <span className="font-semibold text-gray-900">
          ₹{" "}
          {(weight * rate * 0.15).toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </span>
      </Row>

      {/* GST */}
      <Row label={`Include GST (${gst}%)`}>
        <input
          type="checkbox"
          checked={includeGst}
          onChange={() => setIncludeGst(!includeGst)}
          className="w-5 h-5 accent-yellow-500"
        />
      </Row>

      {/* TOTAL */}
      <div className="bg-yellow-500 text-black p-4 rounded-2xl flex justify-between font-bold text-lg">
        <span>Total Cost</span>
        <span>₹ {totalCost}</span>
      </div>

      <button
        onClick={() => setShowReceipt(true)}
        disabled={totalCost === "—"}
        className="inline-block w-full px-10 py-3
    font-serif text-sm tracking-widest uppercase
    bg-black text-yellow-500 rounded-full
    hover:bg-yellow-500 hover:text-black
    transition cursor-pointer"
      >
        View Receipt
      </button>

      {/* Info */}
      {useLivePrice && (
        <p className="text-xs text-center text-gray-500">
          Live price updated at {time} • 24K ₹{gold24K.toFixed(2)} • 22K ₹
          {gold22K.toFixed(2)} • Silver ₹{silver.toFixed(2)}
        </p>
      )}

      <p className="text-xs text-center text-gray-400">
        *Indicative prices. Final jewellery cost may vary.
      </p>
      {showReceipt && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 space-y-4 relative">
            {/* Close */}
            <button
              onClick={() => setShowReceipt(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-xl font-serif text-center">
              🧾 Invoice Preview
            </h3>

            <div className="text-sm space-y-2 text-gray-800">
              <Row label="Metal">
                <span>{metal}</span>
              </Row>
              <Row label="Weight">
                <span>{weight} g</span>
              </Row>
              <Row label="Rate">
                <span>₹ {rate.toFixed(2)} / g</span>
              </Row>
              <Row label="Metal Value">
                <span>₹ {(weight * rate).toFixed(2)}</span>
              </Row>
              <Row label="Making Charges (15%)">
                <span>₹ {(weight * rate * 0.15).toFixed(2)}</span>
              </Row>

              {includeGst && (
                <Row label={`GST (${gst}%)`}>
                  <span>
                    ₹ {((weight * rate * 1.15 * gst) / 100).toFixed(2)}
                  </span>
                </Row>
              )}

              <div className="flex justify-between font-bold border-t pt-2 mt-2">
                <span>Grand Total</span>
                <span>₹ {totalCost}</span>
              </div>
            </div>

            <button
              onClick={generateInvoice}
              className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:bg-gray-800"
            >
              ⬇️ Download PDF
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ================= HELPER ================= */
function Row({ label, children }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
      <span className="font-medium text-gray-800">{label}</span>
      {children}
    </div>
  );
}
