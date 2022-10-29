import PropTypes from 'prop-types';

import Box from 'components/utils/Box';
import {FeedBackButton} from './Feedback.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <Box>
      {options.map(option => (
        <FeedBackButton key={option} onClick={ () => onLeaveFeedback(option) }>{ option }</FeedBackButton>
      )) }
    </Box>
  );
}
 
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;