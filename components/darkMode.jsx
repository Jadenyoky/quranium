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

const DarkMode = ({ prefer, setprefer }) => {
  const stored = store("theme", prefer);
  console.log(stored);
  const [test, settest] = useState("wait");
  store("test", test);

  useEffect(() => {
    store("theme", prefer);
    console.log("done");
  }, [prefer]);
  return (
    <>
      <Paper elevation={7}>
        Dark Mode
        <Button
          onClick={() => {
            if (stored === "dark") {
              setprefer("light");
            } else {
              setprefer("dark");
            }
          }}
        >
          {stored === "dark" ? <Brightness7 /> : <Brightness4 />}
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
