import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StyledModal, StyledBackdrop } from "./styles/Modal.styled";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "400px",
    opacity: 1,
  },
};

const Modal = ({ showModal, setShowModal }) => {

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence wait>
      {showModal && (
        <StyledBackdrop
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <StyledModal variants={modal}>
            <p>
              Hey there! 😄 Thanks for your message. I will get back to you
              soon.
            </p>
            <span onClick={() => closeModal()}>X</span>
          </StyledModal>
        </StyledBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
