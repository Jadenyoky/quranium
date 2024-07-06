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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
