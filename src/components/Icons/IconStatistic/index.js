import PropTypes from 'prop-types';

export default function IconStatistic({ className, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
    >
      <g className={className} fillRule="evenodd" clipRule="evenodd">
        <path d="M2 1.333c.368 0 .667.299.667.667v10.667a.667.667 0 0 0 .667.666H14a.667.667 0 0 1 0 1.334H3.334a2 2 0 0 1-2-2V2c0-.368.298-.667.666-.667Z" />
        <path d="M14.471 4.862c.26.26.26.682 0 .943l-4 4a.667.667 0 0 1-.942 0L7.333 7.61 5.138 9.805a.667.667 0 1 1-.943-.943l2.667-2.667c.26-.26.682-.26.943 0L10 8.391l3.529-3.529c.26-.26.682-.26.942 0Z" />
        <path d="M11.334 5.333c0-.368.298-.666.666-.666h2c.368 0 .667.298.667.666v2a.667.667 0 1 1-1.333 0V6H12a.667.667 0 0 1-.666-.667Z" />
      </g>
    </svg>
  );
}

IconStatistic.propTypes = {
  className: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
