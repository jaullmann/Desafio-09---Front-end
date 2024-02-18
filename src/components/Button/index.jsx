import { Container } from "./styles";

export function Button({ title, loading = false, onClick, style = 'regular', ...rest }) {  
  return (
    <Container
      type="button"
      disabled={loading}
      onClick={onClick}
      className={ style=='dark-mode'? 'dark-mode' : 'regular' }
      {...rest}
    >
      { loading? 'Carregando...' : title }
    </Container>
  );
}