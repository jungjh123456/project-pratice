import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../atoms/atoms-main/Button';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import TextStyle from '../../atoms/atoms-main/TextStyle';

const LoginGoogle = () => {
	const googleLogin = async (e) => {
		e.preventDefault();
		console.log('dsgsd');
		const res = await axios.get(
			'http://ec2-3-34-198-174.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/'
		);
		console.log(res.data);
	};
	return (
		<CircleDiv className="main-login">
			<CircleDiv className="google-login">
				<a href="http://ec2-3-34-198-174.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/">
					<CircleDiv>
						<FcGoogle />
						<TextStyle blackmiddlebold>구글 로그인</TextStyle>
					</CircleDiv>
				</a>
			</CircleDiv>
		</CircleDiv>
	);
};

export default LoginGoogle;
