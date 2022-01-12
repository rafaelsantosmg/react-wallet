import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import trybeLogo from '../../images/trybe_logo.png';
import './style.css';

export class Header extends Component {
  sumExpenses = () => {
    const { expenses } = this.props;
    if (expenses.length !== 0) {
      const sum = expenses.reduce((acc, expense) => {
        if (expense.currency === expense.exchangeRates[expense.currency].code) {
          acc += (expense.value * expense.exchangeRates[expense.currency].ask);
          return acc;
        }
        return acc;
      }, 0);
      return sum;
    }
    return 0;
  }

  render() {
    const total = this.sumExpenses();
    const { email } = this.props;
    return (
      <header className="header">
        <div className="header-content">
          <img className="logo" src={ trybeLogo } alt="Logo Trybe" />
          <div className="user-email">
            <p data-testid="email-field">{email}</p>
          </div>
          <p>
            Despesa totais R$
            {'  '}
            <span
              data-testid="total-field"
            >
              { Number(total).toFixed(2) }
            </span>
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
};

Header.defaultProps = {
  email: '',
  expenses: [''],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
