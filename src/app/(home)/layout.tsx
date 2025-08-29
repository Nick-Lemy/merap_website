import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <footer className="bg-secondary-700">
        <Footer />
      </footer>
    </>
  );
}
