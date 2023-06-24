import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { PokemonDetailsPage } from './PokemonDetailsPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <PokemonDetailsPage />
  </React.StrictMode>
);
