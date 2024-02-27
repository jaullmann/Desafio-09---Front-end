import { FiEdit, FiTrash } from "react-icons/fi";
import { Container } from "./styles";

export function CardButton({ id, type = 'regular', ...rest }) {  
  return (
    <Container
      id={`${type}-${id}`}
      type="button"
      className={ type=='edit'? 'edit' : 'delete' }
      title={ type=='edit'? 'Editar dados do filme' : 'Excluir filme' }
      {...rest}
    >
    {type == "edit" ? <FiEdit/> : <FiTrash/>}
    </Container>
  );
}