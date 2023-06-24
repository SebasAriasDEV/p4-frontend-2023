import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokemonDetailsPage } from './PokemonDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pokemons/:pokemonId',
    element: <PokemonDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
