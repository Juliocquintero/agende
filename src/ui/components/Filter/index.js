import { useContext } from 'react';
import DataContext from '../../../hoc/context/DataContext';
import { Button, Form, InputDate, Label } from './styles';

const Filter = () => {
  const { filtred, filter } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    filter(e);
  };

  const handleCancelFilter = () => {
    filter();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="inputStart" id="labelStart">
        Start
      </Label>
      <InputDate type="date" id="inputStart" name="start" required />

      <Label htmlFor="inputend" id="labelEnd">
        End
      </Label>
      <InputDate type="date" id="inputEnd" name="end" required />

      <Label htmlFor="buttonSubmit" id="labelSubmit">
        <i className="fas fa-search" />
      </Label>

      <Button type="submit" value="" id="buttonSubmit" />

      {filtred && (
        <>
          <Label htmlFor="buttonCancel" id="labelCancel">
            <i className="fas fa-times" />
          </Label>
          <Button type="reset" value="" id="buttonCancel" onClick={handleCancelFilter} />
        </>
      )}
    </Form>
  );
};

export default Filter;
