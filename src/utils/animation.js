import { motion} from "framer-motion";

//----------------------------------
// Header and Navbar
//----------------------------------

export const headerVariant = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const headerChildren = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

//----------------------------------
// About
//----------------------------------

export const FadeIn = {
  offscreen: {
    opacity:0,
    y:100,
  },
  onscreen: {
    opacity:1,
    y: 0,
    transition: {
       duration: 2,
    },
  },
};

