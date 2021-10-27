import styled from 'styled-components';

export const TableHeadContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 15% 15% 15% 15%;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${(props) => `#${props.bgColor}` || 'fafafa'};
`;
