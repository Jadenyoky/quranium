"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import DarkMode from "../darkMode";
import store from "store2";

export default function ThemeRegistry({ children }) {
  const stored = store("theme");
  const [prefer, setprefer] = useState(stored ? stored : "light");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    store("theme", prefer);
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
    palette: { mode: prefer },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkMode setprefer={setprefer} prefer={prefer} />
      {children}
    </ThemeProvider>
  );
}
