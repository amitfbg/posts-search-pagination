import React from "react";
import Main from "./Main";
import { APIContextProvider } from "./context/ApiContext";

function App() {
  return (
    <APIContextProvider>
      <Main />
    </APIContextProvider>
  );
}

export default App;
