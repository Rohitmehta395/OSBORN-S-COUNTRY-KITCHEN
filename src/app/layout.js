import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Osborn's Country Kitchen | Homestyle Cooking Done Right",
  description: "A warm, family-friendly hometown restaurant known for hearty breakfasts, comfort food favorites, daily specials, and welcoming hospitality.",
  keywords: ["Osborn's Country Kitchen", "Country breakfast", "Comfort food", "Family restaurant", "Diner", "Hometown restaurant"],
  openGraph: {
    title: "Osborn's Country Kitchen | Homestyle Cooking Done Right",
    description: "A warm, family-friendly hometown restaurant known for hearty breakfasts, comfort food favorites, daily specials, and welcoming hospitality.",
    url: "https://osbornscountrykitchen.com",
    siteName: "Osborn's Country Kitchen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Osborn's Country Kitchen Dining Room",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osborn's Country Kitchen | Homestyle Cooking Done Right",
    description: "A warm, family-friendly hometown restaurant known for hearty breakfasts, comfort food favorites, daily specials, and welcoming hospitality.",
    images: ["https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1200"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-text flex flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
