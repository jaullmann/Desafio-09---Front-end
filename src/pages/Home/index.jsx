import { api } from "../../services/api";

import { FiPlus } from "react-icons/fi"
import { Container, Content, Button } from "./styles";
import { Header } from "../../components/Header";
import { CardsSection } from "../../components/CardsSection";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export function Home() {
  
  const { input, setInput, setMovieIdTarget, signOut } = useAuth();
  const [movies, setMovies] = useState([]); 
  const [delEventTriggered, setDelEventTriggered] = useState(false);
  const navigate = useNavigate();  

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get(`/notes?title=${input}`);         
        setMovies(response.data.notesWithTags)
        setMovieIdTarget("")        
        return
      } catch (e) {
        if (response.status === 401) {
          alert("Acesso expirado, faça login novamente.")
          return signOut()
        } 
        return alert("Erro ao carregar dados dos filmes do usuário.")
      }      
    }

    window.addEventListener('deletedMovieEvent', fetchMovies)
    fetchMovies();    

  }, [, input, delEventTriggered]);

  function handleDetails(movieId) {
    navigate(`/description/${movieId}`)
    setInput("")
  }

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
        { movies.length ?          
            movies.map(movie => 
              <CardsSection
                key={String(movie.id)}
                movieData={movie}
                onClick={() => handleDetails(movie.id)}
              />
            )
          : 
          <h1>
            Nenhum filme foi encontrado
          </h1>              
        }         
         
        </section>        
      </Content>     

    </Container>     
  )  
};