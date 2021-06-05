import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./config";
import RootNavigator from "./RootNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import "./config/styles/style.css";
import "./config/translations/i18n";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
