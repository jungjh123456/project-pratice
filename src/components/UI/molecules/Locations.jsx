import CircleDiv from '../atoms/CircleDiv';
import Img from '../atoms/Img';
import TextStyle from '../atoms/TextStyle';

const Locations = ({ src, alt, name, subtitle, ...rest }) => {
	return (
		<>
			<div className="locations-img">
				<CircleDiv {...rest}>
					<Img src={src} alt={alt} {...rest} />
				</CircleDiv>
				<TextStyle {...rest}>{name}</TextStyle>
				{subtitle && <TextStyle>{subtitle}</TextStyle>}
			</div>
		</>
	);
};

export default Locations;
