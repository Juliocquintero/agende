import styled from 'styled-components';

export const ItemContainer = styled.li`
  display: grid;
  grid-template-columns: 20% 20% 15% 15% 15% 15%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 10px;
  text-align: center;
  min-height: 50px;
  &[draggable='false'] {
    background-color: #66000025;
  }
  &span {
    border-right: 1px solid black;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const DataItem = styled.p`
  border-right: 1px solid black;
`;

export const ButtonCancel = styled.button`
  color: #00000080;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: min-content;
  margin: 0 auto;
`;
