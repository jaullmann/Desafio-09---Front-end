import { useState } from 'react';

import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { InputField } from "../../components/InputField";
import { MainLogo } from "../../components/MainLogo";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';


export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();  

  function handleSignin() {
    signIn({ email, password });
  }

  return (
    <Container>

      <Form>
        <MainLogo slogan={"Faça seu login"}/>
        <InputField
          icon={FiMail}
          placeholder = "E-mail"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <InputField
          icon={FiLock}
          placeholder = "Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignin} />
        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background/>           

    </Container>     
  )  
};