import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";

import { Container, Profile, Input } from './styles';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';


export function Header(){

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  // function handleMovieSearch(movieTitle) {

  //   useEffect(() => { 
  //     async function fetchMovies() {
  //       const response = await api.get(`/notes?title=${search}`);
  //       setMovies(response.data);
  //     }

  //     fetchMovies();

  //   }, [search]);

  // }

  return (
    <Container>

      <div>
        <Link to="/">RocketMovies</Link>

        <Input 
          type="text" 
          placeholder='Pesquisar pelo título' 
          // onChange={() => setSearch(e.target.value)}
        />

        <Profile>        
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>            
            <span onClick={signOut}>sair</span>
          </div>
          <Link to="/profile">
            <img 
              src={avatarUrl} 
              alt={user.name}
            />
          </Link>          
        </Profile>
      </div>     

    </Container>
  )
}