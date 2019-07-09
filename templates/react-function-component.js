import React from 'react';
import PropTypes from 'prop-types';
import { styles } from 'styles';

const classes = styles(theme => ({
  something: {
    someprop: theme.unit
  }
}));

function Name({ someprop }) {
  return <div className={classes.something}>{someprop}</div>;
}

Name.propTypes = {
  someprop: PropTypes.number.isRequired
};

Name.defaultProps = {
  someprop: 1
};

export default Name;
