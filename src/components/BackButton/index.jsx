import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackButton({text = 'Voltar'}) {  
  return (
    <Container type="button" to="javascript:history.go(-1)">
      <FiArrowLeft/>
      <div>{text}</div>
    </Container>
  )
};