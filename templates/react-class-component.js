import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styles } from 'styles';

const classes = styles(theme => ({
  something: {
    someprop: theme.unit
  }
}));

class Name extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}

  render() {
    return <div className={classes.something}>{someprop}</div>;
  }
}

Name.propTypes = {
  someprop: PropTypes.number.isRequired
};

Name.defaultProps = {
  someprop: 1
};

export default Name;
