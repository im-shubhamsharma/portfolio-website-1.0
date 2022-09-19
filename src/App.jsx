import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Cover from "./components/Cover";
import Cover2 from "./components/Cover2";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./styles/Theme";
import { useDarkMode } from "./hooks/useDarkMode";
import Modal from "./components/Modal";
import { useInView } from "framer-motion";

//-------------------------------------------------
import SpringCover from "./components/SpringCover";

//----------------------------------------------------

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, themeToggler] = useDarkMode(); 
  const [primaryColor, setPrimaryColor] = useState("#f51720");
  const themeMode =
    theme === "light" ? LightTheme(primaryColor) : DarkTheme(primaryColor);
  //-------------------------------------------
  //-------------------------------------------

  const homeRef = useRef(null);
  const homeView = useInView(homeRef);
  //-------------------------------------------

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Home homeRef={homeRef} />
        <div style={{ position: "relative" }}>
          <Header
            homeView={homeView}
            theme={theme}
            themeToggler={themeToggler}
          />
          <About />
          <Projects />
          <Contact setShowModal={setShowModal} />
          {!homeView && <Cover />}
          {!homeView && <Cover2 setPrimaryColor={setPrimaryColor} />}
          <SpringCover />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
