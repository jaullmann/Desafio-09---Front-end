import { Container, Profile, Input } from './styles';
import { Link } from 'react-router-dom';

export function Header(){
  return (
    <Container>

      <div>
        <Link to="/">RocketMovies</Link>

        <Input 
          type="text" 
          placeholder='Pesquisar pelo título' 
        />

        <Profile to="/profile">        
          <div>
            <strong>Jorge Ullmann</strong>
            <span>sair</span>
          </div>
          <img 
            src="https://github.com/jaullmann.png" 
            alt="Foto do usuário" 
          />
        </Profile>
      </div>     

    </Container>
  )
}