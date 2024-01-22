import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { InputField } from "../../components/InputField";
import { MainLogo } from "../../components/MainLogo";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';


export function Login() {
  return (
    <Container>

      <Form>
        <MainLogo slogan={"Faça seu login"}/>
        <InputField
          icon={FiMail}
          placeholder = "E-mail"
          type="text"
        />
        <InputField
          icon={FiLock}
          placeholder = "Senha"
          type="password"
        />
        <Button title="Entrar"/>
        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background/>           

    </Container>     
  )  
};