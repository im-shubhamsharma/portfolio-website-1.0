import styled from "styled-components";
import {motion} from "framer-motion"

export const FooterSection = styled(motion.div)`
  /* border: 1px dashed red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 20vh;
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 500px) {
    width: 100%;
    gap: 1rem;
  }
`;

export const IconsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    width: 2rem;
  }
`;
export const TextContainer = styled(motion.h4)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  span {
    color: ${(props) => props.theme.primaryColor};
  }

  #sign {
    font-family: "Qwitcher Grypen", cursive;
    font-size: 2.2rem;
  }

  img {
    width: 1.5rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;

    img {
      width: 1.2rem;
    }
  }
`;
