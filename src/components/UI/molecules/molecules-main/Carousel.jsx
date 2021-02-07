import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { slideNext, slidePrev, slideReset } from '../../../../modules/slide';

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
	const dispatch = useDispatch();

	const slideRef = useRef(null);
	const { next } = useSelector((state) => state.buttonReducer);

	// setImg((state) => ({ state, ...img }));
	useEffect(() => {
		slideRef.current.style.transition = 'all 0.5s ease-in-out';
		if (next > TOTAL_SLIDES) {
			setTimeout(() => {
				slideRef.current.style.transition = 'none';
			}, 0.01);
			dispatch(slideReset(0));
		} else if (next < 0) {
			setTimeout(() => {
				slideRef.current.style.transition = 'none';
			}, 0.01);
			dispatch(slideReset(TOTAL_SLIDES));
		}
		slideRef.current.style.transform = `translateX(-${next}00%)`;
	}, [TOTAL_SLIDES, currentSlide, dispatch, imgs, next]);
	console.log(next, TOTAL_SLIDES);

	const nextSlide = () => {
		if (next > TOTAL_SLIDES) {
			// dispatch(slideReset(0));
		}
		dispatch(slideNext());
	};

	const prevSlide = () => {
		if (next < 0) {
			// dispatch(slideReset(TOTAL_SLIDES));
			slideRef.current.style.transition = 'all 0.5s ease-in-out';
			console.log(next);
		} else {
			dispatch(slidePrev());
			console.log(next);
		}
	};
	return (
		<Container>
			<SliderContainer ref={slideRef}>
				<Img src={carouselImg[TOTAL_SLIDES - 1].src} />
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
