import { createContext, useEffect, useReducer, useState } from 'react';
import { TYPES } from './actions';
import { useFetch } from '../../api/useFetch';
import { dataInitialState, reducer } from './reducers';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, dataInitialState);
  const { reserves, reservesByStatus, error } = state;
  const [filtred, setFiltred] = useState(false);
  const [dragDrops, setDragDrops] = useState(false);

  const orderByStatus = (status, data) => {
    dispatch({ type: TYPES.ADD_TO, payload: { status, data } });
  };

  const readData = (data) => {
    dispatch({ type: TYPES.READ_DATA, payload: data });
  };

  const moveTo = (e) => {
    const dataFrom = e?.dataTransfer.getData('Data');
    const dataTo = e?.target?.parentNode.id;
    const nameTo =
      e.target.parentNode.dataset.listname || e.target.parentNode.parentNode.dataset.listname;
    const newObject = JSON.parse(dataFrom);

    if (newObject.from === dataTo || !dataTo) return null;

    const dataToState = {
      from: newObject.from,
      data: newObject.data,
      to: dataTo,
      nameTo: nameTo,
    };
    e.stopPropagation();
    useFetch.moveElement(dataToState);
    dispatch({ type: TYPES.MOVE_TO, payload: dataToState });
  };

  const setError = (error) => {
    dispatch({ type: TYPES.SET_ERROR, payload: error });
  };

  const cancelReserve = (data, name) => {
    if (!data || name) return null;
    const dataCancel = {
      data,
      from: name,
    };
    dispatch({ type: TYPES.CANCEL, payload: dataCancel });
    useFetch.moveElementToCancel(dataCancel);
  };

  const filter = (e) => {
    if (!e) {
      setFiltred(false);
    } else {
      let startDatateInMiliseconds = new Date(e?.target?.start?.value).getTime();
      let endDatateInMiliseconds = new Date(e?.target?.end?.value).getTime();
      let parameters = {
        start: startDatateInMiliseconds,
        end: endDatateInMiliseconds,
      };
      setFiltred(parameters);
    }
  };

  const handleDragBox = (status) => {
    setDragDrops(status);
  };

  useEffect(() => {
    let url = 'https://agende-88be8-default-rtdb.firebaseio.com/reserves.json';
    useFetch.getData(url, readData, setError);
  }, []);

  useEffect(() => {
    reserves.forEach((el) => {
      const { status } = el;
      orderByStatus(status, el);
    });
  }, [reserves]);

  const value = {
    reserves,
    reservesByStatus,
    error,
    orderByStatus,
    cancelReserve,
    moveTo,
    filtred,
    filter,
    dragDrops,
    handleDragBox,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider };

export default DataContext;
