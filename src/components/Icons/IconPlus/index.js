import PropTypes from 'prop-types';

export default function IconPlus({ className, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00016 2.33325C8.55245 2.33325 9.00016 2.78097 9.00016 3.33325V6.99992H12.6668C13.2191 6.99992 13.6668 7.44763 13.6668 7.99992C13.6668 8.5522 13.2191 8.99992 12.6668 8.99992H9.00016V12.6666C9.00016 13.2189 8.55245 13.6666 8.00016 13.6666C7.44788 13.6666 7.00016 13.2189 7.00016 12.6666V8.99992H3.3335C2.78121 8.99992 2.3335 8.5522 2.3335 7.99992C2.3335 7.44763 2.78121 6.99992 3.3335 6.99992H7.00016V3.33325C7.00016 2.78097 7.44788 2.33325 8.00016 2.33325Z"
      />
    </svg>
  );
}

IconPlus.propTypes = {
  className: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
