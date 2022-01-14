import { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistic from '../statistic/Statistic';
import Section from '../section/Section';
import Notification from '../notificationMessage/Notification ';
import s from './Feedback.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercent;
    const total = good + neutral + bad;
    positiveFeedbackPercent =
      total === 0 ? 0 : Math.round((good * 100) / total);
    return positiveFeedbackPercent + '%';
  };

  return (
    <div className={s.container}>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          onGood={() => setGood(prevState => prevState + 1)}
          onNeutral={() => setNeutral(prevState => prevState + 1)}
          onBad={() => setBad(prevState => prevState + 1)}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
