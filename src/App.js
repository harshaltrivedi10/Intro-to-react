import React, { useState } from "react";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import "core-js/stable";
import "regenerator-runtime/runtime";

const App = () => {
  const themeHook = useState("green");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/"> Adopt Me! </Link>
          </header>
          <Router>
            {/* order of declaration doesn't matter in reach router */}
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
