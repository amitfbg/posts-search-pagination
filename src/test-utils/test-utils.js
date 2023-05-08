import React from "react";
import { APIContextProvider } from "../context/ApiContext";

export const wrapperComponent = (children) => (
  <APIContextProvider>{children}</APIContextProvider>
);
