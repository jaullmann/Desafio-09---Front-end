import { MdClose } from "react-icons/md";
import { Container } from "./styles";


export function MovieTag({ name }){
	return(
		<Container>
			{ name }
			<MdClose />
		</Container>
	)  
}