import React from 'react';
import PropTypes from 'prop-types';
import { styles } from 'styles';

const classes = styles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column'
  },
  input: {
    minWidth: theme.unit * 60,
    minHeight: theme.unit * 8,
    borderRadius: theme.borderRadius.b,
    border: [1, 'solid', theme.palette.grey.a],
    padding: [0, theme.unit * 4],
    outline: 'none',
    '&:focus': {
      borderColor: theme.palette.action.selected
    }
  },
  inputError: {
    borderColor: theme.palette.error.main
  },
  errorText: {
    ...theme.typography.hint,
    color: theme.palette.error.main
  }
}));

function Input({ value, disabled, autoFocus, error }) {
  return (
    <div className={classes.root}>
      <input
        className={`${classes.input} ${error && classes.inputError}`}
        value={value}
        disabled={disabled}
        autoFocus={autoFocus}
      />
      {error && <span className={classes.errorText}>{error}</span>}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.any
};

Input.defaultProps = {
  value: '',
  disabled: false,
  autoFocus: false,
  error: ''
};

export default Input;
