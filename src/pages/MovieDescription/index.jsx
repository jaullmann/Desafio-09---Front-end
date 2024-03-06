import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { MovieSection } from "../../components/MovieSection";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";


export function MovieDescription() {

  const [data, setData] = useState(null);    
  const { setInput } = useAuth();
  const params = useParams();

  useEffect(() => {
    setInput("")

    async function fetchMovie() {
      try {
        const response = await api.get(`/notes/${params.id}`);         
        setData(response.data);
      } catch(e) {
        return alert("Erro ao carregar dados do filme cadastrado.")
      }      
    }

    fetchMovie()
  }, []);

  return (
    <Container>
      
      <header>
        <Header/>  
      </header>        

      {
        data && 
        <Content>
        <MovieSection
          key={String(data.id)}
          movieTitle={ data.title } 
          description={ data.description }                
          rating={ data.rating }
          tags={data.tags} 
          lastUpdate={data.updated_at}          
        />
        </Content> 
      }          
    
    </Container>     
  )  
};