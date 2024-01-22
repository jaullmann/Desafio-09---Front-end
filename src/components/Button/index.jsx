import { Container } from "./styles";

export function Button({ title, loading = false, style = 'regular', ...rest }) {  
  return (
    <Container
      type="button"
      disabled={loading}
      className={ style=='dark-mode'? 'dark-mode' : 'regular' }
      {...rest}
    >
      { loading? 'Carregando...' : title }
    </Container>
  );
}