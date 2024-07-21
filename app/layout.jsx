import "./globals.css";
import Group from "./components/group";
import { ThemeProvider } from "./context/theme";
import ClientTheme from "./context/clientTheme";
// import "./fonts.css";

export const metadata = {
  title: "Quranium",
  description: "Website for read , search , listen and mean quran",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <ClientTheme>
            <Group />
            {children}
          </ClientTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
