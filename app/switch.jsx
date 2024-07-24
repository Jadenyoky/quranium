"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch as NextUISwitch,
  Progress,
  Spinner,
} from "@nextui-org/react";
import { useTheme } from "next-themes";

const SwitchMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <Spinner className="mr-4" color="success" labelColor="success" />;

  return (
    <>
      <NextUISwitch
        color="secondary"
        isSelected={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
};

export default SwitchMode;
