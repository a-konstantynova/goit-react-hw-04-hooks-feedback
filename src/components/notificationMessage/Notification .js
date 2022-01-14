import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div>
      <span className={s.notification}>{message}</span>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
