import styled from "styled-components";
import { motion } from "framer-motion";

export const CloudsContainer = styled(motion.div)`
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 9;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );

  @media (max-width: 1080px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
   
  }
`;

export const Cloud = styled(motion.div)`
  position: relative;
  background: #fff;
  background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(5%, #fff),
    color-stop(100%, #f1f1f1)
  );
  background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);
  background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);

  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

  height: 120px;
  width: 350px;
  opacity: 0.6;
  
  &:after,
  &:before {
      background: #fff;
      content: "";
      position: absolute;
      z-index: -1;
  }

  &:after {
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;

    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  &:before {
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
    border-radius: 200px;

    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }

  @media (max-width: 1080px) {
    scale: 0.6;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    /* height: 200px;
    width: 350px;

    &:before {
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
      border-radius: 200px;

      width: 160px;
      height: 160px;
      right: 50px;
      top: -90px;
    }

    &:after {
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
      border-radius: 100px;

      height: 80px;
      left: 50px;
      top: -50px;
      width: 100px;
    } */
  }
`;
