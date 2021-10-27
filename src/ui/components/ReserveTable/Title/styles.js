import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`;

export const Title = styled.span`
  margin-left: 5%;
  font-weight: bold;
  font-size: 1.2rem;
  @media screen and (min-width: 1024px) {
    margin-left: 1%;
    font-size: 1.75rem;
  }
`;

export const Length = styled.span`
  margin-right: 5%;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (min-width: 1024px) {
    margin-right: 1%;
    font-size: 1.75rem;
  }
`;
