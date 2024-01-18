import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({
  theme,
  buttonText,
  buttonColor,
  buttonHref,
  logo,
}) {
  return (
    <div className={theme}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to={buttonHref} className={buttonColor}>
        {buttonText}
      </Link>
    </div>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonHref: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};
