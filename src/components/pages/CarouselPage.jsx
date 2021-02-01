import Button from '../UI/atoms/Button';
import CircleDiv from '../UI/atoms/DivStyle';
import TextStyle from '../UI/atoms/TextStyle';
import Carousel from '../UI/molecules/Carousel';
import CircleProfile from '../UI/molecules/CircleProfile';
const carouselImg = [
	{ src: './imgs/house.jpg', alt: '집 전체', name: '집 전체' },
	{ src: './imgs/human.jpg', alt: '온수 욕조', name: '온수 욕조' },
	{ src: './imgs/nanlo.jpg', alt: '캠핑 및 글램핑', name: '캠핑 및 글램핑' },
	{ src: './imgs/tent.jpg', alt: '독특한 공간', name: '독특한 공간' },
];
const CarouselPage = () => {
	return (
		<>
			<Carousel carouselImg={carouselImg} />
			<Button large>hello</Button>
			<Button small>hello</Button>
			<Button normal>hello</Button>
			<CircleDiv large>hello</CircleDiv>
			<TextStyle blackBold>hello</TextStyle>
			<CircleProfile />
		</>
	);
};

export default CarouselPage;
