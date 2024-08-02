"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import DarkMode from "./darkMode";
import store from "store2";

export default function ThemeRegistry({ children }) {
  const stored = store("theme");
  const [prefer, setprefer] = useState(stored || "light");
  const [loading, setloading] = useState(false);

  const theme = createTheme({
    palette: { mode: stored },
  });

  useEffect(() => {
    store("theme", stored ? stored : "light");
    setTimeout(() => {
      setloading(true);
    }, 10 * 1000);
  }, []);

  if (!loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100dvh",
          gap: "5px",
        }}
      >
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkMode setprefer={setprefer} stored={stored} />
      {children}
    </ThemeProvider>
  );
}
