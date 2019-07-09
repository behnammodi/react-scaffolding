import React from 'react';
import { styles } from 'styles';

const classes = styles(theme => ({
  button: {
    width: theme.unit * 60,
    paddingRight: theme.unit
  }
}));

function Button({ children, disabled, onClick }) {
  return (
    <button className={classes.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
