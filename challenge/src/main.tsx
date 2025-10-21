import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./global.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Error from './routes/Error/index.tsx';
import Ajuda from './routes/Ajuda/index.tsx';
import Equipe from './routes/Equipe/index.tsx';
import Sobre from './routes/Sobre/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/faq", element: <Faq /> },      
      { path: "/contato", element: <Contato /> }, 
      { path: "/ajuda", element: <Ajuda /> },
      { path: "/equipe", element: <Equipe /> },
      { path: "/sobre", element: <Sobre /> }


    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
