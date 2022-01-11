import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import trybeLogo from '../../images/trybe_logo.png';
import './style.css';

export class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header className="header">
        <div className="header-content">
          <img className="logo" src={ trybeLogo } alt="Logo Trybe" />
          <div className="user-email">
            <p data-testid="email-field">{email}</p>
          </div>
          <p
            data-testid="total-field"
          >
            <span data-testid="total-field">{ `Despesas Totais ${total}` }</span>
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
};

Header.defaultProps = {
  email: '',
  total: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
