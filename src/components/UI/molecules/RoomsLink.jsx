import Button from '../atoms/Button';
import TextStyle from '../atoms/TextStyle';

const RoomsLink = () => {
	return (
		<>
			<div className="RoomLink">
				<TextStyle whiteMainBold>이제, 여행은</TextStyle>
				<TextStyle whiteMainBold>가까운 곳에서</TextStyle>
				<Button normal>
					<TextStyle blacknormal> 근처의 숙소 둘러보기</TextStyle>
				</Button>
			</div>
		</>
	);
};

export default RoomsLink;
