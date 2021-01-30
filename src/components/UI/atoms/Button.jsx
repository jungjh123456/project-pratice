import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
	border: 1px solid #ddd;
	border-radius: 50px;
	cursor: pointer;
	outline: none;
	${(props) =>
		props.large &&
		css`
			max-width: 500px;
			width: 80vw;
		`}

	${(props) =>
		props.small &&
		css`
			width: 70px;
		`}

	${(props) =>
		props.normal &&
		css`
			border-radius: 10px;
			background-color: white;
		`} 
	padding: 0;
	margin: 0;
	box-sizing: border-box;
`;

const Button = ({ children, ...rest }) => {
	return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;
