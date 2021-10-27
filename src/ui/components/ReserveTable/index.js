import { useContext, useEffect, useState } from 'react';
import DataContext from '../../../hoc/context/DataContext';
import TableHead from './Head';
import TableBody from './Body';
import TableTitle from './Title';
import { Table, TableContainer } from './styles';

const ReserveTable = ({ name }) => {
  const { reservesByStatus, moveTo, filtred, handleDragBox } = useContext(DataContext);
  const [reserveStatus, setReserveStatus] = useState(undefined);
  const [reservesWithFiltres, setReservesWithFiltres] = useState(reservesByStatus[name]?.reserves);
  const [color, setColor] = useState('ffffff');

  const handleColor = (name) => {
    switch (name) {
      case 'attend':
        setColor('fab5f8');
        break;

      case 'locked':
        setColor('cacaca');
        break;

      case 'class':
        setColor('f08753');
        break;

      case 'reserved':
        setColor('77d0fa');
        break;

      case 'confirmed':
        setColor('b6ed80');
        break;

      case 'on_hold':
        setColor('ecbe51');
        break;

      case 'pending':
        setColor('fd8991');
        break;

      case 'canceled':
        setColor('f96140');
        break;
      case 'does_not_attend':
        setColor('fbc183');
        break;
      default:
        setColor('ffffff');
    }
  };

  useEffect(() => {
    setReserveStatus(name);
    handleColor(name);
    const contentFiltred = reservesByStatus[name].reserves.filter((el) => {
      let elStart = new Date(el.start).getTime();
      let elEnd = new Date(el.end).getTime();
      let filterStart = new Date(filtred?.start).getTime();
      let filterEnd = new Date(filtred?.end).getTime();
      if (filtred) {
        return elStart >= filterStart && elEnd <= filterEnd;
      } else {
        return el;
      }
    });
    filtred
      ? setReservesWithFiltres(contentFiltred)
      : setReservesWithFiltres(reservesByStatus[name]?.reserves);
  }, [reservesByStatus, name, filtred]);

  const handleDrop = (e) => {
    moveTo(e);
    handleDragBox(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <TableContainer
      className="reserve-list-container"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
    >
      <TableTitle reserveStatus={reserveStatus} reservesWithFiltres={reservesWithFiltres} />
      <Table>
        <TableHead color={color} reserveStatus={reserveStatus} />
        <TableBody
          name={name}
          color={color}
          reserveStatus={reserveStatus}
          reservesWithFiltres={reservesWithFiltres}
        />
      </Table>
    </TableContainer>
  );
};

export default ReserveTable;
