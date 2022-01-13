import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { paymentMethod, tagCategories } from '../../services/data';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import './style.css';

export default class FormWallet extends Component {
  render() {
    const { expenses: { value, description, currency, method, tag },
      isEdit, onChangeInput, currenciesKey, onSubmit } = this.props;
    return (
      <form
        className={ isEdit ? 'wallet-form-edit' : 'wallet-form' }
        onSubmit={ onSubmit }
      >
        <div className="row">
          <div className="col">
            <span
              className="input-group-text"
              id="basic-addon1"
            >
              Valor
            </span>
            <Input
              id="value-id"
              type="text"
              name="value"
              value={ value }
              dataTestId="value-input"
              onChangeInput={ onChangeInput }
            />
          </div>
          <div className="col">
            <Select
              name="currency"
              label="Moeda"
              value={ currency }
              dataTestId="currency-input"
              options={ currenciesKey }
              onChangeSelect={ onChangeInput }
            />
          </div>
          <div className="col">
            <Select
              name="method"
              label="Método de Pagamento"
              value={ method }
              dataTestId="method-input"
              options={ paymentMethod }
              onChangeSelect={ onChangeInput }
            />
          </div>
          <div className="col">
            <Select
              name="tag"
              label="Tag"
              value={ tag }
              dataTestId="tag-input"
              options={ tagCategories }
              onChangeSelect={ onChangeInput }
            />
          </div>
          <div className="col">
            <span
              className="input-group-text"
              id="basic-addon1"
            >
              Descrição
            </span>
            <Input
              id="description-id"
              type="text"
              name="description"
              value={ description }
              dataTestId="description-input"
              placeholder="Descrição"
              onChangeInput={ onChangeInput }
            />
          </div>
          <div className="col">
            <Button
              btnClass="btn btn-primary btn-lg"
              types="submit"
            >
              { isEdit ? 'Editar despesa' : 'Adicionar despesa' }
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

FormWallet.propTypes = {
  isEdit: PropTypes.bool,
  expenses: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }),
  onChangeInput: PropTypes.func,
  currenciesKey: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func,
};

FormWallet.defaultProps = {
  isEdit: false,
  expenses: {},
  onChangeInput: () => { },
  currenciesKey: [],
  onSubmit: () => {},
};
