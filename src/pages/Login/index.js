import React from 'react';
import FormLogin from '../../components/FormLogin';
import './style.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-page" data-testid="page-login">
        <FormLogin
          title="Usuário"
        >
          Entrar
        </FormLogin>
      </div>
    );
  }
}

export default Login;
