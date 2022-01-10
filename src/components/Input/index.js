import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, dataTestId, name, type,
      label, onChangeInput, placeholder } = this.props;
    return (
      <label htmlFor={ id } className="col-form-label">
        { label }
        <input
          id={ id }
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          placeholder={ placeholder }
          onChange={ onChangeInput }
          className="form-control"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  dataTestId: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
  type: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  dataTestId: '',
  name: '',
  label: '',
  placeholder: '',
  type: '',
  onChangeInput: () => { },
};
