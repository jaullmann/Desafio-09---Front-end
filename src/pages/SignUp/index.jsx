import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";

import { useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { InputField } from "../../components/InputField";
import { MainLogo } from "../../components/MainLogo";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp() {    
    if (!name || !email || !password) {
      return alert("Todos os campos devem ser preenchidos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar o usuário");
        }
      });
  }

  return (
    <Container>

      <Form>
        <MainLogo slogan={"Crie sua conta"}/>
        <InputField
          icon={FiUser}
          placeholder = "Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />
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
        <Button title="Cadastrar" onClick={handleSignUp} />
        {/* <link to="#">
          Voltar para o login
        </link> */}
        <BackButton text="Voltar para o login"/>
      </Form>      

      <Background/>           

    </Container>     
  )  
};