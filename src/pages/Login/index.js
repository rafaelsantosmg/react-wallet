import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormLogin from '../../components/FormLogin';
import './style.css';
import { saveUser } from '../../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  onChangeInput = ({ target }) => {
    const { name, value } = target;
    const minLength = 6;
    const validEmail = 'alguem@email.com';
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const validUser = (email === validEmail && password.length >= minLength);
      this.setState({ isDisabled: !validUser });
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { history, handleClick } = this.props;
    const { email } = this.state;
    handleClick(email);
    history.push('/carteira');
  }

  render() {
    const { isDisabled, email, password } = this.state;
    return (
      <div className="login-page" data-testid="page-login">
        <FormLogin
          email={ email }
          password={ password }
          title="Usuário"
          onChangeInput={ this.onChangeInput }
          isDisabled={ isDisabled }
          onSubmit={ this.onSubmit }
        >
          Entrar
        </FormLogin>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (payload) => dispatch(saveUser(payload)),
});

Login.propTypes = {
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
