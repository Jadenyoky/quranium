import { Inter } from "next/font/google";
import "./globals.css";
// import "./fonts.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Quranium",
  description: "Website for read , search , listen and mean quran",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
