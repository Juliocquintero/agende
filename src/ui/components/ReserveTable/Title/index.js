import { Length, Title, TitleContainer } from './styles';

const TableTitle = ({ reserveStatus, reservesWithFiltres }) => {
  return (
    <TitleContainer>
      <Title>{reserveStatus?.split('_')?.join(' ')}</Title>
      <Length>{reservesWithFiltres.length}</Length>
    </TitleContainer>
  );
};

export default TableTitle;
