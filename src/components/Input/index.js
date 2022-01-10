import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, dataTestId, label, onChangeInput, placeholder } = this.props;
    return (
      <label htmlFor={ id } className="col-form-label">
        { label }
        <input
          id={ id }
          data-testid={ dataTestId }
          type="text"
          className="form-control"
          placeholder={ placeholder }
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
};

Input.defaultProps = {
  id: '',
  dataTestId: '',
  label: '',
  placeholder: '',
  onChangeInput: () => { },
};
