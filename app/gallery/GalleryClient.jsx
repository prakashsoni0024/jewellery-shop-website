"use client";

const galleryImages = [
  { img: "https://www.kalyanjewellers.net/images/Jewellery/Bangles/images/hiranam-nivara-gold-bangle.jpg", tag: "Bangles" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/Earrings/images/dauntless-dahlia-gemstone-earrings.jpg", tag: "Earrings" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/Necklace/images/prashvi-tushi-kyra-gold-necklace.jpg", tag: "Gold Necklace Set" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/Chains/images/rope-gold-chain.jpg", tag: "Gold Chain" },

  { img: "https://www.kalyanjewellers.net/images/Jewellery/Pendant/images/uttara-pink-spinel-pendant.jpg", tag: "Pink Spinel Pendant" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/Rings/images/danusiya-navaratna-ring.jpg", tag: "Navaratna Ring" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/images/Red%20Stone-1.jpg", tag: "Red Stone" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/images/0.03CT-DIAMOND-NOSE-PIN.jpg", tag: "Diamond Nose Pin" },

  { img: "https://www.kalyanjewellers.net/images/Jewellery/images/CINZIA-BLUE-SAPPHIRE-BRACELET.jpg", tag: "Blue Sapphire Bracelet" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/images/RJ1.jpg", tag: "Rajasthani Jewellery" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/images/WEDDING-FANTASY-DIAMOND-MANGALSUTRA.jpg", tag: "Diamond Mangalsutra" },
  { img: "https://www.kalyanjewellers.net/images/Jewellery/images/pdl1.jpg", tag: "Payal" },
];

const Gallery = () => {
  return (
    <main className="bg-[#faf9f7] py-20 px-6">

      {/* HEADING */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
          Jewellery Gallery
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          A glimpse of designs available at our showroom
        </p>
      </div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {galleryImages.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl
              bg-white shadow-lg
              border border-transparent hover:border-yellow-500
              transition-all duration-500"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.tag}
              className="h-[220px] md:h-[280px] w-full object-cover
                group-hover:scale-105 transition duration-700"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-500"></div>

            {/* CAPTION */}
            <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-black font-serif text-sm tracking-wide">
                {item.tag}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-20">
        <p className="font-serif text-gray-600 mb-6">
          Prices may vary. Visit our store to explore full collections and custom designs.
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-3
            font-serif text-sm tracking-widest uppercase
            bg-black text-yellow-500 rounded-full
            hover:bg-yellow-500 hover:text-black
            transition"
        >
          Visit Our Showroom
        </a>
      </div>
    </main>
  );
};

export default Gallery;