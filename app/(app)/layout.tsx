import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "KBH Creative",
  description: "All your content creation needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
