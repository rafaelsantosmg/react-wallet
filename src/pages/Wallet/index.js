import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRequest, { saveWalletExpenses, editWalletExpenses } from '../../actions';
import Header from '../../components/Header';
import FormWallet from '../../components/FormWallet';
import TableWallet from '../../components/TableWallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: {
        id: 0,
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
  }

  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  onChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => (
      {
        expenses: {
          ...prevState.expenses, [name]: value,
        },
      }));
  };

  resetState = () => {
    this.setState((prevState) => ({
      expenses: {
        ...prevState.expenses,
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
      isEdit: false,
    }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { handleClick, requestApi, currencies } = this.props;
    this.setState((prevState) => ({
      expenses: {
        ...prevState.expenses,
        id: prevState.expenses.id + 1,
      },
    }));
    requestApi();
    const { expenses, isEdit } = this.state;
    if (!isEdit) {
      handleClick({ ...expenses, exchangeRates: currencies[0] });
    } else {
      this.onChangeEdit(expenses.id);
    }
    this.resetState();
  };

  onChangeEdit = (id) => {
    const { changeIsEdit, currencies, expensesStore } = this.props;
    const { expenses } = this.state;
    const indexExpense = expensesStore.findIndex((expense) => (
      expense.id === id
    ));
    expensesStore[indexExpense] = { ...expenses, exchangeRates: currencies[0] };
    changeIsEdit(expensesStore);
  }

  changeEdit = (condition, id) => {
    const { expensesStore } = this.props;
    const expenses = expensesStore.find((expense) => expense.id === id);
    this.setState({ expenses, isEdit: true });
  }

  render() {
    const { currenciesKey } = this.props;
    const { total, expenses, isEdit } = this.state;
    return (
      <>
        <Header total={ total } />
        <FormWallet
          isEdit={ isEdit }
          expenses={ expenses }
          currenciesKey={ currenciesKey }
          onChangeInput={ this.onChangeInput }
          onSubmit={ this.onSubmit }
        />
        <TableWallet onChangeEdit={ this.changeEdit } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currenciesKey: state.wallet.currenciesKey,
  expensesStore: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchRequest()),
  handleClick: (expenses) => dispatch(saveWalletExpenses(expenses)),
  changeIsEdit: (expenses) => dispatch(editWalletExpenses(expenses)),
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({})),
  requestApi: PropTypes.func,
  currenciesKey: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
  changeIsEdit: PropTypes.func,
  expensesStore: PropTypes.arrayOf(PropTypes.shape({})),
};

Wallet.defaultProps = {
  currencies: [],
  requestApi: () => { },
  currenciesKey: [],
  handleClick: () => { },
  changeIsEdit: () => {},
  expensesStore: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
