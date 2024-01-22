import { Container } from "./styles";
import { FiX } from "react-icons/fi";

export function CreatedTag({ gender }) {
  return (
    <Container>
      <FiX/>  
      <p>
        { gender }
      </p>      
    </Container>
  )  
}