import Carousel from 'react-elastic-carousel';
import './styles.css';
import Card from './Card';

const CarouselLive = ({ carouselImg }) => {
	// const breakPoints = [
	// 	{ width: 500, itemsToShow: 1 },
	// 	{ width: 758, itemsToShow: 2 },
	// 	{ width: 1200, itemsToShow: 3 },
	// 	{ width: 1500, itemsToShow: 4 },
	// ]; // 화면 크기에 따라 보여주는것 필요없음
	return (
		<Carousel>
			<Card number="1" />
			<Card number="2" />
			<Card number="3" />
			<Card number="4" />
			<Card number="5" />
		</Carousel>
	);
};

export default CarouselLive;
