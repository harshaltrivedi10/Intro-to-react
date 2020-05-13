import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import "core-js/stable";
import "regenerator-runtime/runtime";

const App = () => {
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
