import { useContext } from 'react';
import DataContext from '../../../../hoc/context/DataContext';
import ReserveItem from '../../ReserveItem';
import { DefaultItem } from '../styles';
import { ListContainer } from './styles';

const TableBody = ({ name, reserveStatus, reservesWithFiltres, color }) => {
  const { dragDrops } = useContext(DataContext);
  return (
    <ListContainer
      id={name}
      bgColor={color}
      data-listname={reserveStatus}
      title={dragDrops ? 'Drag in' : ''}
    >
      {reservesWithFiltres?.length === 0 && <DefaultItem>No hay datos...</DefaultItem>}

      {reservesWithFiltres?.map((item) => (
        <ReserveItem key={item.id} data={item} name={name} />
      ))}
    </ListContainer>
  );
};

export default TableBody;
