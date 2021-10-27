import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
 0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.01);
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  text-align: center;
  align-items: baseline;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: ${(props) => `#${props.bgColor}30` || 'fafafa'};
  &[title='Drag in'] {
    animation: ${pulse} 1.5s infinite;
    transform: rotate(180deg);
    border: thin dashed #000;
    background-color: rgba(0, 128, 0, 0.1);
    animation-timing-function: linear;
  }
`;
