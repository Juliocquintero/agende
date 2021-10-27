import { TableHeadContainer } from './styles';

const TableHead = ({ color, reserveStatus }) => {
  return (
    <TableHeadContainer bgColor={color} data-listname={reserveStatus}>
      <span>Name</span>
      <span>Email</span>
      <span>Start </span>
      <span>End</span>
      <span>Price</span>
      <span>Action</span>
    </TableHeadContainer>
  );
};

export default TableHead;
