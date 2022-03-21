import React from "react";

//Routing
import { Route, Routes } from "react-router-dom";

//Styling
import GlobalStyles from "./Components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Themes } from "./Assets/Other/themes";
import { SetTheme } from "./Components/SetTheme";

//Import Pages & Components
import LandingPage from "./Pages/LandingPage";
import Nav from "./Components/Nav";

function App() {
  const [theme, toggleTheme] = SetTheme();
  return (
    <ThemeProvider theme={Themes[theme]}>
      <div className="App">
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<LandingPage theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/:id"
            element={<LandingPage theme={theme} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
