import React from "react";
import { AppContext } from "./context/contextApi";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function Hello() {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
}

export default Hello;
