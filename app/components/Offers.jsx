const offers = [
  {
    img: "https://cdn.pixabay.com/photo/2022/02/02/03/46/jewelry-6987473_960_720.jpg",
    title: "Festive Gold Offers",
  },
  {
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw426e0bef/homepage/new-arrivals/floral-bloom.jpg",
    title: "Diamond Elegance",
  },
]

const Offers = () => {
  return (
    <section className="py-20 px-6 bg-[#faf9f7]">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
          Special <span className="text-yellow-600">Offers</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Handpicked jewellery offers curated just for you
        </p>
      </div>

      {/* OFFERS */}
      <div className="flex md:grid md:grid-cols-2 gap-8 max-w-7xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory">
        {offers.map((item, index) => (
          <div
            key={index}
            className="group min-w-[85%] md:min-w-0 snap-center"
          >
            {/* IMAGE WRAPPER */}
            <div className="
              relative overflow-hidden rounded-2xl
              border border-transparent
              group-hover:border-yellow-500
              transition-all duration-500
            ">
              <img
                src={item.img}
                alt={item.title}
                className="h-[380px] md:h-[420px] w-full object-cover
                           group-hover:scale-105 transition duration-500"
              />

              {/* GOLD LINE */}
              <span
                className="
                  absolute bottom-0 left-0
                  h-[2px] w-0 bg-yellow-500
                  group-hover:w-full
                  transition-all duration-500
                "
              />
            </div>

            <h3 className="mt-4 text-lg font-serif text-center text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers
