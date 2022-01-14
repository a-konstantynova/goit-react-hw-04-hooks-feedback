import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.feedbackBtn} onClick={onGood}>
        Good
      </button>
      <button type="button" className={s.feedbackBtn} onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className={s.feedbackBtn} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
