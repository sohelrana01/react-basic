import PropTypes from 'prop-types';

export default function Clock({ time }) {
    let hours = time.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
}

Clock.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
};