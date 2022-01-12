import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRequest, { saveWalletExpenses } from '../../actions';
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

  onSubmit = (event) => {
    event.preventDefault();
    const { handleClick, requestApi, currencies } = this.props;
    this.setState((prevState) => ({
      expenses: {
        id: prevState.expenses.id + 1,
        value: '0',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    }));
    requestApi();
    const { expenses } = this.state;
    handleClick({ ...expenses, exchangeRates: currencies[0] });
  };

  render() {
    const { currenciesKey } = this.props;
    const { total, expenses } = this.state;
    return (
      <>
        <Header total={ total } />
        <FormWallet
          expenses={ expenses }
          currenciesKey={ currenciesKey }
          onChangeInput={ this.onChangeInput }
          onSubmit={ this.onSubmit }
        />
        <TableWallet />
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
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({})),
  requestApi: PropTypes.func,
  currenciesKey: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func,
};

Wallet.defaultProps = {
  currencies: [],
  requestApi: () => { },
  currenciesKey: [],
  handleClick: () => { },
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
