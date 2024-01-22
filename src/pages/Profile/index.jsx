import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { InputField } from "../../components/InputField";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
// import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>  

      <header>
        <BackButton/>
      </header>

      <content>
        
        <section id="profile-picture">
          <img 
            src="https://github.com/jaullmann.png" 
            alt="Foto do usuário" 
          />
          <div id="upload-picture">
            <FiCamera/>
          </div>          
        </section>

        <Form>
          
          <InputField
            icon={FiUser}
            placeholder = "Nome do usuário"
            type="text"
          />
          <InputField
            icon={FiMail}
            placeholder = "E-mail"
            type="text"
          />
          <InputField
            icon={FiLock}
            placeholder = "Senha atual"
            type="password"
          />
          <InputField
            icon={FiLock}
            placeholder = "Nova senha"
            type="password"
          />
          <Button title="Salvar"/>
          {/* <link to="#">
            Voltar para o login
          </link> */}

        </Form>
        
      </content>

    </Container>     
  )  
};