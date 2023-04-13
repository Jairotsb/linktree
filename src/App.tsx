import { useState } from "react";
import Links from "./components/Links";
import Title from "./components/Title";

import  { ThemeProvider } from 'styled-components';
import { ThemeButton } from "./components/ThemeButton";

const lightTheme = {
  background: "#bae6fd",
  text: "#1e40af",
};

const darkTheme = {
  background: "#1e3a8a",
  text: "#bae6fd",
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () =>
   {
    setIsDarkTheme(!isDarkTheme);
  }

  const theme = isDarkTheme ? darkTheme : lightTheme; 

  return (
      <div className={isDarkTheme ? 'landing lightTheme' : 'landing darkTheme'}>
        <Title switchTheme={theme} theme={isDarkTheme}/>
        <ThemeButton switchTheme={handleThemeChange} theme={isDarkTheme}/>
        <Links />
      </div>
  );
}

export default App;
