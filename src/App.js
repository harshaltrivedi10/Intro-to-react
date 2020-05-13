import React from "react";
import {
    render
} from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Trip",
            animal: "Dog",
            breed: "Golden Retriever",
        }),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese",
        }),
        React.createElement(Pet, {
            name: "Oscar",
            animal: "Dog",
            breed: "Labrador",
        }),
    ]);
};

render(React.createElement(App), document.getElementById("root"));