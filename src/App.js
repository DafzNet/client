import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@arwes/core";
import { AnimatorProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";
import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import AppLayout from "./pages/AppLayout";
import { theme, resources, sounds } from "./settings";

const App = () => {
  return (
    <Router>
      <AnimatorProvider>
        <BleepsProvider audio={sounds}>
          <ThemeProvider theme={createTheme(theme)}>
            <ArwesThemeProvider>
              <StylesBaseline />
              <AppLayout />
            </ArwesThemeProvider>
          </ThemeProvider>
        </BleepsProvider>
      </AnimatorProvider>
    </Router>
  );
};

export default App;
