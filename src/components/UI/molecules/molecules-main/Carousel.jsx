import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

const Img = styled.img`
	width: 100%;
	height: 100%;
`;

const Slide = ({ carouselImg }) => {
	const TOTAL_SLIDES = carouselImg.length;
	const [currentSlide, setCurrentSlide] = useState(0);
	const [imgs, setImg] = useState(carouselImg);
	console.log(imgs[TOTAL_SLIDES - 1]);
	console.log(imgs[0]);
	const slideRef = useRef(null);
	console.log(carouselImg);

	// setImg((state) => ({ state, ...img }));
	useEffect(() => {
		// imgs.unshift(imgs[TOTAL_SLIDES - 1]);
		// imgs.push(imgs[0]);
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
	}, [TOTAL_SLIDES, currentSlide, imgs]);

	const nextSlide = () => {
		if (currentSlide === TOTAL_SLIDES) {
			// setCurrentSlide(0);
			// slideRef.current.style.transform = 'none';

			setCurrentSlide(currentSlide + 1);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(TOTAL_SLIDES - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};
	return (
		<Container>
			<SliderContainer ref={slideRef}>
				{/* <Img src={carouselImg[TOTAL_SLIDES - 1].src} /> */}
				{imgs.map(({ src }) => (
					<Img src={src} />
				))}
				<Img src={carouselImg[0].src} />
			</SliderContainer>
			<Button onClick={prevSlide}>previous Slide</Button>
			<Button onClick={nextSlide}>next slide</Button>
		</Container>
	);
};

export default Slide;
