"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("light");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const store = localStorage.getItem("theme") || "light";
    settheme(store);
  }, []);
  
  if (!loading) {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          fontSize: "30px",
        }}
      >
        LOADING ...
      </div>
    );
  }

  const changeTheme = (theme) => {
    settheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
