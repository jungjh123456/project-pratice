import styled, { css } from 'styled-components';

const CircleStyle = styled.div`
	/* border: 1px solid #ddd; */
	border-radius: 50px;
	color: white;
	${(props) =>
		props.carouseldiv &&
		css`
			width: 100%;
			justify-content: center;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			border-radius: 0;

			border: 1px solid red;
		`}
	${(props) =>
		props.bigimgSize &&
		css`
			min-width: 200px;
			max-width: 400px;
			width: 100%;
			box-sizing: border-box;
			/* border: 1px solid #000; */
		`}

	${(props) =>
		props.imgSize &&
		css`
			padding-right: 10px;
			border: 0;
		`}
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
		props.bigImgthree &&
		css`
			min-width: 200px;
			max-width: 400px;
			width: 100%;

			box-sizing: border-box;
			border: 0;
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
