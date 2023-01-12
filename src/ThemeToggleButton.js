import { ThemeContext } from "./context/Context";
import {useContext} from 'react';

function ThemeToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  
  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className={theme === "light" ? "light" : "dark"}></div>
    </>
  );
}

export default ThemeToggleButton
