import { FiStar, FiClock } from "react-icons/fi";
import { Container } from './styles'
import { BackButton } from "../BackButton";
import { MovieSectionTag } from "../MovieSectionTag";


export function MovieSection({ movieTitle, description, rating, tags }) {
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
            src="https://github.com/jaullmann.png" 
            alt="Ícone com foto do usuário" 
          />
          <p id="user_data">
            Por Jorge Ullmann
          </p>
          <FiClock/>
          <p id="timestamp">
            06/01/2024 às 18:00
          </p>
        </div>

        <section>
          {tags ? tags.map(tag => <MovieSectionTag gender={tag}/>) : undefined}
        </section>

        <article>
          {description}
        </article>
      </div>     

    </Container>
  )
};