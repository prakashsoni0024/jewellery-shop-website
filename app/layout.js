import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
export const metadata = {
  title: {
    default: "Indra Jewellers Jabalpur | Gold, Diamond & Silver Jewellery",
    template: "%s | Indra Jewellers Jabalpur",
  },
  description:
    "Indra Jewellers Jabalpur – Trusted jewellery store offering BIS hallmarked gold, diamond and silver jewellery with timeless designs and purity assurance.",

  keywords: [
    "Indra Jewellers Jabalpur",
    "Gold jewellery Jabalpur",
    "Diamond jewellery Jabalpur",
    "Silver jewellery shop Jabalpur",
    "BIS hallmarked gold Jabalpur",
  ],

  metadataBase: new URL("https://indrajewellers.com"),

  icons: {
    icon: "/short ij.png",
    shortcut: "/short ij.ico",
    apple: "/apple-short ij.png",
  },

  openGraph: {
    title: "Indra Jewellers Jabalpur | Premium Gold & Diamond Jewellery",
    description:
      "Explore premium gold, diamond and silver jewellery at Indra Jewellers Jabalpur. Trusted purity, elegant designs and timeless craftsmanship.",
    url: "https://indrajewellers.com",
    siteName: "Indra Jewellers",
    type: "website",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
