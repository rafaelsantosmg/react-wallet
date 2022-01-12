import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableWallet extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <tr key={ expense.id } className="table-active">
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>
                { Number(expense.value
                    * expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>Real</td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
};

TableWallet.defaultProps = {
  expenses: [''],
};

export default connect(mapStateToProps)(TableWallet);
