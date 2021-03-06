import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { name, value, label, dataTestId, options, onChangeSelect } = this.props;
    return (
      <label
        className="col-form-label"
        htmlFor="inputGroupSelect01"
      >
        { label }
        <select
          name={ name }
          value={ value }
          className="form-select"
          id="inputGroupSelect01"
          data-testid={ dataTestId }
          onChange={ onChangeSelect }
        >
          { options.filter((option) => option !== 'USDT').map((option, index) => (
            <option
              key={ index }
              value={ option }
              data-testid={ option }
            >
              { option }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  dataTestId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChangeSelect: PropTypes.func,
};

Select.defaultProps = {
  name: '',
  value: '',
  label: '',
  dataTestId: '',
  options: [''],
  onChangeSelect: () => {},
};
