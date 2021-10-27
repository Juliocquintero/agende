import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './hoc/context/DataContext';
import './styles/index.css';

import App from './ui/App/App';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,

  document.getElementById('root')
);
