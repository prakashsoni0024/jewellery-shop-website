const Contact = () => {
  return (
    <main className="bg-[#faf9f7]">
      {/* HERO */}
      <section className="py-28 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-wide">
          Visit <span className="text-yellow-600">Indra Jewellers</span>
        </h1>
        <p className="mt-6 text-gray-500 max-w-xl mx-auto leading-relaxed">
          A trusted jewellery showroom where purity, craftsmanship and personal
          service come together.
        </p>
      </section>

      {/* INFO STRIP */}
      <section className="bg-white border-y border-gray-200">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3
          text-center py-10"
        >
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
            <p className="mt-2 text-gray-900">10:00 AM – 8:00 PM</p>
          </div>
        </div>
      </section>

      {/* MAP + CONTACT */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
              Visit Our <span className="text-yellow-600">Showroom</span>
            </h2>
            <p className="mt-3 text-gray-500">
              Experience purity, craftsmanship & personal service
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* MAP */}
            <div
              className="rounded-3xl overflow-hidden shadow-2xl
                grayscale contrast-125 brightness-95"
            >
              <iframe
                title="Indra Jewellers Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.0028956997577!2d79.90677618727462!3d23.200486958342722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b032c9d74d85%3A0x888e6e97efc3cd0d!2sHN818%2C%20Madhotal%2C%20Rajeev%20Gandhi%20Nagar%2C%20Karmeta%2C%20Jabalpur%2C%20GCF%20Jabalpur%2C%20Madhya%20Pradesh%20482002!5e0!3m2!1sen!2sin!4v1768884298134!5m2!1sen!2sin"
                className="w-full h-[360px] md:h-[460px] border-0"
                loading="lazy"
              />
            </div>

            {/* CONTACT CARD */}
            <div
              className="bg-white rounded-3xl shadow-2xl
                px-10 py-14 flex flex-col justify-center"
            >
              <h3 className="font-serif text-2xl text-gray-900 mb-6">
                Indra Jewellers
              </h3>

              <div className="space-y-5 text-gray-600 text-sm">
                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400">
                    Address
                  </p>
                  <p className="mt-1 text-gray-800 leading-relaxed">
                    HN818, Madhotal
                    <br />
                    Rajeev Gandhi Nagar,
                    <br />
                    Jabalpur (M.P.)
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400">
                    Phone
                  </p>
                  <p className="mt-1 text-gray-800">+91 98765 43210</p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400">
                    Working Hours
                  </p>
                  <p className="mt-1 text-gray-800">
                    10:00 AM – 8:00 PM (All Days)
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href="tel:9876543210"
                  className="px-8 py-3 font-serif text-xs tracking-widest uppercase
              bg-black text-yellow-500 rounded-full
              hover:bg-yellow-500 hover:text-black
              transition"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/919876543210"
                  className="px-8 py-3 font-serif text-xs tracking-widest uppercase
              border border-gray-300 text-gray-700 rounded-full
              hover:border-yellow-500 hover:text-yellow-600
              transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
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
  );
};

export default Contact;
