import { Children } from 'react';
import styled, { css } from 'styled-components';

const StyleSpan = styled.span`
	${(prop) =>
		prop.whiteBold &&
		css`
			color: #fff;
			font-size: 4rem;
			letter-spacing: -0.02em;
			line-height: 70px;
			font-weight: 800;
		`}

	${(prop) =>
		prop.whiteMiddleBold &&
		css`
			color: #fff;
			font-size: 3.2rem;
			letter-spacing: -0.02em;
			line-height: 58px;
			font-weight: 800;
		`}

    ${(prop) =>
		prop.blacktextLine &&
		css`
			color: #222;
			font-size: 1rem;
			letter-spacing: -0.02em;
			text-decoration: underline;
			line-height: 58px;
			font-weight: 600;
		`}
    
  ${(prop) =>
		prop.greentextLine &&
		css`
			color: #008489;
			font-size: 1rem;
			letter-spacing: -0.02em;
			line-height: 58px;
			font-weight: 600;
			&:hover {
				text-decoration: underline;
			}
		`}
    
	${(prop) =>
		prop.blackBold &&
		css`
			color: #222;
			font-size: 3.2rem;
			letter-spacing: normal;
			line-height: 36px;
			font-weight: 800;
		`}
    ${(prop) =>
		prop.blacknormal &&
		css`
			color: #222;
			font-size: 1rem;
			letter-spacing: normal;
			/* line-height: 36px; */
		`}
    
    ${(prop) =>
		prop.blackmiddlebold &&
		css`
			color: #222;
			font-size: 1rem;
			letter-spacing: normal;
			font-weight: 700;
		`}
`;

const TextStyle = ({ children, ...rest }) => {
	return <StyleSpan {...rest}>{children}</StyleSpan>;
};

export default TextStyle;
