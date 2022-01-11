import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';
import './style.css';

export default class FormWallet extends Component {
  render() {
    const { inputId, onChangeInput, currenciesKey } = this.props;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagCategories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form className="wallet-form">
        <div className="row">
          <div className="col">
            <span
              className="input-group-text"
              id="basic-addon1"
            >
              Valor
            </span>
            <Input
              id={ inputId }
              type="text"
              name="despesa"
              dataTestId="value-input"
              placeholder="R$ 0,00"
              onChangeInput={ onChangeInput }
            />
          </div>
          <div className="col">
            <Select
              label="Moeda"
              dataTestId="currency-input"
              options={ currenciesKey }
            />
          </div>
          <div className="col">
            <Select
              label="Método de Pagamento"
              dataTestId="method-input"
              options={ paymentMethod }
            />
          </div>
          <div className="col">
            <Select
              label="Tag"
              dataTestId="tag-input"
              options={ tagCategories }
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
              id={ inputId }
              type="text"
              name="description"
              dataTestId="description-input"
              placeholder="Descrição"
              onChangeInput={ onChangeInput }
            />
          </div>
        </div>
      </form>
    );
  }
}

FormWallet.propTypes = {
  inputId: PropTypes.string,
  onChangeInput: PropTypes.func,
  currenciesKey: PropTypes.arrayOf(PropTypes.string),
};

FormWallet.defaultProps = {
  inputId: '',
  onChangeInput: () => { },
  currenciesKey: [],
};
