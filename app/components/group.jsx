"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
function Demo() {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <>
      <button className="btn capitalize" onClick={() => changeTheme("light")}>
        light
      </button>
      <button className="btn" onClick={() => changeTheme("dark")}>
        dark
      </button>
      <button className="btn" onClick={() => changeTheme("synthwave")}>
        synthwave
      </button>
      <button className="btn" onClick={() => changeTheme("aqua")}>
        aqua
      </button>
      <button className="btn" onClick={() => changeTheme("fantasy")}>
        fantasy
      </button>
    </>
  );
}
export default Demo;
