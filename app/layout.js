import "./globals.css"
import Navbar from "./components/Navbar"
import WhatsAppButton from "./components/WhatsAppButton"
import Footer from "./components/Footer"

export const metadata = {
  title: "Indra Jewellers - Trusted Jewellery Store",
  description: "Trusted Jewellery Store",
}

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
  )
}

export default RootLayout
