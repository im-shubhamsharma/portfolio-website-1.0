import {useState} from 'react';
import Home from "./components/Home";
import About from "./components/About";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modal from  "./components/Modal"
import SpringCover from "./components/SpringCover"
import { lightTheme, darkTheme } from './components/styles/Theme';

// const theme = {
//   colors: {
//     background: "#222426",
//     primary: "#f51720",
//     text: "rgb(255, 255, 255)",
//   },
 
// };

function App() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(false); //false dark and true light

  console.log(theme);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        {/* <Header/> */}
        <Home theme={theme} setTheme={setTheme} />
        <About />
        <Projects />
        <Contact showModal={showModal} setShowModal={setShowModal} />
        <SpringCover />
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
