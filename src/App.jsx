import {useState} from 'react';
import Home from "./components/Home";
import About from "./components/About";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modal from  "./components/Modal"

const theme = {
  colors: {
    background: "#222426",
    primary: "#f51720",
    secondary: "",
    textPrimary: "rgb(255, 255, 255)",
    textSecondary: "#ff73ce",
  },
  textGradient: {
    background:
      "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);",
  },
};

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Home />
        <About />
        <Projects />
        <Contact showModal={showModal} setShowModal={setShowModal} />
      </>
    </ThemeProvider>
  );
}

export default App;

/*
#f51720 - red tint
#2ff3e0 - green tint
#c7f954 - another green tint
rgb(255, 115, 206) - pink
*/
