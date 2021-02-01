import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import CircleDiv from '../../components/UI/atoms/DivStyle';
import TextStyle from '../../components/UI/atoms/TextStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/UI/atoms/Button';
import Input from '../../components/UI/atoms/Input';
import { IoIosArrowBack } from 'react-icons/io';
import Loginhead from '../../components/UI/molecules/Loginhead';
import LoginGoogle from '../../components/UI/molecules/LoginGoogle';
import LoginBtn from '../../components/UI/molecules/LoginBtn';
const Modaldiv = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	justify-content: center;
	align-items: center;
	.login-group {
		display: flex;
		justify-content: flex-start;
		.login-text {
			display: flex;
			align-items: center;

			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 0;
			width: 100%;
			height: 60px;
			color: #000;
			button {
				display: flex;
				position: absolute;
				justify-content: center;
				align-items: center;
				margin-left: 10px;
				svg {
					font-size: 15px;
				}
			}
			span {
				margin: 0 auto;
			}
		}

		.main-login {
			display: flex;

			justify-content: center;
			align-items: flex-start;
			margin-top: 10px;
			align-items: center;
			border-radius: 0;

			.google-login {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				align-items: center;
				border-radius: 5px;
				button {
					width: 400px;
					height: 40px;
					display: flex;

					justify-content: center;
					align-items: center;
					border: 2px solid rgb(0, 0, 0, 0.5);
					svg {
						vertical-align: sub;
						font-size: 20px;
						margin-right: 14px;
					}
				}
			}
		}

		.or {
			position: relative;
			&::before {
				content: '또는';
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				background-color: rgb(255, 255, 255);
				transform: translateX(-50%) translateY(-50%);
				color: rgb(0, 0, 0, 0.4);
				text-align: center;
				width: 65px;
				height: 23px;
			}
		}
		.login-input {
			width: 400px;

			border-radius: 0;
			margin: 0 auto;
			input {
				width: 385px;
				margin-bottom: 10px;
			}
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			.password-ok {
				border: 0;
				width: 30%;

				span {
					font-size: 0.8rem;
				}
			}
		}
		.submit {
			/* background-color: red; */
			border-radius: 0;
			width: 88%;

			.submit-div {
				display: flex;
				flex-direction: column;
				.search-password {
					width: 30%;
					margin: 0;
					height: 10px;
					border: 0;
					span {
						display: block;
						font-size: 0.4rem;
					}
					margin-bottom: 10px;
				}
				/* .submit-btn {
					padding: 10px 0;
					background-color: rgb(255, 90, 95);
					border-radius: 5px;
				} */
			}
		}
		.signup-div {
			width: 90%;

			border-radius: 0;
			span {
				margin-right: 8px;
				font-size: 0.8rem;
			}
			.signup {
				background: none;
				border: 0;
			}
			margin-bottom: 10px;
		}

		.back {
			width: 90%;
			/* border: 1px solid red; */
			border-radius: 0;

			span {
				svg {
					color: #008489;
					vertical-align: middle;
				}
			}
			button {
				border: 0;

				span {
					font-size: 0.8rem;

					vertical-align: middle;
					margin-bottom: 10px;
				}
			}
			margin-bottom: 10px;
		}
	}
`;

const LoginPotal = ({ modal }) => {
	const [visible, setVisible] = useState(true);
	const noScroll = useCallback(() => {
		document.body.style.overflow = 'hidden';
		document.querySelector('html').scrollTop = window.scrollY;
		window.scrollTo(0, 0);
	}, []);

	window.addEventListener('scroll', noScroll);

	if (visible === true) {
		window.removeEventListener('scroll', noScroll);
	}
	const hide = (e) => {
		e.preventDefault();
		// props.setModal(false);
	};
	return (
		<Modaldiv>
			<form onSubmit={hide}>
				<CircleDiv className="login-group" logindiv>
					<Loginhead name="로그인" />
					<LoginGoogle />
					<CircleDiv borderline className="or" />
					<CircleDiv className="email-login">
						<CircleDiv className="google-login">
							<CircleDiv className="login-input">
								<Input type="email" placeholder={'이메일 주소'} />
								<Input type="password" placeholder={'비밀번호 입력'} />
								<Button className="password-ok">
									<TextStyle greentextLine>비밀번호 보기</TextStyle>
								</Button>
							</CircleDiv>
						</CircleDiv>
					</CircleDiv>
					<CircleDiv className="submit">
						<CircleDiv className="submit-div">
							<Button className="search-password">
								<TextStyle greentextLine>비밀번호를 잊으셨나요?</TextStyle>
							</Button>
							<LoginBtn name="로그인" />
						</CircleDiv>
					</CircleDiv>
					<CircleDiv borderline />
					<CircleDiv className="signup-div">
						<TextStyle blacknormal>에어비앤비 계정이 없으세요?</TextStyle>
						<Button className="signup">
							<TextStyle greentextLine>회원가입</TextStyle>
						</Button>
					</CircleDiv>
					<CircleDiv className="back">
						<TextStyle blacknormal>
							<IoIosArrowBack />
						</TextStyle>
						<Button className="signup">
							<TextStyle greentextLine>뒤로</TextStyle>
						</Button>
					</CircleDiv>
				</CircleDiv>
			</form>
		</Modaldiv>
	);
};

export default LoginPotal;
