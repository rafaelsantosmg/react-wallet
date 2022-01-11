import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { paymentMethod, tagCategories } from '../../services/data';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import './style.css';

export default class FormWallet extends Component {
  render() {
    const { value, onChangeInput, currenciesKey, onSubmit } = this.props;
    return (
      <form className="wallet-form" onSubmit={ onSubmit }>
        <div className="row">
          <div className="col">
            <span
              className="input-group-text"
              id="basic-addon1"
            >
              Valor
            </span>
            <Input
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
              dataTestId="currency-input"
              options={ currenciesKey }
              onChangeSelect={ onChangeInput }
            />
          </div>
          <div className="col">
            <Select
              name="method"
              label="Método de Pagamento"
              dataTestId="method-input"
              options={ paymentMethod }
              onChangeSelect={ onChangeInput }
            />
          </div>
          <div className="col">
            <Select
              name="tag"
              label="Tag"
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
              type="text"
              name="description"
              dataTestId="description-input"
              placeholder="Descrição"
              onChangeInput={ onChangeInput }
            />
          </div>
          <div className="col">
            <Button>
              Adicionar despesa
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

FormWallet.propTypes = {
  value: PropTypes.number,
  onChangeInput: PropTypes.func,
  currenciesKey: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func,
};

FormWallet.defaultProps = {
  value: 0,
  onChangeInput: () => { },
  currenciesKey: [],
  onSubmit: () => {},
};
