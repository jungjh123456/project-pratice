import Carousel from '../UI/molecules/Carousel';
const carouselImg = [
	{ src: './imgs/house.jpg', alt: '집 전체', name: '집 전체' },
	{ src: './imgs/human.jpg', alt: '온수 욕조', name: '온수 욕조' },
	{ src: './imgs/nanlo.jpg', alt: '캠핑 및 글램핑', name: '캠핑 및 글램핑' },
	{ src: './imgs/tent.jpg', alt: '독특한 공간', name: '독특한 공간' },
];
const CarouselPage = () => {
	return <Carousel carouselImg={carouselImg} />;
};

export default CarouselPage;
