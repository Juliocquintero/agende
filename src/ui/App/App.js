import { useContext } from 'react';
import DataContext from '../../hoc/context/DataContext';
import Error404 from '../components/Error404';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import ReserveTable from '../components/ReserveTable';
const App = () => {
  const { reserves, reservesByStatus, error } = useContext(DataContext);
  let statusList = Object.keys(reservesByStatus);
  return (
    <>
      <Filter />
      {Object.keys(error).length > 0 ? (
        <Error404 {...error} />
      ) : reserves?.length === 0 ? (
        <Loader />
      ) : (
        statusList?.map((el) => <ReserveTable name={el} key={el} />)
      )}
    </>
  );
};

export default App;
