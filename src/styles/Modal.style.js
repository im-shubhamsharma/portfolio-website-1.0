import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 40%;
  left:40%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  background: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  text-align: center;

  p {
    font-weight: bold;
  }

  span {
    position: absolute;
    top: 0;
    right: 8px;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
  }
`;
