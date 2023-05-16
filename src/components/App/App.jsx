import React, { useState } from 'react';

import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackButtons/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/SectionTitle/Section';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, totalFeedbacks) => {
    if (totalFeedbacks > 0) {
      return Math.round((100 * good) / totalFeedbacks);
    }
    return 0;
  };

  const totalFeedbacks = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(
    good,
    totalFeedbacks
  );

  return (
    <Container>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
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
