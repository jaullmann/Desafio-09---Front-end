import { Container } from './styles'

export function MainLogo({ slogan }) {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir</p>
      <h3>{slogan}</h3>
    </Container>
  )
}