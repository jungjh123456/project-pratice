import styled, { css } from 'styled-components';

const CircleStyle = styled.div`
	border: 1px solid #ddd;
	border-radius: 50px;
	color: white;

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
		props.hoverCheck &&
		css`
			&:hover {
				background-color: rgba(0, 0, 0, 0.8);
			}
		`}
		${(props) =>
		props.box &&
		css`
			&:hover {
				background-color: rgba(0, 0, 0, 0.8);
			}
		`}
`;

const CircleDiv = ({ children, ...rest }) => {
	console.log(rest);
	return <CircleStyle {...rest}>{children}</CircleStyle>;
};

export default CircleDiv;
