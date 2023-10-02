import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import Footer from "@/components/Footer";

const titi = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mis Arduinos",
  description: "Generated by Valentin Libonati",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={titi.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
