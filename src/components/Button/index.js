import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { children, id, isDisabled } = this.props;
    return (
      <button
        data-testid={ id }
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={ isDisabled }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  id: '',
  isDisabled: false,
};
