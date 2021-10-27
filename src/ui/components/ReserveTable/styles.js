import styled from 'styled-components';

// const Input = styled.input.attrs((props) => ({
//   // we can define static props
//   type: 'text',

//   // or we can define dynamic ones
//   size: props.size || '1em',
// }))`
//   color: palevioletred;
//   font-size: 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;

//   /* here we use the dynamically computed prop */
//   margin: ${(props) => props.size};
//   padding: ${(props) => props.size};
// `;

export const TableContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: scroll;
  @media screen and (min-width: 720px) {
    width: 80%;
    overflow: hidden;
  }
`;
export const Table = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
`;

export const DefaultItem = styled.li`
  display: grid;
  grid-template-columns: 20% 20% 15% 15% 15% 15%;
  justify-content: space-between;
  width: 100%;
  font-size: 10px;
  text-align: center;
  min-height: 50px;
  vertical-align: middle;
`;
