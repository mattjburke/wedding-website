import type { Metadata } from "next";
import { Caudex, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caudex",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Rebeca & Matthew | May 15, 2027",
  description:
    "Join us to celebrate the wedding of Rebeca & Matthew in Littleton, Colorado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${caudex.variable} ${dmSans.variable} ${greatVibes.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
