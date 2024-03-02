import { Routes, Route, Navigate } from 'react-router-dom';

import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketmovies:user");

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<SignUp/>}/>

      {/* Rota em caso de entrada inválida pelo usuário - redireciona para login */}
      { !user && <Route path="*" element={<Navigate to="/"/>} /> }
    </Routes>
  )
}