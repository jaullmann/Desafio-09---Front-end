import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { FiStar, FiClock } from "react-icons/fi";
import { Container } from './styles'
import { BackButton } from "../BackButton";
import { MovieSectionTag } from "../MovieSectionTag";

import { useAuth } from "../../hooks/auth";

export function MovieSection({ movieTitle, description, rating, tags, lastUpdate }) {

  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function formatDateTime(datetime) {
    const date = new Date(datetime);  
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();  
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');  
    return `${day}/${month}/${year} às ${hours}:${minutes}`;
  }

  return (
    <Container $score={rating}>

      <div>
        <BackButton/>
      </div>
      
      <div>
        <title>
          <h1>{movieTitle}</h1>
          <div className="rating">
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
            <FiStar/>
          </div>    
        </title>      

        <div>
          <img 
            src={avatarUrl} 
            alt="Foto do perfil do usuário" 
          />
          <p id="user_data">
            {`Por ${user.name}`}
          </p>
          <FiClock/>
          <p id="timestamp">
            {formatDateTime(lastUpdate)}
          </p>
        </div>

        <section>
          {tags ? tags.map(tag => 
            <MovieSectionTag 
              gender={tag.name} 
              key={String(tag.id)}
            />) : 
            undefined}
        </section>

        <article>
          {description}
        </article>
      </div>     

    </Container>
  )
};