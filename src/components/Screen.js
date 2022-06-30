import PropTypes from 'prop-types';

const Screen = (props) => {
  const { result } = props;
  return (
    <div className="item screen">
      <p>{ result }</p>
    </div>
  );
};

Screen.propTypes = {
  result: PropTypes.number.isRequired,
};

export default Screen;
