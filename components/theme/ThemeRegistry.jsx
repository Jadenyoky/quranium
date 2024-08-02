"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import DarkMode from "../darkMode";
import store from "store2";

export default function ThemeRegistry({ children }) {
  const stored = store("theme");
  // const [prefer, setprefer] = useState(stored || "light");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    store("theme", stored ? stored : "light");
    console.log("999");
  }, []);

  if (!loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "5px",
        }}
      >
        <h1>loading...</h1>
      </div>
    );
  }
  const theme = createTheme({
    palette: { mode: stored },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkMode stored={stored} />
      {children}
    </ThemeProvider>
  );
}
