import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import CircleDiv from '../../atoms/atoms-main/DivStyle';
import Img from '../../atoms/atoms-main/Img';
import ArrowButton from './ArrowButton';

const CarouselStyle = styled.div`
	width: 400px;
	margin: 20px auto;

	.carousel-size {
		border: 2px solid #c058dc;
		border-radius: 5px;
		/* width: 100%; */
		height: 310px;
		display: flex;

		overflow: hidden;
		position: relative;
		/* width: 500px; */
		/* width: 500px; */
		/* float: left; */

		.carousel-ui {
			/* width: 100%; */
			margin: 0;
			padding-left: 0;
			height: 100%;
			display: flex;
			flex-shrink: 0;
			transition: all 0.5s;
			li {
				display: flex;
				/* width: 100%; */
				justify-content: flex-start;
				/* align-items: center; */

				.img-slide {
					width: 396px;

					/* position: absolute; */
					/* top: 0; */
					/* left: 0; */
				}
			}
		}
		.controls {
			.prev {
				position: absolute;
				left: 20px;
				transform: rotate(180deg);
			}
			.next {
				position: absolute;
				right: 20px;
			}
		}
	}
`;

const Carousel = ({ carouselImg }) => {
	const [width, setWidth] = useState(0);
	const [count, setCount] = useState(0);
	const [sumWidth, setSumWidth] = useState(0);
	console.log(carouselImg);
	const slider = useRef();
	useEffect(() => {
		const imgs = document.querySelectorAll('.img-slide');
		setWidth(imgs[0].offsetWidth);
	}, []);

	const prevClick = () => {
		setCount((state) => (state = count - 1));
		setSumWidth((state) => (state = sumWidth - width));
		slider.current.style.transform = `translateX(-${sumWidth}px)`;
	};

	const nextClick = () => {
		setCount((state) => (state = count + 1));
		setSumWidth((state) => (state = sumWidth + width));
		// slider.current.style.transform = `translateX(-${sumWidth}px)`;
		// if (count === carouselImg.length) {
		// 	slider.current.style.transition = '3s';
		// 	slider.current.style.transform = `translateX(${sumWidth + carouselImg.length * width}px)`;
		// 	// 	slider.current.style.transition = '1s';
		// }
		if (count === 2) {
			setCount(0);
		}
		console.log(count === carouselImg.length - 1, count, carouselImg.length);
	};

	console.log(count);
	// console.log(sumWidth);

	return (
		<CarouselStyle>
			<div className="carousel-size">
				<ul ref={slider} className="carousel-ui">
					{carouselImg.map(({ src, alt }, i, arr) => {
						return (
							<>
								{' '}
								{count === i && (
									<>
										<li>
											<img className="img-slide" src={src} alt={alt} />
										</li>
										<li>
											<img className="img-slide" src={arr[i + 1].src} alt={arr[i + 1].src} />
										</li>
									</>
								)}
							</>
						);
					})}
				</ul>
				<div className="controls">
					{/* <button className="prev" ref={nextBtn} onClick={prevClick}>
						이전
					</button>
					<button className="next" ref={prevBtn} onClick={nextClick}>
						이후
					</button> */}
					<ArrowButton className="prev" onClick={prevClick} />
					<ArrowButton className="next" onClick={nextClick} />
				</div>
			</div>
		</CarouselStyle>
	);
};

export default Carousel;
