"use client";

import HeroCarousel from "./HeroCarousel";
import Offers from "./Offers";

const highlights = [
  {
    icon: "🏆",
    title: "20+ Years of Trust",
    desc: "Serving generations with honesty, purity, and commitment.",
  },
  {
    icon: "💎",
    title: "BIS Hallmarked Gold",
    desc: "Certified jewellery ensuring purity and transparency.",
  },
  {
    icon: "✨",
    title: "Latest Designs",
    desc: "A perfect blend of traditional elegance and modern styles.",
  },
];

const featuredDesigns = [
  {
    img: "https://i.pinimg.com/1200x/17/17/a1/1717a135b71d145543ac2d5f2d07e990.jpg",
    alt: "Gold Jewellery Design",
  },
  {
    img: "https://i.pinimg.com/736x/30/17/9b/30179b5bc23cf5546fb11955e4c6a275.jpg",
    alt: "Diamond Jewellery Design",
  },
  {
    img: "https://i.pinimg.com/736x/06/af/b8/06afb819bb5fe0bd7c8804c298e3c09b.jpg",
    alt: "Traditional Jewellery Design",
  },
];

const HomeClient = () => {
  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <h1 className="sr-only">
        Indra Jewellers – Trusted Gold & Silver Jewellery Store in Jabalpur
      </h1>
      {/* HERO */}
      <HeroCarousel />

      {/* TRENDING NOW */}
      <section className="py-15 px-6 bg-[#faf9f7]">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
            Trending <span className="text-yellow-600">Now</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Jewellery pieces everyone’s eyeing right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="group">
            <div
              className="overflow-hidden rounded-2xl shadow-xl
              border border-transparent
              hover:border-yellow-500
              transition-all duration-500"
            >
              <img
                src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg"
                alt="Auspicious Occasion"
                className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h3 className="mt-4 text-lg font-serif text-center text-gray-800">
              Auspicious Occasion
            </h3>
          </div>

          {/* Card 2 */}
          <div className="group">
            <div
              className="overflow-hidden rounded-2xl shadow-xl
              border border-transparent
              hover:border-yellow-500
              transition-all duration-500"
            >
              <img
                src="https://i.pinimg.com/1200x/6b/ca/28/6bca28caa241a733f1f9aa24b96a427e.jpg"
                alt="Gifting Jewellery"
                className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h3 className="mt-4 text-lg font-serif text-center text-gray-800">
              Gifting Jewellery
            </h3>
          </div>

          {/* Card 3 */}
          <div className="group">
            <div
              className="overflow-hidden rounded-2xl shadow-xl
              border border-transparent
              hover:border-yellow-500
              transition-all duration-500"
            >
              <img
                src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3d1461ae/homepage/trendingNow/drops-of-radiance-new.jpg"
                alt="Drops of Radiance"
                className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h3 className="mt-4 text-lg font-serif text-center text-gray-800">
              Drops of Radiance
            </h3>
          </div>
        </div>
      </section>

      {/* FEATURED DESIGNS */}
      <section className="py-14 px-4 bg-[#faf9f7] text-center overflow-hidden">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
            Featured <span className="text-yellow-600">Designs</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Handpicked jewellery pieces just for you
          </p>
        </div>

        {/* MOBILE → horizontal scroll | DESKTOP → grid */}
        <div
          className="
      flex md:grid
      md:grid-cols-3
      gap-6 md:gap-10
      max-w-7xl mx-auto
      overflow-x-auto md:overflow-visible
      snap-x snap-mandatory
      px-2
    "
        >
          {featuredDesigns.map((item, index) => (
            <a href="/products" key={index}>
              <div
                className="
          group relative
          min-w-[85%] sm:min-w-[70%] md:min-w-0
          snap-center
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-xl
          border border-transparent
          hover:border-yellow-500
          transition-all duration-500
        "
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="
            w-full
            h-[420px] md:h-[480px]
            object-cover
            transition duration-700
            group-hover:scale-105
          "
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                {/* CAPTION */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-lg md:text-xl font-serif text-white tracking-wide">
                    {item.alt}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/products"
          className="
      inline-block mt-14 px-10 py-3
      font-serif text-sm tracking-widest uppercase
      bg-black text-yellow-500
      rounded-full
      hover:bg-yellow-500 hover:text-black
      transition
    "
        >
          View All Designs
        </a>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-14 px-4 bg-[#faf9f7] text-center">
        {/* HEADING */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
            Why Choose <span className="text-yellow-600">Indra Jewellers</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Crafted with trust, purity and timeless elegance
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-10 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="
          group relative
          bg-white
          rounded-2xl
          p-4 md:p-8
          shadow-lg
          border border-transparent
          hover:border-yellow-500
          transition-all duration-500
        "
            >
              {/* ICON */}
              <div className="text-3xl md:text-5xl mb-3 text-gray-800">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-gray-900 text-sm md:text-xl mb-1 md:mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="hidden md:block text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* GOLD LINE (Featured jaisi) */}
              <span
                className="
            absolute bottom-0 left-0
            h-[2px] w-0
            bg-yellow-500
            group-hover:w-full
            transition-all duration-500
          "
              />
            </div>
          ))}
        </div>
      </section>

      {/* ULTRA-LUXURY INSTAGRAM EMBED */}
      <section className="relative py-28 px-4 bg-[#0b0b0b] overflow-hidden">
        {/* GOLD AMBIENT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]"></div>

        {/* HEADING */}
        <div className="relative text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
            Our Presence on <span className="text-yellow-500">Instagram</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Followed by upto{" "}
            <span className="text-yellow-500 font-semibold">100,000</span>{" "}
            jewellery lovers. A glimpse of timeless craftsmanship and everyday
            luxury.
          </p>
        </div>

        {/* FRAME */}
        <div className="relative max-w-6xl mx-auto">
          {/* GOLD BORDER */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-yellow-500/60 via-yellow-300/40 to-yellow-500/60 blur"></div>

          {/* GLASS CARD */}
          <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 md:p-10">
            {/* PROFILE BAR */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-serif text-white">
                  @indra_jewellers_jabalpur
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Heritage • Purity • Modern Elegance
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://www.instagram.com/indra_jewellers_jabalpur/"
                target="_blank"
                className="
            px-10 py-3
            text-sm tracking-widest uppercase
            font-serif
            bg-yellow-500 text-black
            rounded-full
            hover:bg-white
            transition
          "
              >
                Follow on Instagram
              </a>
            </div>

            {/* EMBED */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <iframe
                src="https://www.instagram.com/indra_jewellers_jabalpur/embed"
                className="w-full h-[600px] md:h-[720px] border-none"
                loading="lazy"
              />
            </div>

            {/* TRUST LINE */}
            <p className="mt-8 text-center text-gray-400 italic font-serif text-sm md:text-base">
              Trusted by generations • Celebrated by a community of upto 100K
            </p>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <Offers />

      {/* LUXURY DIVIDER LINE */}
      <section className="bg-[#faf9f7] py-7">
        <div className="mt-10 flex items-center justify-center gap-6 text-gray-400">
          <span className="h-px w-24 bg-gray-300"></span>

          <span className="text-xl text-yellow-500">✦</span>

          <p className="font-serif italic text-sm md:text-lg text-gray-600 tracking-wide text-center max-w-2xl">
            Trust us to be part of your precious moments and to deliver
            jewellery that you’ll cherish forever.
          </p>

          <span className="text-xl text-yellow-500">✦</span>

          <span className="h-px w-24 bg-gray-300"></span>
        </div>
      </section>
    </main>
  );
};

export default  HomeClient;