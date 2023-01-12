import { ThemeContext } from "./context/Context";
import React, {useState} from 'react';
import ThemeToggleButton from "./ThemeToggleButton";
import '../src/App.css'


function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h1>Toggle theme</h1>
      <ThemeToggleButton />
      <div className={`body ${theme}`}>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
