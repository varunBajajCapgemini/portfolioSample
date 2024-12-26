import React from 'react';
import styled, {keyframes} from 'styled-components';
const rotate = keyframes`
  0% {
    opacity:transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #7a288a;
  margin-bottom: 40px;
`;

const GeometricShapes = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Shape = styled.div`
  width: 50px;
  height: 50px;
  background-color: #7a288a;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

const Shape2 = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffd700;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

const Shape3 = styled.div`
  width: 20px;
  height: 20px;
  background-color: #7a288a;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;



const TitleComponent = () => {
  return (
    <TitleContainer>
      <Title>Welcome to Future</Title>
      <Description>A one stop solutions for your web and mobile apps</Description>
      <GeometricShapes>
        <Shape />
        <Shape2 />
        <Shape3 />
      </GeometricShapes>
    </TitleContainer>
  );
};

export default TitleComponent;
