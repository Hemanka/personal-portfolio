import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemant | Personal Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      {/* <body className="bg-purple-950 text-white"> */}
      <body className="bg-[#171625] text-[#E1E0FFFE]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
