import PropTypes from 'prop-types';

export default function Header({
  theme,
  buttonText,
  buttonColor,
  buttonHref,
  logo,
}) {
  return (
    <div className={theme}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <a href={buttonHref} className={buttonColor}>
        {buttonText}
      </a>
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
