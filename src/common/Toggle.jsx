import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Toggle = ({ theme, setTheme }) => {
  const [isOn, setIsOn] = useState(false);

  // The toggle switch
  const toggleSwitch = () => setIsOn(!isOn);

  // The toggle theme function
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <span
      className="light-and-dark-mode"
      onClick={() => {
        toggleSwitch();
        toggleTheme();
      }}
    >
      {theme === "dark-theme" ? (
        <FiSun className="sun" />
      ) : (
        <FiMoon className="sun" />
      )}
    </span>
  );
};

export default Toggle;
