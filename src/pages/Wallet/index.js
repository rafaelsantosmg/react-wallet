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
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      total: 0,
    };
  }

  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  onChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { handleClick, requestApi, currencies } = this.props;
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    requestApi();
    handleClick({ ...this.state, exchangeRates: currencies[0] });
  }

  render() {
    const { currenciesKey } = this.props;
    const { total } = this.state;
    return (
      <>
        <Header total={ total } />
        <FormWallet
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
  handleClick: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
