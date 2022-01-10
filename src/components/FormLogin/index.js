import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

export default class FormLogin extends Component {
  render() {
    const { isDisabled, onChangeInput, onSubmit,
      inputId, buttonId, children } = this.props;
    return (
      <form onSubmit={ onSubmit }>
        <div className="mb-3">
          <div className="mb-3 row">
            <div className="mb-3">
              <Input
                id={ inputId }
                label="Email"
                placeholder="email@email.com"
                onChangeInput={ onChangeInput }
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="mb-3">
              <Input
                id={ inputId }
                label="Password"
                placeholder="password"
                onChangeInput={ onChangeInput }
              />
            </div>
          </div>
          <Button
            id={ buttonId }
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
  onChangeInput: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputId: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
