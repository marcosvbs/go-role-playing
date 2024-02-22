import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { CharacterSheetContextProvider } from "./contexts/CharacterSheetContext";
import { StepsSelectionContextProvider } from "./contexts/StepsSelectionContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CharacterSheetContextProvider>
          <StepsSelectionContextProvider>
            <Router />
          </StepsSelectionContextProvider>
        </CharacterSheetContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
