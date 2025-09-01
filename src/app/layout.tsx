import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-white font-sans relative">{children}</body>
    </html>
  );
}
