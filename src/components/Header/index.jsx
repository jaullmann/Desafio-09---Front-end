import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Input, Profile } from "./styles";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function Header() {

  const { user, signOut, input, setInput } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar] = useState(avatarUrl);
  const navigate = useNavigate();
  const location = useLocation();

  function handleMovieSearch(e) {
    if (location !== '/') {
      navigate('/')
      setInput("")
    }
    setInput(e.target.value)
  }

  
  return (
    <Container>
      <div>
        <Link to="/">
          RocketMovies
        </Link>        
        <Input
          autoFocus
          value={input}
          onChange={(e) => handleMovieSearch(e)}
          placeholder="Pesquisar pelo título"
        />
        <Profile>
          <div>
            <strong onClick={() => navigate('/profile')}>{user.name}</strong> 
            <span onClick={signOut}>sair</span>
          </div>
          <Link to="/profile">                       
            <img src={avatar} alt="" />
          </Link>
              
        </Profile>
      </div>
                 
      

    </Container>     
  )  
};