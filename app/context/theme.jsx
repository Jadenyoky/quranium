"use client";

import { createContext, useEffect, useState } from "react";
import store from "store2";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("light");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const stored = store("theme") || "light";
    settheme(stored);
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
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  const changeTheme = (theme) => {
    settheme(theme);
    store("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
