import { createGlobalStyle } from 'styled-components';
import Button from '../atoms/Button';
import TextStyle from '../atoms/TextStyle';

const GlobalStyle = createGlobalStyle`
  /* width: 100%; */
  .RoomLink {
    
    width: 400px;
    display: flex;
    flex-direction: row;    
    flex-flow: wrap;
    button {
      padding: 5px 10px;
      margin-top: 25px;
    }

  }
`;
const RoomsLink = () => {
	return (
		<>
			<GlobalStyle />
			<div className="RoomLink">
				<TextStyle whiteBold>이제, 여행은</TextStyle>
				<TextStyle whiteBold>가까운 곳에서</TextStyle>
				<Button normal>
					<TextStyle blacknormal> 근처의 숙소 둘러보기</TextStyle>
				</Button>
			</div>
		</>
	);
};

export default RoomsLink;
