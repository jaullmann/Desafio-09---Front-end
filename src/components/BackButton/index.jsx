import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { useNavigate } from "react-router-dom";


export function BackButton({text = 'Voltar'}) {  

  const navigate = useNavigate()

  const handlePreviousRoute = () => {
    navigate(-1)
  }

  return (
    <Container type="button" onClick={handlePreviousRoute}>
      <FiArrowLeft/>
      <div>{text}</div>
    </Container>
  )  
  
};