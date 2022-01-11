import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, dataTestId, name, value, type,
      label, onChangeInput, placeholder } = this.props;
    return (
      <label htmlFor={ id } className="col-form-label">
        { label }
        <input
          id={ id }
          type={ type }
          name={ name }
          value={ name === 'value' ? value : null }
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
  value: PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
  type: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  dataTestId: '',
  name: '',
  value: 0,
  label: '',
  placeholder: '',
  type: '',
  onChangeInput: () => { },
};
