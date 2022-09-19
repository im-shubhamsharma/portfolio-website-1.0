import React from "react";
import { StyledModal, StyledBackdrop } from "../styles/Modal.style";

const Modal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <StyledBackdrop className="backdrop">
          <StyledModal>
            <p>
              Hey there! 😄 Thanks for your message. I will get back to you
              soon.
            </p>
            <span onClick={() => closeModal()}>X</span>
          </StyledModal>
        </StyledBackdrop>
      )}
    </>
  );
};

export default Modal;
