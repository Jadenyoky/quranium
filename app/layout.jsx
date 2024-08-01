import "./globals.css";
import ThemeRegistry from "../components/theme/ThemeRegistry";

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
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
