import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { MovieSection } from "../../components/MovieSection";


export function MovieDescription({ 
  title = "Movie Title", 
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis aspernatur facilis, possimus laudantium ipsa, quia molestias aliquam soluta quod culpa. Corporis, explicabo sequi? Eligendi veritatis praesentium similique corrupti tenetur.", 
  rating = 4, 
  tags = ["Null 1", "Null 2"] }) {
  return (
    <Container>
      
      <header>
        <Header/>  
      </header>        

      <Content>
        <MovieSection
          movieTitle={ title } 
          description={ description }                
          rating={ rating }
          tags={ tags }
        />
      </Content>     
    
    </Container>     
  )  
};