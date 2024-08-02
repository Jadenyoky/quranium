"use client";
import {
  Brightness1Outlined,
  Brightness2Outlined,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import store from "store2";

const DarkMode = ({ stored }) => {
  const [mode, setmode] = useState(false);

  useEffect(() => {
    setmode(stored === "light" ? true : false);
    console.log("sd");
  }, []);
  return (
    <>
      <Paper elevation={7}>
        Dark Mode
        <Button
          onClick={() => {
            setmode(!mode);
            // mode ? setprefer("dark") : setprefer("light");
            store("theme", mode ? "dark" : "light");
          }}
        >
          {mode ? "dark" : "light"}
        </Button>
      </Paper>
    </>
  );
};

export default DarkMode;
