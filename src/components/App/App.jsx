import React, { Component } from 'react';

import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackButtons/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/SectionTitle/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { value } = e.currentTarget;
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, totalFeedbacks) => {
    if (totalFeedbacks > 0) {
      return Math.round((100 * good) / totalFeedbacks);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      good,
      totalFeedbacks
    );

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalFeedbacks > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedbacks={totalFeedbacks}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
