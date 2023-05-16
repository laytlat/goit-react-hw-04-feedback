import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  StatisticsList,
  StatisticsListItem,
  StatisticsText,
} from './Statistics.styled';

export function Statistics({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positiveFeedbackPercentage,
}) {
  return (
    <StatisticsContainer>
      <StatisticsList>
        <StatisticsListItem>
          <StatisticsText>Good: {good}</StatisticsText>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>Neutral: {neutral}</StatisticsText>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>Bad: {bad}</StatisticsText>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>Total: {totalFeedbacks}</StatisticsText>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>
            Positive feedback: {positiveFeedbackPercentage} %
          </StatisticsText>
        </StatisticsListItem>
      </StatisticsList>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
