import PropTypes from 'prop-types';

export default function Header({
  theme, buttonText, buttonColor, logo,
}) {
  return (
    <div className={theme}>
      <img src={logo} alt="logo" />
      <a href="/" className={buttonColor}>{buttonText}</a>
    </div>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};
