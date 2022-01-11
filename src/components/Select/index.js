import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { label, dataTestId } = this.props;
    return (
      <label
        className="input-group-text"
        htmlFor="inputGroupSelect01"
      >
        { label }
        <select
          className="form-select"
          id="inputGroupSelect01"
          data-testid={ dataTestId }
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
