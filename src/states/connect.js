import { on } from 'jetemit';
import { state } from 'jetstate';
import React, { PureComponent } from 'react';

/**
 * 
 * @param {class} Component 
 * @param {array} fields array of state field
 */
function connect(Component, fields) {
  return class Time extends PureComponent {
    state = fields.reduce((a, b) => ({
      ...a,
      [b]: state[b],
    }), {});
    componentDidMount = () =>
      fields.forEach(field =>
        on(field, () =>
          this.setState({ [field]: state[field] })));

    render = () =>
      <Component {...this.props} {...this.state} />
  }
}

export default connect;