import PropTypes from 'prop-types';
import s from './Alert.module.css';

const Alert = ({ text, type }) => {
  return (
    <>
      <p className={s[type]}>{text}</p>
    </>
  );
};

export default Alert;

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'alertSuccessfully', 'alertError'])
    .isRequired,
};
