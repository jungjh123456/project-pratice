import { createGlobalStyle, css } from 'styled-components';
import CircleDiv from '../atoms/CircleDiv';
import Img from '../atoms/Img';
import TextStyle from '../atoms/TextStyle';

const GlobalStyle = createGlobalStyle`
  /* width: 100%; */
  .locations-img {
    display: flex;
    flex-flow: row;
    align-items: center;
    img {
      margin-right: 10px;
    }
    
		  
  }
`;
const Locations = ({ src, alt, name, ...rest }) => {
	return (
		<>
			<GlobalStyle />
			<div className="locations-img">
				<Img src={src} alt={alt} {...rest} />
				<TextStyle blackmiddlebold>{name}</TextStyle>
			</div>
		</>
	);
};

export default Locations;
