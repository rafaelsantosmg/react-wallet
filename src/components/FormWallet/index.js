import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';
import './style.css';

export default class FormWallet extends Component {
  render() {
    const { inputId, onChangeInput } = this.props;
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
              type="moeda"
              label="Moeda"
              dataTestId="currency-input"
            />
          </div>
          <div className="col">
            <Select
              type="metodo"
              label="Método de Pagamento"
              dataTestId="method-input"
            />
          </div>
          <div className="col">
            <Select
              type="tag"
              label="Tag"
              dataTestId="tag-input"
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
};

FormWallet.defaultProps = {
  inputId: '',
  onChangeInput: () => { },
};
