"use client";

const jewellerySets = [
  {
    title: "Bridal Jewellery Sets",
    subtitle: "Wedding & Grand Occasions",
    items: [
      {
        img: "https://i.pinimg.com/736x/f4/92/47/f492473bd38096056f7628ec674f2d51.jpg",
        name: "Traditional Gold Bridal Set",
      },
      {
        img: "https://i.pinimg.com/1200x/da/71/e4/da71e49e3d32e6b064311c4e71b55e35.jpg",
        name: "Kundan Bridal Set",
      },
      {
        img: "https://i.pinimg.com/736x/c9/bd/76/c9bd760350af2cadf364bc02c38cbd9d.jpg",
        name: "Diamond Bridal Set",
      },
    ],
  },
  
  {
    title: "Earrings Sets",
    subtitle: "From Daily Wear to Festive",
    items: [
      {
        img: "https://i.pinimg.com/736x/07/56/f0/0756f0a772ea906cec8d5ef953c76701.jpg",
        name: "Gold Jhumkas",
      },
      {
        img: "https://i.pinimg.com/1200x/9a/ff/a1/9affa14da7658928ff872f2525653d44.jpg",
        name: "Diamond Studs",
      },
      {
        img: "https://i.pinimg.com/736x/7d/23/92/7d23928b0e38ca314a1c38e93bd465e1.jpg",
        name: "Silver Earrings",
      },
    ],
  },
  {
    title: "Necklace Sets",
    subtitle: "Elegant Everyday & Party Wear",
    items: [
      {
        img: "https://i.pinimg.com/736x/ea/74/e1/ea74e119023576e3335e42cef725f916.jpg",
        name: "Classic Gold Necklace",
      },
      {
        img: "https://i.pinimg.com/1200x/78/ba/b9/78bab902ba8b91becb4c2502f3ae8cbd.jpg",
        name: "Diamond Necklace Set",
      },
      {
        img: "https://i.pinimg.com/736x/72/eb/d9/72ebd9b6773c472a7d7b074390daf34e.jpg",
        name: "Silver Necklace Set",
      },
    ],
  },
   {
    title: "Men’s Jewellery Sets",
    subtitle: "Rings, Chains, Bracelets & Cufflinks",
    items: [
      {
        img: "https://i.pinimg.com/1200x/f7/f5/ba/f7f5ba5f2adbfc26d5e4604e651f156f.jpg",
        name: "Gold Ring Set",
      },
      {
        img: "https://i.pinimg.com/1200x/15/8b/de/158bdec3f4dc7aa7059bfe8fa3d4d691.jpg",
        name: "Gold Chain",
      },
      {
        img: "https://i.pinimg.com/1200x/94/48/d5/9448d536017517c8ded1fad647e69c53.jpg",
        name: "Bracelet & Cufflinks Set",
      },
    ],
  },
];

const Products = () => {
  return (
    <main className="bg-[#faf9f7] py-20 px-6">
      {/* PAGE HEADING */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
          Our Jewellery Collection
        </h1>
        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Handcrafted designs available at our store
        </p>
      </div>

      {/* SECTIONS */}
      {jewellerySets.map((section, idx) => (
        <section key={idx} className="mb-24 max-w-7xl mx-auto">
          {/* SECTION TITLE */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              {section.title}
            </h2>
            <p className="mt-3 text-gray-500">{section.subtitle}</p>
          </div>

          {/* CARDS */}
          {/* CARDS */}
          <div
            className="
    flex md:grid
    md:grid-cols-3
    gap-6 md:gap-10

    overflow-x-auto md:overflow-visible
    snap-x snap-mandatory
    scroll-smooth

    pb-6
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
          >
            {section.items.map((item, index) => (
              <div
                key={index}
                className="
        min-w-[85%] sm:min-w-[70%] md:min-w-0
        snap-center

        group bg-white rounded-2xl overflow-hidden
        shadow-xl
        border border-transparent hover:border-yellow-500
        transition-all duration-500
      "
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="
            h-[300px] sm:h-[340px] md:h-[360px]
            w-full object-cover
            transition duration-700
            group-hover:scale-105
          "
                  />
                </div>

                {/* TEXT */}
                <div className="p-6 text-center">
                  <h3 className="font-serif text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-yellow-600">
                    Available in Store
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="text-center mt-20">
        <p className="font-serif text-gray-600 mb-6">
          Explore more exclusive designs at our showroom
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-3
            font-serif text-sm tracking-widest uppercase
            bg-black text-yellow-500 rounded-full
            hover:bg-yellow-500 hover:text-black
            transition"
        >
          Visit Our Store
        </a>
      </div>
    </main>
  );
};

export default Products;