import { createGlobalStyle } from 'styled-components';
import CircleProfile from '../molecules/CircleProfile';
import RoomsLink from '../molecules/RoomsLink';

const GlobalStyle = createGlobalStyle`
  /* width: 100%; */
  .main {
		padding: 266px 80px 80px;
		
    background-image: url(./imgs/bg.jpg);
    background-size: cover;
		background-position: bottom 15% left 100%;
    background-repeat: no-repeat;
	}
	
	.RoomLink { 
    width: 400px;
    display: flex;
    flex-direction: row;    
    flex-flow: wrap;
    button {
      padding: 5px 10px;
      margin-top: 25px;
    }
		margin-bottom: 7%;
  }
`;
const MainStyle = () => {
	return (
		<>
			<GlobalStyle />
			<main className="main">
				<RoomsLink />
			</main>
		</>
	);
};

export default MainStyle;
