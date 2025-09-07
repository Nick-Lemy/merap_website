import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MERAP",
  description: "Votre Partenaire préféré en BTP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`bg-white font-sans relative ${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}
