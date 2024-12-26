import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #7a288a;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ContactComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <ContactContainer>
      <ContactTitle>Get in Touch</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactComponent;
