import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { name, label, dataTestId, options, onChangeSelect } = this.props;
    return (
      <label
        className="col-form-label"
        htmlFor="inputGroupSelect01"
      >
        { label }
        <select
          name={ name }
          className="form-select"
          id="inputGroupSelect01"
          data-testid={ dataTestId }
          onChange={ onChangeSelect }
        >
          { options.filter((option) => option !== 'USDT').map((option, index) => (
            <option key={ index } value={ option }>{ option }</option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  dataTestId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChangeSelect: PropTypes.func,
};

Select.defaultProps = {
  name: '',
  label: '',
  dataTestId: '',
  options: [''],
  onChangeSelect: () => {},
};
