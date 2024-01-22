import { FiPlus } from "react-icons/fi";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { InputMovies } from  "../../components/InputMovies";
import { TextArea } from "../../components/TextArea";
import { MovieTag } from "../../components/MovieTag";
import { Button } from "../../components/Button";


export function NewMovie({ tags }) {
  return (
    <Container>
            
      <Header/>
      
      <Content>
        <BackButton/>
        <h2>Novo Filme</h2>
        <div>
          <InputMovies placeholder={"Título"} />
          <InputMovies placeholder={"Sua nota (de 0 a 5)"} />
        </div>
        <TextArea/>
        <h3>Marcadores</h3>
        <section>
          {tags ? tags.map( tag => <MovieTag name={ tag } /> ) : undefined}
          <div id="new-tag">
            Novo marcador
            <FiPlus/>
          </div>
        </section>
        <div>
          <Button
            title={"Excluir filme"}
            style={"dark-mode"}
          />
          <Button
            title={"Salvar alterações"}            
          />
        </div>

      </Content>     

    </Container>     
  )  
};