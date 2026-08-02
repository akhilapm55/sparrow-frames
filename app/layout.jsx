import "./globals.css";
import { Overpass, Bricolage_Grotesque, Allison } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-overpass",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const allison = Allison({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allison",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Sparrow Frames — Photography, Videography & Custom Framing",
    template: "%s — Sparrow Frames",
  },
  description:
    "Wedding, portrait and event photography, cinematic video production and handmade custom frames. Transparent package pricing.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${overpass.variable} ${bricolage.variable} ${allison.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
