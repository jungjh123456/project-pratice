import Button from '../atoms/Button';
import TextStyle from '../atoms/TextStyle';

const LoginBtn = ({ name }) => {
	return (
		<Button submitBtn>
			<TextStyle whiteNormalBold>{name}</TextStyle>{' '}
		</Button>
	);
};
export default LoginBtn;
