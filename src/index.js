// Import our custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    ,
  </React.StrictMode>,
);
