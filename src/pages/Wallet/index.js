import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import FormWallet from '../../components/FormWallet';
import fetchRequest from '../../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  render() {
    const { currenciesKey } = this.props;
    return (
      <>
        <Header />
        <FormWallet currenciesKey={ currenciesKey } />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchRequest()),
});

const mapStateToProps = (state) => ({
  currenciesKey: state.wallet.currenciesKey,
  loading: state.wallet.loading,
});

Wallet.propTypes = {
  requestApi: PropTypes.func,
  currenciesKey: PropTypes.arrayOf(PropTypes.string),
};

Wallet.defaultProps = {
  requestApi: () => {},
  currenciesKey: [''],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
