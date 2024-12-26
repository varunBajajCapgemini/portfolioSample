import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  color: #7a288a;
  margin-bottom: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
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

const AboutComponent = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutDescription>
        I'm a highly motivated and experienced developer with a passion for creating innovative solutions. I have a strong background in web and mobile app development, and I'm always looking for new challenges to take on.
      </AboutDescription>
      <ButtonsContainer>
        <Button>Download CV</Button>
        <Button>Hire Me</Button>
      </ButtonsContainer>
    </AboutContainer>
  );
};

export default AboutComponent;
