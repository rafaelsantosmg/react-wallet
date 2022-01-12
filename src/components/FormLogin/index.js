import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

export default class FormLogin extends Component {
  render() {
    const { email, password, isDisabled, onChangeInput, onSubmit, children } = this.props;
    return (
      <form onSubmit={ onSubmit }>
        <div className="mb-3">
          <div className="mb-3 row">
            <div className="mb-3">
              <Input
                id="email-id"
                label="Email"
                type="email"
                name="email"
                value={ email }
                dataTestId="email-input"
                placeholder="email@email.com"
                onChangeInput={ onChangeInput }
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="mb-3">
              <Input
                id="password-id"
                value={ password }
                type="password"
                dataTestId="password-input"
                label="Password"
                placeholder="password"
                onChangeInput={ onChangeInput }
                name="password"
              />
            </div>
          </div>
          <Button
            isDisabled={ isDisabled }
          >
            { children }
          </Button>
        </div>
      </form>
    );
  }
}

FormLogin.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeInput: PropTypes.func,
  isDisabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  children: PropTypes.string,
};

FormLogin.defaultProps = {
  email: '',
  password: '',
  onChangeInput: () => {},
  isDisabled: false,
  onSubmit: () => {},
  children: '',
};
