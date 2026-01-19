const Contact = () => {
  return (
    <main className="bg-[#faf9f7]">

      {/* HERO */}
      <section className="py-28 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-wide">
          Visit <span className="text-yellow-600">Indra Jewellers</span>
        </h1>
        <p className="mt-6 text-gray-500 max-w-xl mx-auto leading-relaxed">
          A trusted jewellery showroom where purity, craftsmanship and
          personal service come together.
        </p>
      </section>

      {/* INFO STRIP */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3
          text-center py-10">

          <div className="px-6">
            <p className="font-serif text-sm text-gray-500">Location</p>
            <p className="mt-2 text-gray-900">
              Main Market, Your City
            </p>
          </div>

          <div className="px-6 border-y md:border-y-0 md:border-x border-gray-200">
            <p className="font-serif text-sm text-gray-500">Call Us</p>
            <p className="mt-2 text-gray-900">9876543210</p>
          </div>

          <div className="px-6">
            <p className="font-serif text-sm text-gray-500">Timings</p>
            <p className="mt-2 text-gray-900">
              10:00 AM – 8:00 PM
            </p>
          </div>

        </div>
      </section>

      {/* ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl
          shadow-2xl px-10 py-16 text-center">

          <h2 className="font-serif text-3xl text-gray-900">
            We’re happy to assist you
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed">
            Visit our showroom or connect with us for jewellery enquiries,
            availability, or custom designs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row
            justify-center gap-6">

            <a
              href="tel:9876543210"
              className="px-10 py-3 font-serif text-sm tracking-widest uppercase
                bg-black text-yellow-500 rounded-full
                hover:bg-yellow-500 hover:text-black
                transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919876543210"
              className="px-10 py-3 font-serif text-sm tracking-widest uppercase
                border border-gray-300 text-gray-700 rounded-full
                hover:border-yellow-500 hover:text-yellow-600
                transition"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* FOOTNOTE */}
      <section className="pb-20 text-center text-gray-400">
        <p className="font-serif italic text-sm">
          Trusted by families for generations
        </p>
      </section>

    </main>
  )
}

export default Contact
