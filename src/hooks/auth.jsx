import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  // cria um objeto 'useState' vazio, para armazenar os dados do usuário quando ele for autenticado
  const [data, setData] = useState({});
  const [input, setInput] = useState("");
  const [movieIdTarget, setMovieIdTarget] = useState(""); 

  async function signIn({ email, password }) {

    try {      
      const response = await api.post("/sessions", { email, password });
      const  { user, token } = response.data; 
      
      // salva os dados do usuário no localStorage do navegador (para manter o usuário logado mesmo em caso de refresh)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      // insere um cabeçalho de autorização para todas as novas requisições do usuário, caso ele seja autenticado
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // armazena os dados do usuário e o toke de autenticação no useState criado no começo da função
      setData({ user, token })
      setInput("")    
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível efetuar o login.");
      }
    }    
  } 

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);        
        
        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }               
      
      await api.put("/users", user);
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso!");
      return true;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar os dados do perfil.");
        return false;
      }
    }    
  }

  // função que verifica se há dados do usuário em localStorage e recupera os mesmos para mantê-lo logado
  useEffect(() => {    
    const token = localStorage.getItem("@rocketmovies:token");
    const user = localStorage.getItem("@rocketmovies:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);


  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      updateProfile,
      user: data.user, 
      setInput,
      input,
      setMovieIdTarget,
      movieIdTarget      
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export  { AuthProvider, useAuth };