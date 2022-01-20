import React from "react";

//Routing
import { Route, Routes } from "react-router-dom";

//Styling
import GlobalStyles from "./Components/GlobalStyles";

//Import Pages & Components
import LandingPage from "./Pages/LandingPage";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
