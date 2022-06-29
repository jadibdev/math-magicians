/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Screen extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="item screen">
        <p>{ result }</p>
      </div>
    );
  }
}

Screen.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Screen;
