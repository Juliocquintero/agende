import { useContext } from 'react';
import DataContext from '../../../hoc/context/DataContext';
import { ButtonCancel, DataItem, ItemContainer } from './styles';

const ReserveItem = ({ data, name }) => {
  const { cancelReserve, handleDragBox } = useContext(DataContext);
  const { id, start, end, client, price } = data;
  const { first_name, last_name, email } = client;

  const dateStart = new Date(start).getTime();
  const dateEnd = new Date(end).getTime();
  const dateStartShow = new Date(dateStart).toLocaleDateString();
  const dateEndShow = new Date(dateEnd).toLocaleDateString();

  const dateNow = new Date().getTime();

  const draggable = dateNow <= dateStart;

  const handleDragStar = (e, item) => {
    handleDragBox(true);
    const sendData = {
      from: e.target.id,
      data: item,
    };
    e?.dataTransfer.setData('Data', JSON.stringify(sendData));
  };

  const handleDragEnd = () => {
    handleDragBox(false);
  };

  const handleCancelado = () => {
    let confirmCancel = window.confirm('Are you sure of move this element to cancel?');
    if (confirmCancel) {
      cancelReserve(data, name);
    }
  };

  return (
    <>
      <ItemContainer
        draggable={draggable}
        title={draggable ? 'Drag item' : 'Item not draggable due to date'}
        key={id}
        onDragStart={(e) => handleDragStar(e, data)}
        onDragEnd={handleDragEnd}
        id={name}
      >
        <DataItem>
          {first_name} {last_name}
        </DataItem>
        <DataItem>{email}</DataItem>
        <DataItem>{dateStartShow}</DataItem>
        <DataItem>{dateEndShow}</DataItem>
        <DataItem>{`$${price.toLocaleString()}`}</DataItem>

        <ButtonCancel onClick={handleCancelado}>
          <i className="fas fa-trash-alt" />
        </ButtonCancel>
      </ItemContainer>
    </>
  );
};

export default ReserveItem;
