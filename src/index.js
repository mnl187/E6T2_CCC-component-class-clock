import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {scryRenderedDOMComponentsWithTag} from "react-dom/test-utils";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root'),
);