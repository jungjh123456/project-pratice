import styled, { createGlobalStyle } from 'styled-components';
import CircleDiv from '../atoms/CircleDiv';
import TextStyle from '../atoms/TextStyle';
import Locations from '../molecules/Locations';
const Section = styled.section`
	display: flex;
	padding: 50px 60px;
	flex-flow: column;
	span {
		margin-bottom: 3%;
	}
	div {
		display: flex;

		.locations-img {
			flex-flow: column;
			align-items: flex-start;
			img {
				margin-bottom: 3%;
				/* margin-right: 5px; */
			}
		}
	}
`;

const SectionStyle = ({ sectionImg }) => {
	return (
		<>
			<Section className="section">
				<TextStyle blackBold>어디에서나, 여행은 살아보는 거야!</TextStyle>
				<div className="img-group">
					{sectionImg.map(({ src, alt, name }) => {
						return <Locations src={src} alt={alt} name={name} bigImg blackmiddlebold bigimgSize />;
					})}
				</div>
			</Section>
		</>
	);
};

export default SectionStyle;
