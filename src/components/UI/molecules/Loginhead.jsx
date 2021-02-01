import { AiOutlineClose } from 'react-icons/ai';
import Button from '../atoms/Button';
import CircleDiv from '../atoms/DivStyle';
import TextStyle from '../atoms/TextStyle';

const Loginhead = ({ name }) => {
	return (
		<CircleDiv className="login-text">
			<Button circlehover>
				<AiOutlineClose />
			</Button>
			<TextStyle blackmiddlebold>{name}</TextStyle>
		</CircleDiv>
	);
};

export default Loginhead;
