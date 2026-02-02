"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Purity", desc: "BIS hallmarked gold & certified diamonds." },
  { title: "Trust", desc: "Serving generations with honesty for 20+ years." },
  { title: "Craftsmanship", desc: "Traditional skills blended with modern design." },
];

const timeline = [
  { year: "2000", text: "Indra Jewellers founded with a vision of trust." },
  { year: "2008", text: "Expanded into gold & silver collections." },
  { year: "2015", text: "Introduced diamond & bridal jewellery." },
  { year: "2024", text: "Serving generations with modern designs." },
];

const faqs = [
  {
    q: "Do you provide BIS hallmarked gold?",
    a: "Yes, all our gold jewellery is BIS hallmarked, ensuring purity, transparency, and complete trust.",
  },
  {
    q: "Can I customise jewellery designs?",
    a: "Absolutely. We offer custom jewellery designs tailored to your preferences, budget, and occasion.",
  },
  {
    q: "Do you offer jewellery exchange?",
    a: "Yes, we provide exchange facilities based on current gold rates and jewellery condition.",
  },
  {
    q: "Are diamond jewellery pieces certified?",
    a: "Yes, all our diamond jewellery comes with proper certification guaranteeing authenticity and quality.",
  },
  {
    q: "Why do gold prices change daily?",
    a: "Gold prices fluctuate daily based on international markets, demand, currency rates, and government policies.",
  },
];


const About = () => {
  return (
    <main className="bg-[#faf9f7] overflow-hidden">

      {/* HERO */}
      <section className="py-28 px-6 text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-serif text-gray-900"
        >
          About <span className="text-yellow-600">Indra Jewellers</span>
        </motion.h1>

        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          A legacy of trust, purity and timeless jewellery craftsmanship
        </p>
      </section>

      {/* IMAGE + STORY */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center md:mb-40">
        
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/indra-papa.jpeg"
          alt="Jewellery Store"
          className="rounded-3xl shadow-2xl h-[420px] w-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-serif text-gray-900 mb-6">
            Our Story
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            Indra Jewellers is a trusted, family-owned jewellery store that has
            been serving customers with honesty and purity for over 20 years.
            Our commitment to quality has helped us build relationships across generations.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From traditional gold jewellery to modern diamond designs, every
            piece is crafted to celebrate life’s most precious moments.
          </p>
        </div>
      </section>
          <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-28">
             <div>
          {/* <h2 className="text-3xl font-serif text-gray-900 mb-6">
            Our Story
          </h2> */}

          <p className="text-gray-700 leading-relaxed mt-5 md:0 mb-5">
            Indra Jewellers is a trusted, family-owned jewellery store that has
            been serving customers with honesty and purity for over 20 years.
            Our commitment to quality has helped us build relationships across generations.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From traditional gold jewellery to modern diamond designs, every
            piece is crafted to celebrate life’s most precious moments.
          </p>
        </div>
        
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/indra-boy.jpeg"
          alt="Jewellery Store"
          className="rounded-3xl shadow-2xl h-[420px] w-full object-cover"
        />

       
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
            Our <span className="text-yellow-600">Values</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#faf9f7] rounded-2xl p-8 text-center shadow-lg border hover:border-yellow-500 transition"
            >
              <h3 className="font-serif text-xl mb-3 text-gray-900">
                {v.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 bg-[#faf9f7]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
            Our <span className="text-yellow-600">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="text-yellow-600 font-serif text-lg">
                {t.year}
              </span>
              <p className="text-gray-700">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ SECTION */}
<section className="py-24 px-6 bg-white">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
      Frequently Asked <span className="text-yellow-600">Questions</span>
    </h2>
    <p className="mt-3 text-gray-500 text-sm md:text-base">
      Everything you need to know before buying jewellery
    </p>
  </div>

  <div className="max-w-3xl mx-auto divide-y">
    {faqs.map((faq, index) => (
      <details
        key={index}
        className="group py-6 cursor-pointer"
      >
        <summary className="flex justify-between items-center font-serif text-lg text-gray-800">
          {faq.q}
          <span className="text-yellow-600 group-open:rotate-45 transition">
            +
          </span>
        </summary>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {faq.a}
        </p>
      </details>
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="py-20 text-center">
        <p className="font-serif text-gray-600 mb-8">
          Visit our showroom to explore exclusive designs
        </p>

        <a
          href="/contact"
          className="
            inline-block px-12 py-4
            font-serif text-sm tracking-widest uppercase
            bg-black text-yellow-500 rounded-full
            hover:bg-yellow-500 hover:text-black
            transition
          "
        >
          Visit Our Store
        </a>
      </section>
    </main>
  );
};

export default About;
