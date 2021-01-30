import { createGlobalStyle, css } from 'styled-components';
import CircleDiv from '../atoms/CircleDiv';
import Img from '../atoms/Img';
import TextStyle from '../atoms/TextStyle';

// const GlobalStyle = createGlobalStyle`
//   .locations-img {
//     display: flex;
//     flex-flow: row;
//     align-items: center;
//     img {
//       margin-right: 10px;
//     }
//   }
// `;
const Locations = ({ src, alt, name, ...rest }) => {
	return (
		<>
			{/* <GlobalStyle /> */}
			<div className="locations-img">
				<CircleDiv {...rest}>
					<Img src={src} alt={alt} {...rest} />
				</CircleDiv>
				<TextStyle {...rest}>{name}</TextStyle>
			</div>
		</>
	);
};

export default Locations;
