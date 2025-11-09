import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home";
import Faq from "./routes/Faq";
import Contato from "./routes/Contato";
import Error from "./routes/Error";
import Ajuda from "./routes/Ajuda";
import Equipe from "./routes/Equipe";
import Sobre from "./routes/Sobre";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";
import PrimeiroContato from "./routes/Primeiro-Contato";
import EditarPerfil from "./routes/EditarPerfil";

import "./global.css";

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
      { path: "/ajuda/:id", element: <Ajuda /> },
      { path: "/equipe", element: <Equipe /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/primeiro-contato", element: <PrimeiroContato /> },
      { path: "/editar-perfil", element: <EditarPerfil /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
