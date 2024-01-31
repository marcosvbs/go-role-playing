import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { RaceSelection } from "./pages/RaceSelection";
// import { Home } from "./pages/Home";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Home /> */}
      <RaceSelection />
      <GlobalStyle />
    </ThemeProvider>
  );
}
