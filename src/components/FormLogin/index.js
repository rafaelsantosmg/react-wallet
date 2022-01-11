import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

export default class FormLogin extends Component {
  render() {
    const { isDisabled, onChangeInput, onSubmit, children } = this.props;
    return (
      <form onSubmit={ onSubmit }>
        <div className="mb-3">
          <div className="mb-3 row">
            <div className="mb-3">
              <Input
                label="Email"
                type="email"
                name="email"
                dataTestId="email-input"
                placeholder="email@email.com"
                onChangeInput={ onChangeInput }
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="mb-3">
              <Input
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
  onChangeInput: PropTypes.func,
  isDisabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  children: PropTypes.string,
};

FormLogin.defaultProps = {
  onChangeInput: () => {},
  isDisabled: false,
  onSubmit: () => {},
  children: '',
};
