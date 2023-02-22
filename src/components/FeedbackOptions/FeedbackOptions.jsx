import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Fragment>
      {Object.keys(options).map(key => {
        return (
          <button type="button" key={key} onClick={onLeaveFeedback}>
            {key}
          </button>
        );
      })}
    </Fragment>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
