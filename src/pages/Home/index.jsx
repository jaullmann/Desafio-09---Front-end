import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";

import { FiPlus } from "react-icons/fi"
import { Container, Content, Button } from "./styles";
import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function Home({MovieCards}) {

  const [movies, setMovies] = useState([
    {
      "id": 0,
      "movieTitle": "Loading...",
      "rating": 3,
      "description": "Loading data...",
      "tags": ["Loading..."]
    }
  ]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes`);  
      const moviesData = await response.data.notesWithTags;    
      setMovies(Array(moviesData))
      // console.log(movies)
      // console.log(typeof(movies))
    }

    fetchMovies();    
  }, []);

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
          {
            movies.map(movie => 
              <CardsSection
                movieData={movie}
                key={String(movie.id)}
              />
            )
          }
         
        </section>        
      </Content>     

    </Container>     
  )  
};