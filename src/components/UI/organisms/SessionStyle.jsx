import styled, { createGlobalStyle } from 'styled-components';
import Locations from '../molecules/Locations';

const Section = styled.section`
	display: grid;
	padding: 50px 60px;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px 3px;

	align-items: center;
`;
/* width: 100%; */

const SessionStyle = ({ imgs }) => {
	return (
		<Section>
			{imgs.map(({ src, alt, name }) => {
				return <Locations src={src} alt={alt} name={name} smallImg blackmiddlebold />;
			})}
		</Section>
	);
};

export default SessionStyle;
