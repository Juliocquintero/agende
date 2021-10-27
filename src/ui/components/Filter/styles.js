import styled from 'styled-components';

export const Form = styled.form`
  padding: 0 3rem;
  padding-top: 16px;
  width: 50%;
  margin: 0 auto;
  min-width: 320px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'labelStart inputStart'
    'labelEnd inputEnd'
    'labelSubmit labelCancel';
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 0.5rem;
  /* grid-auto-columns: 1fr 0 1fr; */
  grid-column-gap: 0.5rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  @media only screen and (min-width: 600px) {
    width: 100%;
    justify-content: end;
    grid-template-columns: 5rem 15rem 5rem 15rem 4rem 4rem;
    grid-template-areas: 'labelStart inputStart labelEnd inputEnd labelSubmit labelCancel';
  }
`;

export const Label = styled.label`
  font-family: “Helvetica”, arial, sans-serif;
  font-size: 16px;
  line-height: 18px;
  text-align: right;

  &[id='labelStart'] {
    grid-area: labelStart;
  }
  &[id='labelEnd'] {
    grid-area: labelEnd;
  }
  &[id='labelCancel'] {
    grid-area: labelCancel;
    cursor: pointer;
  }
  &[id='labelSubmit'] {
    grid-area: labelSubmit;
    cursor: pointer;
  }
`;

export const InputDate = styled.input`
  appearance: none;
  color: #1d1d1d;
  font-family: “Helvetica”, arial, sans-serif;
  font-size: 1.5rem;
  border: 1px solid #ecf0f1;
  border-radius: 0;
  background: #ecf0f1;
  padding: 4px;
  display: inline-block;
  visibility: visible;
  width: 15rem;
  position: relative;
  box-shadow: none;
  -webkit-appearance: none;
  &:focus {
    color: #035c5a;
    background-color: #ffffff;
    border-color: #033528;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(3, 92, 90, 0.45);
  }
  &:-webkit-calendar-picker-indicator {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background: 0 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    pointer-events: auto;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-clear-button {
    -webkit-appearance: none;
    display: none;
  }

  &[id='inputStart'] {
    grid-area: inputStart;
  }
  &[id='inputEnd'] {
    grid-area: inputEnd;
  }
`;

export const Button = styled.input`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
`;
