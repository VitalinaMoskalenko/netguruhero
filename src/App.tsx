import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./config";
import RootNavigator from "./RootNavigator";
import "./config/styles/style.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
