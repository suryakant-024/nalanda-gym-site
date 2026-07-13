import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

// Original site uses Poppins as the base font (confirmed from live HTML body class).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Original site uses a paid font called "Matter" for nav/headings — not on Google Fonts.
// Plus Jakarta Sans used as closest free substitute. Confirm against live site.
const matter = Plus_Jakarta_Sans({
  variable: "--font-matter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Original site uses "Clash Display" for the big footer wordmark — not on Google Fonts.
// Bricolage Grotesque used as closest free display substitute. Confirm against live site.
const clash = Bricolage_Grotesque({
  variable: "--font-clash",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nalanda Gym",
  description: "Forge your strength at Nalanda Gym — demo fitness site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${matter.variable} ${clash.variable}`}>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <FloatingSocials />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
