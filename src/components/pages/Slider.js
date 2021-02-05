import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slide from '../UI/molecules/molecules-main/Carousel';

const Container = styled.div`
	width: 60%;
	overflow: hidden;
`;

const Button = styled.button`
	all: unset;
	border: 1px solid coral;
	padding: 0.5em 2em;
	color: coral;
	border-radius: 10px;
	&:hover {
		transition: all 0.3s ease-in-out;
		background-color: coral;
		color: #fff;
	}
`;

const SliderContainer = styled.div`
	width: 100%;
	display: flex;
`;

const TOTAL_SLIDES = 2;
const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef(null);

	useEffect(() => {});
	const nextSlide = () => {
		if (currentSlide >= TOTAL_SLIDES) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(TOTAL_SLIDES);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};
	return (
		<Container>
			{currentSlide}
			<SliderContainer ref={slideRef}>
				<Slide />
			</SliderContainer>
		</Container>
	);
};

export default Slider;
