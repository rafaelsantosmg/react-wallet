import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterWalletExpenses } from '../../actions';
import Button from '../Button';

class TableWallet extends Component {
  deleteExpense = (id) => {
    const { expenses, removeExpense } = this.props;
    const filterExpenses = expenses.filter((expense) => expense.id !== id);
    removeExpense(filterExpenses);
  }

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
              <td>
                <Button
                  type="button"
                  btnClass="btn btn-dark"
                >
                  <i className="bi bi-pencil-square" style={ { fontSize: '20px' } } />
                </Button>
                { ' ' }
                <Button
                  type="button"
                  btnClass="btn btn-dark"
                  dataTestId="delete-btn"
                  onChangeClick={ () => this.deleteExpense(expense.id) }
                >
                  <i className="bi bi-journal-x" style={ { fontSize: '20px' } } />
                </Button>
              </td>
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

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(filterWalletExpenses(expense)),
});

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
  removeExpense: PropTypes.func,
};

TableWallet.defaultProps = {
  expenses: [''],
  removeExpense: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);
