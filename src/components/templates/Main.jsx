import MainStyle from '../UI/organisms/MainStyle';
import SectionStyle from '../UI/organisms/SectionStyle';
import SessionStyle from '../UI/organisms/SessionStyle';

const Main = ({ imgs, sectionImg }) => {
	return (
		<>
			<MainStyle />
			<SessionStyle imgs={imgs} />
			<SectionStyle sectionImg={sectionImg} />
		</>
	);
};

export default Main;
