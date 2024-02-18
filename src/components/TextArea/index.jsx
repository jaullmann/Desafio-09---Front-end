import { Container } from './styles';

export function TextArea({placeholder = "", ...rest}) {
  return (
    <Container>
      <textarea 
        placeholder={placeholder}
        {...rest}
      />
    </Container>    
  )
}