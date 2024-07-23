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
} from "@nextui-org/react";
import { useTheme } from "next-themes";

const SwitchMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return "loading";

  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];
  return (
    <>
      <NextUISwitch
        color="secondary"
        isSelected={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <div className="flex flex-col gap-6 w-full max-w-md">
        <Progress color="default" aria-label="Loading..." value={70} />
        <Progress color="primary" aria-label="Loading..." value={70} />
        <Progress color="secondary" aria-label="Loading..." value={70} />
        <Progress color="success" aria-label="Loading..." value={70} />
        <Progress color="warning" aria-label="Loading..." value={70} />
        <Progress color="danger" aria-label="Loading..." value={70} />
      </div>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem
              key={item.key}
              color={item.key === "delete" ? "danger" : "default"}
              className={item.key === "delete" ? "text-danger" : ""}
            >
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default SwitchMode;
