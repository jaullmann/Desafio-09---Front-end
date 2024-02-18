import { MdClose } from "react-icons/md";
import { Container } from "./styles";


export function MovieTag({ value, onClick }){
	return(
		<Container>
			{ value }
			<MdClose 
				onClick={onClick}
			/>
		</Container>
	)  
}