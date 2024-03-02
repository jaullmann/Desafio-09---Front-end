import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { InputField } from "../../components/InputField";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";


export function Profile() {
  const { user, updateProfile, setInput } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const currentAvatar = user.avatar

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    setInput("")
  }, [])
  
  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }    

    // Combina os dados do usuário já existentes com o novo para não perder a img do perfil, caso não
    // seja modificada pelo usuário.
    const userUpdated = Object.assign(user, updated);

    const profileUpdated = await updateProfile({ user: userUpdated, avatarFile });
    profileUpdated && navigate('/')
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>  

      <header>
        <BackButton/>
      </header>

      <div id="content">
        
        <section id="profile-picture">
          <img 
            src={avatar} 
            alt={user.name} 
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar" 
              type="file"               
              onChange={handleChangeAvatar} 
            />
          </label>          
        </section>

        <Form>
          
          <InputField
            icon={FiUser}
            placeholder = "Nome"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <InputField
            icon={FiMail}
            placeholder = "E-mail"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputField
            icon={FiLock}
            placeholder = "Senha atual"
            type="password"
            onChange={e => setPasswordOld(e.target.value)}
          />
          <InputField
            icon={FiLock}
            placeholder = "Nova senha"
            type="password"
            onChange={e => setPasswordNew(e.target.value)}
          />
          <Button title="Salvar" onClick={handleUpdate} />

        </Form>
        
      </div>

    </Container>     
  )  
};