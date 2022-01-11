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
    const { currencies } = this.props;
    return (
      <>
        <Header />
        <FormWallet currencies={ currencies } />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchRequest()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
});

Wallet.propTypes = {
  requestApi: PropTypes.func,
  currencies: PropTypes.objectOf(),
};

Wallet.defaultProps = {
  requestApi: () => {},
  currencies: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
