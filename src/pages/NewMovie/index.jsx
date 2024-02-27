import { api } from "../../../../../NodeJS/Rocketseat/desafio_08/src/services/api";
import { useAuth } from "../../hooks/auth";

import { useState, useEffect } from "react";
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

  const [data, setData] = useState({});  
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");  

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [previousTags, setPreviousTags] = useState({});

  const { movieIdTarget, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await api.get(`/notes/${movieIdTarget}`);         
        setData(response.data);
        setTitle(response.data.title)
        setRating(response.data.rating)
        setDescription(response.data.description)        
        setTags(response.data.tags.map((tag) => (tag.name)))
        setPreviousTags(response.data.tags.map((tag) => (tag.name)))     
      } catch(e) {
        console.log(e)
        alert("Erro ao carregar dados do filme cadastrado.")
        navigate("/")
        return
      }      
    }
    
    movieIdTarget && fetchMovie()        
  }, []);

  async function updateMovie() {
    try {
      await api.patch(`/notes/${movieIdTarget}`, {        
        user_id: user.id,
        title,      
        description,
        rating: Number(String(rating).replace(",", ".")).toFixed(0),
        tags
      });
      navigate("/")
      return alert("Filme atualizado com sucesso!");
    } catch(e) {
      console.log(e)
      return alert("Erro ao atualizar os dados do filme.")
    }      
  }

  async function createMovie() {
    try {
      await api.post("/notes", {
        title,      
        description,
        rating: Number(String(rating).replace(",", ".")).toFixed(0),
        tags
      });
      navigate("/")
      return alert("Filme cadastrado com sucesso!");
    } catch(e) {
      return alert("Erro ao cadastrar dados do filme.")
    }      
  }

  async function deleteMovie() {    
    if (!movieIdTarget) {
      if (!confirm("Confirma a exclusão de todos os dados informados?")) {
        return
      }
      setTitle("")
      setRating("")
      setDescription("")
      setTags([])      
      return 
    }
    
    if (!confirm("Deseja realmente excluir esse filme?")) {
      return
    }
    try {
      const response = await api.delete(`/notes/${movieIdTarget}`);
      if (response.status === 200) {           
        const deleteEvent = new CustomEvent('deletedMovieEvent', { detail: {message: `movie id=${movieIdTarget} successfull deleted.`}})
        window.dispatchEvent(deleteEvent);
        navigate('/') 
        return alert("Filme excluído com sucesso!")                            
      }
      return alert("Não foi possível executar a ação no momento. Tente novamente.")   
    } catch(e) { 
      console.log(e)     
      return alert("Erro ao excluir o filme do cadastro.")
    }          
  }

  function handleAddTag() {
    // carrega todas as tags previamente salvas (se houverem - spread operator), adicionando a nova ao final do array
    if (tags.length < 10) {
      if (newTag.length < 3 || newTag.length > 20) {
        alert("Marcador deve conter entre 3 e 20 caracteres.")
        setNewTag("");
      } else if ((tags.map(tag => tag.toLowerCase())).includes(newTag.toLowerCase())) {
        alert("Já existe outro marcador com o mesmo nome para o filme.")
        setNewTag("");
      } else {
        setTags(prevState => [...prevState, newTag]);
       // zera o estado da variável newTag para possibilitar novas inclusões        
        setNewTag("");  
      }    
    } else {
      alert("Atenção: é permitido até 10 marcadores por filme.")
    }    
  }

  function handleRemoveTag(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag));
  }

  async function handleMovie() {

    if (!title) {
      return alert('O título do filme deve ser informado.')
    }

    if (!rating) {
      return alert('Registre uma nota para o filme de 0 a 5.')
    }     
    if (isNaN(Number(String(rating).replace(",", ".")).toFixed(0))) {
      return alert('A nota informada deve ser numérica, entre 0 e 5.')      
    }
    if (Number(String(rating).replace(",", ".")).toFixed(0) < 0 | Number(String(rating).replace(",", ".")).toFixed(0) > 5) {
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

    if (!movieIdTarget) {
      await createMovie()      
    } else {
      await updateMovie()      
    }     
  }

  return (
    <Container>
            
      <Header/>
      
      <Content>
        <BackButton/>
        <h2>{movieIdTarget ? "Editar filme" : "Novo filme"}</h2>
        <div>
          <InputMovies
            id="title-input"
            placeholder={"Título"}            
            value={title}    
            onChange={e => setTitle(e.target.value)}              
          />
          <InputMovies 
            placeholder={"Sua nota (de 0 a 5)"} 
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
        </div>
        <TextArea
          placeholder={"Observações"}
          value={description}
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
            title={movieIdTarget ? "Excluir filme" : "Excluir dados"}
            style={"dark-mode"}
            onClick={() => deleteMovie()}
          />
          <Button
            title={movieIdTarget ? "Atualizar filme" : "Salvar"}
            onClick={handleMovie}            
          />
        </div>

      </Content>     

    </Container>     
  )  
};