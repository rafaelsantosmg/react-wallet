import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { label, dataTestId, options } = this.props;
    return (
      <label
        className="col-form-label"
        htmlFor="inputGroupSelect01"
      >
        { label }
        <select
          className="form-select"
          id="inputGroupSelect01"
          data-testid={ dataTestId }
        >
          <option value="Selected">Selecione...</option>
          { options.map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  dataTestId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  label: '',
  dataTestId: '',
  options: [''],
};
