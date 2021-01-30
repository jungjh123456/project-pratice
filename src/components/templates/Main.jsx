import ArticleStyle from '../UI/organisms/SloganStyle';
import MainStyle from '../UI/organisms/MainStyle';
import SectionStyle from '../UI/organisms/SectionStyle';
import SessionStyle from '../UI/organisms/SessionStyle';
import SloganStyle from '../UI/organisms/SloganStyle';
import Section3Style from '../UI/organisms/Section3Style';

const Main = ({ imgs, sectionImg, sloganImg, section3Img }) => {
	return (
		<>
			<MainStyle />
			<SessionStyle imgs={imgs} />
			<SectionStyle sectionImg={sectionImg} />
			<SloganStyle sloganImg={sloganImg} />
			<Section3Style section3Img={section3Img} />
		</>
	);
};

export default Main;
