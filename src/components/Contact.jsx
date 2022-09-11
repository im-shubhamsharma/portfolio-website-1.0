import React, {useState} from 'react'
import {
  ContactContainer,
  SubContainer1,
  Title,
  SubTitle,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "./styles/Contact.styled";

const Contact = () => {

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
       const {name, value} = e.target;

       setMessage(prevMessage => ({
        ...prevMessage,   
        [name] : value
       }))
  }

  return (
    <ContactContainer>
      <SubContainer1>
        <SubTitle>CONTACT</SubTitle>
        <Title>Get In Touch</Title>
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
          <StyledButton>
            SEND <ion-icon name="send-outline"></ion-icon>
          </StyledButton>
        </StyledForm>
      </SubContainer1>
    </ContactContainer>
  );
}

export default Contact