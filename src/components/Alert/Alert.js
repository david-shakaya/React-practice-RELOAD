import PropTypes from 'prop-types';
import s from './Alert.module.css';

// s[type];
// Конструкция стилизует в зависимости от того типа которій приходит
// в стилях вібирается один из 3-ех типов

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
