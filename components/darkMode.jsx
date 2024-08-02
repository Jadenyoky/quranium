"use client";
import {
  Brightness1Outlined,
  Brightness2Outlined,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import store from "store2";

const DarkMode = ({ prefer, setprefer }) => {
  const stored = store("theme", prefer);
  const [mode, setmode] = useState(false);
  console.log(stored);
  const [test, settest] = useState("wait");
  store("test", test);
  return (
    <>
      <Paper elevation={7}>
        Dark Mode
        <Button
          onClick={() => {
            setmode(!mode);
            stored === "light" ? setprefer("dark") : setprefer("light");
          }}
        >
          {stored === "light" ? <Brightness4 /> : <Brightness7 />}
        </Button>
        <Button
          onClick={() => {
            if (test === "done") {
              settest("wait");
            } else {
              settest("done");
            }
          }}
        >
          {test === "done" ? <Brightness1Outlined /> : <Brightness2Outlined />}
        </Button>
      </Paper>
    </>
  );
};

export default DarkMode;
