"use client";
const Contact = () => {
  return (
    <main className="bg-[#faf9f7]">
      {/* HERO */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-wide">
          Visit <span className="text-yellow-600">Indra Jewellers</span>
        </h1>
        <p className="mt-6 text-gray-500 max-w-xl mx-auto leading-relaxed">
          A trusted jewellery showroom where purity, craftsmanship and personal
          service come together.
        </p>
      </section>

      {/* INFO STRIP – TRUST SIGNALS */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Item 1 */}
            <div>
              <p className="text-3xl font-serif text-yellow-600">25+</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                Years of Trust
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <p className="text-3xl font-serif text-yellow-600">BIS</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                Hallmarked Gold
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <p className="text-3xl font-serif text-yellow-600">100%</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                Purity Guarantee
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <p className="text-3xl font-serif text-yellow-600">87.5K+</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                Happy Families
              </p>
            </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.268829265532!2d79.90836999999999!3d23.196871599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1d27e9ed5a1%3A0x4876d7d367e244d7!2sIndra%20Jewellers!5e0!3m2!1sen!2sin!4v1769803150318!5m2!1sen!2sin"
                className="w-full h-[360px] md:h-[500px] border-0"
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
                    5WW5+P8V, Patan Rd,
                    <br />
                    Near ITI, Madhotal,
                    <br />
                    Kanchan Vihar, Vijay Nagar,
                    <br />
                    Jabalpur, GCF Jabalpur,
                    <br />
                    Madhya Pradesh 482002
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400">
                    Phone
                  </p>
                  <p className="mt-1 text-gray-800">+91 883 961 7340</p>
                </div>

                <div>
                  <p className="uppercase tracking-widest text-xs text-gray-400">
                    Working Hours
                  </p>
                  <p className="mt-1 text-gray-800">
                    12:00 PM – 8:00 PM (All Days)
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
