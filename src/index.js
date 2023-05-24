import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Game from './Game';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Game />
  </StrictMode>
);
