import React from 'react';
import styled from 'styled-components';

const ButtonComponents = styled.button<{
  $startColor: string;
  $endColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  perspective: 30rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);

&::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: linear-gradient(
    320deg,
    ${({ $startColor }) => $startColor || 'rgba(0, 140, 255, 0.678)'},
    ${({ $endColor }) => $endColor || 'rgba(0, 255, 0, 0.308)'}
  );
  z-index: 1;
  transition: background 3s;
}

&:hover::before {
  animation: rotate 1s;
  transition: all 0.5s;
}

& img {
width: 40px;
}

@keyframes rotate {
  0% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
`;

interface IButtonComponent {
  event: React.MouseEventHandler<HTMLButtonElement>;
  startColor: string;
  endColor: string;
  children: React.ReactNode;
}

const ButtonComponent1: React.FC<IButtonComponent> = ({
  event,
  children,
  startColor,
  endColor,
}) => {
  return (
    <ButtonComponents
      onClick={event}
      $startColor={startColor}
      $endColor={endColor}
    >
      {children}
    </ButtonComponents>
  );
};

export default ButtonComponent1;
