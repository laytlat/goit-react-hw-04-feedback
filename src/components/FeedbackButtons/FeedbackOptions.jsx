import PropTypes from 'prop-types';

import {
  ButtonsContainer,
  ButtonsList,
  ButtonsListItem,
  Button,
} from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonsContainer>
      <ButtonsList>
        {options.map(option => {
          return (
            <ButtonsListItem key={option}>
              <Button value={option} type="button" onClick={onLeaveFeedback}>
                {option}
              </Button>
            </ButtonsListItem>
          );
        })}
      </ButtonsList>
    </ButtonsContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
