import React, { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
} from "./styles/Contact.styled";

import {
  StyledSection,
  StyledContainer,
  StyledTitle,
  SubTitle,
  StyledPara,
  StyledButton,
} from "./styles/Mixin";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  return (
    <StyledSection>
      <StyledContainer>
        <div>
          <SubTitle>CONTACT</SubTitle>
          <StyledTitle>Get In Touch</StyledTitle>
        </div>
        <StyledForm>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            value={message.name}
            onChange={handleChange}
          />
          <StyledInput
            type="email"
            name="email"
            placeholder="E-mail"
            value={message.email}
            onChange={handleChange}
          />
          <StyledTextArea
            name="message"
            placeholder="Message"
            value={message.message}
            onChange={handleChange}
            rows={10}
          />
          <StyledButton size={"md"}>
            SEND <ion-icon name="send-outline"></ion-icon>
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledSection>
  );
};

export default Contact;
