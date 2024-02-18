import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { InputMovies } from  "../../components/InputMovies";
import { TextArea } from "../../components/TextArea";
import { MovieTag } from "../../components/MovieTag";
import { Button } from "../../components/Button";


export function NewMovie() {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");  

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    // carrega todas as tags previamente salvas (se houverem - spread operator), adicionando a nova ao final do array
    if (tags.length < 10) {
      if (newTag.length < 3 || newTag.length > 20) {
        alert("Marcador deve conter entre 3 e 20 caracteres.")
        setNewTag("");
      } else {
        setTags(prevState => [...prevState, newTag]);
       // zera o estado da variável newTag para possibilitar novas inclusões        
        setNewTag("");  
      }    
    } else {
      alert("Limite atingido: máximo 10 marcadores por filme.")
    }    
  }

  function handleRemoveTag(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag));
  }

  async function handleNewMovie() {

    if (!title) {
      return alert('O título do filme deve ser informado.')
    }

    if (!rating) {
      return alert('Registre uma nota para o filme de 0 a 5.')
    } 
    if (isNaN(Number(rating.replace(",", ".")).toFixed(0))) {
      return alert('A nota informada deve ser numérica, entre 0 e 5.')      
    }
    if (Number(rating.replace(",", ".")).toFixed(0) < 0 | Number(rating.replace(",", ".")).toFixed(0) > 5) {
      return alert('A nota do filme deve ser um número entre 0 e 5.')      
    }

    if (!description) {
      const saveWithoutDescription = confirm("Você não registrou uma descrição para o filme, deseja adicioná-lo mesmo assim?")
      if (!saveWithoutDescription) {
        return 
      } else {
        setDescription("")
      }
    }

    if (newTag) {
      return alert('Você editou um marcador que ficou pendente de inclusão. Clique no botão "+" ou deixe o campo vazio.')
    }

    await api.post("/notes", {
      title,      
      description,
      rating: Number(rating.replace(",", ".")).toFixed(0),
      tags
    });

    alert("Filme cadastrado com sucesso!");
    navigate("/")
  }

  return (
    <Container>
            
      <Header/>
      
      <Content>
        <BackButton/>
        <h2>Novo filme</h2>
        <div>
          <InputMovies 
            placeholder={"Título"}
            onChange={e => setTitle(e.target.value)}
          />
          <InputMovies 
            placeholder={"Sua nota (de 0 a 5)"} 
            onChange={e => setRating(e.target.value)}
          />
        </div>
        <TextArea
          placeholder={"Observações"} 
          onChange={e => setDescription(e.target.value)}
        />
        <h3>Marcadores</h3>
        <section>          
          {
            tags.map((tag, index) => (
              <MovieTag 
                key={String(index)}
                value={tag}                
                onClick={() => handleRemoveTag(tag)}
              /> 
            ))
          }
          <div id="new-tag">
            <input 
              type="text" 
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}              
            />
            <FiPlus 
              onClick={handleAddTag}
            />
          </div>
        </section>
        <div>
          <Button
            title={"Excluir filme"}
            style={"dark-mode"}
          />
          <Button
            title={"Salvar"}
            onClick={handleNewMovie}            
          />
        </div>

      </Content>     

    </Container>     
  )  
};