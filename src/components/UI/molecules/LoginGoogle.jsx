import { FcGoogle } from 'react-icons/fc';
import Button from '../atoms/Button';
import CircleDiv from '../atoms/DivStyle';
import TextStyle from '../atoms/TextStyle';

const LoginGoogle = () => {
	return (
		<CircleDiv className="main-login">
			<CircleDiv className="google-login">
				<Button>
					<CircleDiv>
						<FcGoogle />
						<TextStyle blackmiddlebold>구글 로그인</TextStyle>
					</CircleDiv>
				</Button>
			</CircleDiv>
		</CircleDiv>
	);
};

export default LoginGoogle;
