import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {/* condição para atribuir as rotas permitidas ao usuário, caso ele estiver ou não autenticado */}
      {/* é verificado se o usuário possui um conteúdo não vazio, conforme definido inicialmente pelo useState */}
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}