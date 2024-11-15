import React from 'react';
import styled from 'styled-components';

const ButtonComponents = styled.button`
  padding: 0.1em 0.25em;
  width: 13em;
  height: 4.2em;
  background-color: #212121;
  border: 0.08em solid #fff;
  border-radius: 0.3em;
  font-size: 12px;
  cursor: pointer;
  
& span {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0.4em;
  width: 8.25em;
  height: 2.5em;
  background-color: purple;
  border-radius: 0.2em;
  font-size: 1.5em;
  color: #fff;
  border: 0.08em solid #fff;
  box-shadow: 0 0.4em 0.1em 0.019em #fff;
}

& span:hover {
  transition: all 0.2s;
  transform: translate(0, 0.4em);
  box-shadow: 0 0 0 0 #fff;
}

& span:not(hover) {
  transition: all .2s;
}
`;

interface IButtonComponent2 {
  event: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const HoverClickButton2: React.FC<IButtonComponent2> = ({
  event,
  children,
}) => {
  return (
    <ButtonComponents onClick={event}>
      {' '}
      <span>{children}</span>
    </ButtonComponents>
  );
};

export default HoverClickButton2;
