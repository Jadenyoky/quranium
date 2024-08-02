"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import DarkMode from "./darkMode";
import store from "store2";
import { Skeleton, Typography } from "@mui/material";

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
      <div className="loading">
        <Skeleton animation="wave" variant="circular" width={70} height={70} />
        <Skeleton variant="rectangular" width={"80%"} height={"15%"} />
        <Typography variant="inherit" color="white">
          Loading ...
        </Typography>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={"80%"}
          height={"30%"}
        />
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
