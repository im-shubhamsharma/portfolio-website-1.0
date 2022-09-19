import React from "react";
import { Cloud, CloudsContainer } from "../styles/Clouds.style";
//----------------------------------------------------------

const cloudContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 2,
    },
  },
};

const smallCloud = {
  hidden: {
    scale: 0.3,
  },
  visible: {
    x: ["-20vw", "110vw"],

    transition: {
      duration: 15,
      ease: "linear",
      repeat: "Infinity",
      repeatType: "loop",
    },
  },
};

const mediumCloud = {
  hidden: {
    scale: 0.45,
  },
  visible: {
    x: ["-30vw", "110vw"],

    transition: {
      duration: 19,
      ease: "linear",
      repeat: "Infinity",
      repeatType: "loop",
    },
  },
};

const largeCloud = {
  hidden: {
    scale: 0.6,
  },
  visible: {
    x: ["-40vw", "110vw"],

    transition: {
      duration: 25,
      ease: "linear",
      repeat: "Infinity",
    },
  },
};

//----------------------------------------------------------

function Clouds(props) {
  return (
    <CloudsContainer
      key={"0012"}
      variants={cloudContainerVariant}
      initial="hidden"
      animate="visible"
    >
      <Cloud size={"sm"} variants={smallCloud}></Cloud>
      <Cloud size={"lg"} variants={largeCloud}></Cloud>
      <Cloud size={"md"} variants={mediumCloud}></Cloud>
      <Cloud size={"sm"} variants={smallCloud}></Cloud>
      <Cloud size={"lg"} variants={largeCloud}></Cloud>
      <Cloud size={"md"} variants={mediumCloud}></Cloud>
      <Cloud size={"sm"} variants={smallCloud}></Cloud>
    </CloudsContainer>
  );
}

export default Clouds;
