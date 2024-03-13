import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { PantallaProvider } from './components/PantallaContext'; // Importa el contexto

import Layout from './components/Layout';
import Main from './components/Main';

import Rooms from './pages/Rooms';
import Services from './pages/Services'
import Offers from './pages/Offers'
import DiscoverPisco from './pages/DiscoverPisco'
import Faq from './pages/Faq'
import ClaimsBook from './pages/ClaimsBook'
import Legal from './pages/Legal'
import About from './pages/About';
import Cookies from './pages/Cookies';
import Rules from './pages/Rules';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Main />,
      },
      {
        path: '/habitaciones',
        element: <Rooms />,
      },
      {
        path: '/servicios',
        element: <Services />,
      },
      {
        path: '/ofertas',
        element: <Offers />,
      },
      {
        path: '/pisco',
        element: <DiscoverPisco />,
      },
      {
        path: '/preguntas',
        element: <Faq />,
      },
      {
        path: '/reclamos',
        element: <ClaimsBook />,
      },
      {
        path: '/legal',
        element: <Legal />,
      },
      {
        path: '/sobrenosotros',
        element: <About/>,
      },
      {
        path: '/cookies',
        element: <Cookies/>,
      },
      {
        path: '/reglamento',
        element: <Rules/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PantallaProvider> {/* Wrap de PantallaProvider alrededor de la aplicación */}
      <RouterProvider router={router} />
    </PantallaProvider>
  </React.StrictMode>,
);
