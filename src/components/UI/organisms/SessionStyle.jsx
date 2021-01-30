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

const imgs = [
	{ src: './imgs/1.jpg', alt: '서울 지역 숙소', name: '서울' },
	{ src: './imgs/2.jpg', alt: '인천 지역 숙소', name: '인천' },
	{ src: './imgs/3.jpg', alt: '부천시 지역 숙소', name: '부천시' },
	{ src: './imgs/4.jpg', alt: '안산시 지역 숙소', name: '안산시' },
	{ src: './imgs/5.jpg', alt: '의정부시 지역 숙소', name: '의정부시' },
	{ src: './imgs/6.jpg', alt: '대전 지역 숙소', name: '대전' },
	{ src: './imgs/7.jpg', alt: '수원시 지역 숙소', name: '수원시' },
	{ src: './imgs/8.jpg', alt: '성남시 지역 숙소', name: '성남시' },
];

const SessionStyle = () => {
	return (
		<Section>
			{imgs.map(({ src, alt, name }) => {
				return <Locations src={src} alt={alt} name={name} smallImg />;
			})}
		</Section>
	);
};

export default SessionStyle;
