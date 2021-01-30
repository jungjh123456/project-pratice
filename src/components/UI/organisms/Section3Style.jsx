import styled, { createGlobalStyle } from 'styled-components';
import CircleDiv from '../atoms/CircleDiv';
import TextStyle from '../atoms/TextStyle';
import Locations from '../molecules/Locations';

const Section = styled.section`
	display: flex;
	padding: 50px 80px;
	flex-flow: column;
	span {
		margin-bottom: 3%;
	}
	div {
		display: flex;
		justify-content: center;
		.locations-img {
			flex-flow: column;
			/* align-items: flex-start; */
			img {
				margin-bottom: 3%;
				margin-right: 5%;
			}
		}
	}
`;

const Section3Style = ({ section3Img }) => {
	return (
		<>
			<Section className="section">
				<TextStyle blackBold>수백만 명에 이르는 에어비앤비 호스트 커뮤니티의 일원이 되어보세요.</TextStyle>
				<div className="img-group">
					{section3Img.map(({ src, alt, name }) => {
						return <Locations src={src} alt={alt} name={name} bigImg blackmiddlebold bigimgSize />;
					})}
				</div>
			</Section>
		</>
	);
};

export default Section3Style;
