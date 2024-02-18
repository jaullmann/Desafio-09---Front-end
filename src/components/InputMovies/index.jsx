import { Input } from './styles';

export function InputMovies({placeholder, ...rest}) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      {...rest}
    />
  )
}