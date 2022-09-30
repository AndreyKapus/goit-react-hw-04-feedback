import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notifications';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  PositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countPositiveFeedback = (
      (good / this.countTotalFeedback()) *
      100
    ).toFixed();
    return Number(countPositiveFeedback);
  };

  handleChange = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleChange}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.PositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
