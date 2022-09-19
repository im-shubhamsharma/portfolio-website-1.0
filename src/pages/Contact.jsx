import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledFormErrors,
  ContactContainer,
  FooterContainer,
} from "../styles/Contact.style";
import { Container, Title, SubTitle, Para, Button } from "../styles/Mixin";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FadeIn } from "../utils/animation";

//------------------------------------------------

const Contact = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  //--------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));

    setFormErrors((error) => ({
      ...error,
      [name]: "",
    }));
  };
  //--------------------------
  // function to validate our contact message data
  const validate = (data) => {
    let flag = true;
    for (let key in data) {
      if (key === "subject") continue;

      if (data[key].length === 0) {
        setFormErrors((error) => ({
          ...error,
          [key]: `${key} is required!`,
        }));
        flag = false;
      } else {
        setFormErrors((error) => ({
          ...error,
          [key]: "",
        }));
      }
    }
    return flag;
  };

  // --------------------------------------
  const sendEmail = (e) => {
    e.preventDefault();

    if (validate(formData)) {
      emailjs
        .sendForm(
          "service_7i1io6v",
          "template_c9kvspv",
          form.current,
          "LlIq6aFgUVcEiOOcK"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setShowModal(true);
      close();
    }
  };
  // ---------------------
  const close = () => {
    setTimeout(() => setShowModal(false), 10000);
    console.log("modal succesfully closed");
  };
  //----------------------
  // animation
    
  //----------------------

  return (
    <Container
      style={{ paddingBottom: 0 }}
      id="contact"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 1 }}
    >
      <ContactContainer variants={FadeIn}>
        <motion.div variants={FadeIn}>
          <SubTitle>CONTACT</SubTitle>
          <Title>Get In Touch</Title>
        </motion.div>
        <StyledForm ref={form} onSubmit={sendEmail} variants={FadeIn}>
          <StyledInput
            variants={FadeIn}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name.length > 0 && (
            <StyledFormErrors>{formErrors.name}</StyledFormErrors>
          )}

          <StyledInput
            variants={FadeIn}
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email.length > 0 && (
            <StyledFormErrors>{formErrors.email}</StyledFormErrors>
          )}
          <StyledInput
            variants={FadeIn}
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <StyledTextArea
            variants={FadeIn}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
          ></StyledTextArea>
          {formErrors.message.length > 0 && (
            <StyledFormErrors>{formErrors.message}</StyledFormErrors>
          )}

          <Button size={"md"} type="submit" variants={FadeIn}>
            SEND <ion-icon name="send-outline"></ion-icon>
          </Button>
        </StyledForm>
      </ContactContainer>

      <FooterContainer variants={FadeIn}>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Contact;
