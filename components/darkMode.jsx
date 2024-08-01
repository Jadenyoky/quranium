"use client";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import store from "store2";

const DarkMode = ({ prefer, setprefer }) => {
  const stored = store("theme", prefer);
  console.log(stored);
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
      </Paper>
    </>
  );
};

export default DarkMode;
