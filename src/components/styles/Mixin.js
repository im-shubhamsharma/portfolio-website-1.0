import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled(motion.section)`
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    scroll-snap-align: none;
    height: auto;
  }
`;

export const StyledContainer = styled(motion.section)`
  height: 100vh;
  width: 51%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10vh; // to stay away from header
  gap:2rem;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 0 2rem;
    margin: 10vh 0; // to stay away from header
  }
`;

 export const SubTitle = styled(motion.h3)`
   color: ${({ theme }) => theme.colors.primary};


   @media only screen and (max-width: 768px) {
     font-size: 1rem;
   }
 `;

 export const StyledTitle = styled(motion.h1)`
   font-size: 2.2rem;
   /* background: ${({ theme }) => theme.textGradient.background};
   -webkit-text-fill-color: transparent;
   -webkit-background-clip: text; */

   @media only screen and (max-width: 768px) {
     font-size: 1.8rem;
   }
 `;

 export const StyledPara = styled(motion.p)`
   font-size: 1.4rem;
   line-height: 150%;

   @media only screen and (max-width: 768px) {
     font-size: 1rem;
     margin-bottom: 2rem;
   }
 `;

 // size xl, md, sm
 export const StyledButton = styled(motion.button)`
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: max-content;
   height: ${({size})=> size === "xl" ? "4.5rem" : ( size==="md" ? "3.5rem" : "2rem")};
   gap: 1rem;
   padding: 1rem;
   font-size: ${({ size }) => (size === "xl" ? "2.2rem" : "1rem" || "1rem")};

   border: 0;
   background-color: rgba(255, 255, 255, 0.1);
   backdrop-filter: blur(10px);
   
   text-decoration: none;
   color: ${({ theme, size }) => size === "xl" ? "#fff" : theme.colors.primary};
   letter-spacing: 2px;
   cursor: pointer;
   transition: all 0.3s linear 0s;

   &:hover {
     scale: 1.1;
   }

   .img {
     width: 2.5rem;

     img {
       width: 100%;
     }
   }

   @media only screen and (max-width: 768px) {
     width: 13rem;
     height: 2.5rem;
     font-size: ${({ size }) => (size === "xl" ? "1.4rem" : "1rem" || "1rem")};
     gap: 0.5rem;

     .img {
       width: 2rem;
     }
   }
 `;