import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
export const SetTheme = () => {
  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState("dark");

  const setLocalTheme = (theme) => {
    window.localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const toggleTheme = () => {
    theme === "dark" ? setLocalTheme("light") : setLocalTheme("dark");
  };

  const prefersLight = useMediaQuery({
    query: "(prefers-color-scheme: light)",
  });

  useEffect(() => {
    if (!localTheme) {
      setLocalTheme(prefersLight ? "light" : "dark");
    } else {
      localTheme ? setTheme(localTheme) : setLocalTheme("light");
    }
  }, [localTheme, prefersLight]);

  return [theme, toggleTheme];
};
