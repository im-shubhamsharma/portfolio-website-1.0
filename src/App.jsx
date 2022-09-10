import Home from "./components/Home";
import About from "./components/About";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const theme = {
  colors: {
    background: "#222426",
    primary: "rgb(211,115,108)",
    secondary: "#fff",
    textPrimary: "#ff73ce",
    textSecondary: "rgb(255, 255, 255)",
  },
};

const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme= {theme}>
    <>
      <GlobalStyles />
      <Home />
      <About />
      <Projects/>
      <Contact />
    </>
    </ThemeProvider>
  );
}

export default App;
