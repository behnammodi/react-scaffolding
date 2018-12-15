import React, { PureComponent } from 'react';
import { on } from 'jetemit';
import { state } from 'jetstate';

/**
 * connect component with jetstate and jetemit
 * @param {class} Component 
 * @param {array} fields array of state field
 */
const connect = (Component, fields) => {
  return class Connect extends PureComponent {
    unsubscribes = [];
    state = fields.reduce((a, b) => ({
      ...a,
      [b]: state[b],
    }), {});
    componentDidMount = () =>
      fields.forEach(field =>
        this.unsubscribes.push(
          on(field, () =>
            this.setState({ [field]: state[field] }))));

    componentWillUnmount = () =>
      this.unsubscribes.forEach(unsubscribe =>
        unsubscribe());

    render = () =>
      <Component {...this.props} {...this.state} />
  }
}

export default connect;