import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { children, dataTestId, isDisabled,
      btnClass, types, onChangeClick } = this.props;
    return (
      <button
        data-testid={ dataTestId }
        type={ types === 'submit' ? 'submit' : 'button' }
        className={ btnClass }
        disabled={ isDisabled }
        onClick={ onChangeClick }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dataTestId: PropTypes.string,
  isDisabled: PropTypes.bool,
  btnClass: PropTypes.string,
  types: PropTypes.string,
  onChangeClick: PropTypes.func,
};

Button.defaultProps = {
  dataTestId: '',
  isDisabled: false,
  btnClass: '',
  types: '',
  onChangeClick: () => {},
};
