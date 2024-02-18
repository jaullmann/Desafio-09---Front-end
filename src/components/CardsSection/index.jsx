import { FiStar } from "react-icons/fi";
import { Container } from './styles'
import { CardsSectionTag } from "../CardsSectionTag";


export function CardsSection({ movieData }) {
  return (
    <Container $score={movieData.rating}>
      <h2>{movieData.movieTitle}</h2>
      <div className="rating">
        <FiStar/>
        <FiStar/>
        <FiStar/>
        <FiStar/>
        <FiStar/>
      </div>      
      <p>{movieData.description}</p>
      <section>
        {movieData.tags ? movieData.tags.map( tag => <CardsSectionTag gender={ tag }/> ) : undefined}
      </section>  
      {/* {...rest} */}
    </Container>
  )
};