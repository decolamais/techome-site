import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Techome - Inovação e Tecnologia",
  description: "Soluções de automação residencial e desenvolvimento de aplicações web para simplificar sua vida e otimizar seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.className} bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
