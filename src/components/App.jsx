import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notifications';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNatural] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const PositiveFeedbackPercentage = () => {
    const countPositiveFeedback = (
      (good / countTotalFeedback()) *
      100
    ).toFixed();
    return Number(countPositiveFeedback);
  };

  const handleChange = e => {
    const item = e.currentTarget.name;
    switch (item) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNatural(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Plese leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={PositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
