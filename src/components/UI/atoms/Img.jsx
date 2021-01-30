import styled, { css } from 'styled-components';
import CircleDiv from './CircleDiv';

const StyleImg = styled.img`
	${(props) =>
		props.profile &&
		css`
			width: 50%;
			border-radius: 50%;
		`}

	${(props) =>
		props.smallImg &&
		css`
			width: 50px;
			border-radius: 5px;
		`}
`;

const Img = ({ img, altmessage, ...rest }) => {
	return <StyleImg src={img} {...rest} alt={altmessage} />;
};

export default Img;
