"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
    title: "Exquisite Gold Jewellery",
    desc: "Rings, Chains, Bangles & more",
  },
  {
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    title: "Diamond Collection",
    desc: "Modern & Elegant Designs",
  },
  {
    img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    title: "Traditional Classics",
    desc: "Timeless Indian Jewellery",
  },
]

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)

  // Auto slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-yellow-400 mb-4">
              {slide.title}
            </h1>
            <p className="text-white text-lg md:text-2xl mb-6">{slide.desc}</p>
            <div className="flex gap-4">
              <a
                href="tel:9876543210"
                className="bg-yellow-400 text-black font-serif px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                className="border border-yellow-400 font-serif text-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60 transition z-20"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60 transition z-20"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === current ? "bg-yellow-400" : "bg-white/60"
            }`}
          ></span>
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
