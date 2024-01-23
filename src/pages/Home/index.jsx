import { FiPlus } from "react-icons/fi"
import { Container, Content, Button } from "./styles";
import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";


export function Home({ MovieCards }) {
  return (
    <Container>
                 
      <Header/>  

      <Content>

        <section id='sub-header'>
          <h2>Meus filmes</h2>
          <Button to="/new">
            <FiPlus/>
            <button>Adicionar filme</button>
          </Button>
        </section>

        <section id='cards'>
          {/* {MovieCards ? MovieCards.map( card => <CardsSection/> ) : undefined} */}
          <CardsSection
            movieTitle={"Indiana Jones"}
            rating={4}
            description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, provident ex laborum consequatur consequuntur ipsam necessitatibus, veniam commodi nesciunt doloribus quam itaque sed enim accusamus odio labore nisi voluptates ipsa!"}
          />
          <CardsSection
            movieTitle={"Indiana Jones"}
            rating={3}
            description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, provident ex laborum consequatur consequuntur ipsam necessitatibus, veniam commodi nesciunt doloribus quam itaque sed enim accusamus odio labore nisi voluptates ipsa!"}
          />          
        </section>        
      </Content>     

    </Container>     
  )  
};