import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";
import { useAuth } from "../../hooks/auth";

import { FiStar } from "react-icons/fi";
import { Container } from './styles'
import { CardsSectionTag } from "../CardsSectionTag";
import { CardButton } from "../CardButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function CardsSection({ movieData, ...rest }) {
    
  const navigate = useNavigate();  
  const { setMovieIdTarget } = useAuth();

  async function deleteMovie(event, id) {    
    event.stopPropagation()
    if (confirm("Deseja realmente excluir esse filme?")) {
      const response = await api.delete(`/notes/${id}`);
      if (response.status === 200) {           
        const deleteEvent = new CustomEvent('deletedMovieEvent', { detail: {message: `movie id=${id} successfull deleted.`}})
        window.dispatchEvent(deleteEvent);
        return alert("Filme excluído com sucesso!")                            
      }
    }    
    return
  }

  async function editMovie(event, id) {
    event.stopPropagation()
    setMovieIdTarget(id)
    navigate('/new')    
  }

  return (
    <Container $score={movieData.rating} {...rest}>
      <div className="card-buttons">
        <CardButton id={movieData.id} type={'edit'} onClick={(event) => editMovie(event, movieData.id)}/> 
        <CardButton id={movieData.id} type={'delete'} onClick={(event) => deleteMovie(event, movieData.id)}/>       
      </div>
      <h2>{movieData.title}</h2>
      <div className="rating">
        <FiStar/>
        <FiStar/>
        <FiStar/>
        <FiStar/> 
        <FiStar/>
      </div>      
      <div id="description">{movieData.description}</div>
      <section>
        {movieData.tags ? movieData.tags.map( tag => 
          <CardsSectionTag 
            gender={tag.name}
            key={String(tag.id)}
          /> ) : 
        undefined}
      </section>       
    </Container>
  )
};