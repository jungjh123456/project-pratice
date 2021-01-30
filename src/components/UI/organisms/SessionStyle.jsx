import styled, { createGlobalStyle } from 'styled-components';
import TextStyle from '../atoms/TextStyle';
import Locations from '../molecules/Locations';

const Section = styled.section`
	display: grid;
	padding: 50px 80px;
	grid-template-columns: repeat(4, 1fr);
	gap: 0px 13px;

	align-items: center;
	.locations-img {
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: flex-start;

		img {
			margin-right: 10px;
		}
	}
`;

/* width: 100%; */

const SessionStyle = ({ imgs }) => {
	return (
		<Section>
			{imgs.map(({ src, alt, name }) => {
				return <Locations src={src} alt={alt} name={name} smallImg blackmiddlebold imgSize />;
			})}
		</Section>
	);
};

export default SessionStyle;
