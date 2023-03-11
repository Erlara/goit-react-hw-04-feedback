import { Container, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedBack(option)}
        >
          {option}
        </Button>
      ))}
    </Container>
  );
};

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
