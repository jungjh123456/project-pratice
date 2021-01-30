import MainStyle from '../UI/organisms/MainStyle';
import SessionStyle from '../UI/organisms/SessionStyle';

const Main = ({ imgs }) => {
	return (
		<>
			<MainStyle />
			<SessionStyle imgs={imgs} />
		</>
	);
};

export default Main;
