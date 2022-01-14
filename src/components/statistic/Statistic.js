import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        Good: {good > 0 ? <span className={s.value}>{good}</span> : good}
      </li>
      <li className={s.item}>
        Neutral:{' '}
        {neutral > 0 ? <span className={s.value}>{neutral}</span> : neutral}
      </li>
      <li className={s.item}>
        Bad: {bad > 0 ? <span className={s.value}>{bad}</span> : bad}
      </li>
      <li className={s.item}>
        Total: {total > 0 ? <span className={s.value}>{total}</span> : total}
      </li>
      <li className={s.item}>
        Positive feedback:{' '}
        {positivePercentage !== '0%' ? (
          <span className={s.value}>{positivePercentage}</span>
        ) : (
          positivePercentage
        )}
      </li>
    </ul>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistic;
