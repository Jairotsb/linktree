import { useState } from "react";
import Links from "./components/Links";
import Title from "./components/Title";

import { ThemeButton } from "./components/ThemeButton";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () =>
   {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
      <div className={isDarkTheme ? 'landing lightTheme' : 'landing darkTheme'}>
        <Title theme={isDarkTheme}/>
        <ThemeButton switchTheme={handleThemeChange} theme={isDarkTheme}/>
        <Links />
      </div>
  );
}

export default App;
