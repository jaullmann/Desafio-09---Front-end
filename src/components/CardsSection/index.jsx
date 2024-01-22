import { FiStar } from "react-icons/fi";
import { Container } from './styles'
import { CardsSectionTag } from "../CardsSectionTag";


export function CardsSection({ movieTitle = "Null Title", description = "Null description", 
rating = 3, tags = ["Null"] }) {
  return (
    <Container $score={rating}>
      <h2>{movieTitle}</h2>
      <div className="rating">
        <FiStar/>
        <FiStar/>
        <FiStar/>
        <FiStar/>
        <FiStar/>
      </div>      
      <p>{description}</p>
      <section>
        {tags ? tags.map( tag => <CardsSectionTag gender={ tag }/> ) : undefined}
      </section>  
    </Container>
  )
};