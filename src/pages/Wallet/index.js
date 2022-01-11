import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRequest, { saveWalletExpenses } from '../../actions';
import Header from '../../components/Header';
import FormWallet from '../../components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: {
        id: 0,
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
      total: 0,
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

  onSubmit = (event) => {
    event.preventDefault();
    const { handleClick, requestApi, currencies } = this.props;
    this.setState((prevState) => ({
      expenses: {
        id: prevState.expenses.id + 1,
        value: 0,
        description: '',
        currency: 'USD',
      },
    }));
    requestApi();
    const { expenses } = this.state;
    handleClick({ ...expenses, exchangeRates: currencies[0] });
    this.sumExpenses();
  };

  sumExpenses = () => {
    const { currencies } = this.props;
    const { expenses: { value, currency } } = this.state;
    const currencyFind = Object.values(currencies[0])
      .find((curr) => curr.code === currency);
    const sum = value * currencyFind.ask;
    this.setState((prevState) => ({ total: prevState.total + sum }));
  };

  render() {
    const { currenciesKey } = this.props;
    const { total, expenses: { value } } = this.state;
    return (
      <>
        <Header total={ total } />
        <FormWallet
          value={ value }
          currenciesKey={ currenciesKey }
          onChangeInput={ this.onChangeInput }
          onSubmit={ this.onSubmit }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchRequest()),
  handleClick: (expenses) => dispatch(saveWalletExpenses(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currenciesKey: state.wallet.currenciesKey,
  expensesStore: state.wallet.expenses,
  id: state.wallet.expenses.length,
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({})),
  requestApi: PropTypes.func,
  currenciesKey: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
};

Wallet.defaultProps = {
  currencies: {},
  requestApi: () => { },
  currenciesKey: [''],
  handleClick: () => { },
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
