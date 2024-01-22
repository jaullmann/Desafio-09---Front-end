import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { InputField } from "../../components/InputField";
import { MainLogo } from "../../components/MainLogo";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

// import { Link } from 'react-router-dom'


export function SignUp() {
  return (
    <Container>

      <Form>
        <MainLogo slogan={"Crie sua conta"}/>
        <InputField
          icon={FiUser}
          placeholder = "Nome"
          type="text"
        />
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
        <Button title="Cadastrar"/>
        {/* <link to="#">
          Voltar para o login
        </link> */}
        <BackButton text="Voltar para o login"/>
      </Form>      

      <Background/>           

    </Container>     
  )  
};