import "./globals.css";
import "material-icons/iconfont/material-icons.css";
// import "./fonts.css";
import { Providers } from "./providers";
import Nav from "./components/nav";

export const metadata = {
  title: "Quranium",
  description: "Website for read , search , listen and mean quran",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
