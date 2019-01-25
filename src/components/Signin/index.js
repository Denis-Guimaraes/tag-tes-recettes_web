// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid/v4';

// Local import
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';
import ErrorForm from 'src/components/ErrorForm';
import Loader from 'src/components/Loader';

// Styles
import './signin.scss';

// Code
class Signin extends React.Component {
  state = {
    errorList: [],
    loading: false,
  };

  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    submitSignin: PropTypes.func.isRequired,
    userMessage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }

  componentDidUpdate() {
    const { userMessage } = this.props;
    if (userMessage.length !== 0) {
      this.loaded();
    }
  }

  validateData = () => {
    const errorList = [];
    const { email, password } = this.props;
    if (email.indexOf('@') <= 1) {
      errorList.push('Email invalide');
    }
    if (password.length < 6) {
      errorList.push('Mot de passe invalide');
    }
    return errorList;
  }

  submitSignin = () => {
    const validateData = this.validateData();
    const { submitSignin } = this.props;
    if (validateData.length === 0) {
      submitSignin();
      this.setState({ errorList: validateData, loading: true });
    }
    else {
      this.setState({ errorList: validateData });
    }
  }

  loaded = () => {
    const { loading } = this.state;
    if (loading) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { location } = this.props;
    const { errorList, loading } = this.state;
    const signinClass = classNames('signin',
      { 'signin--show': location.pathname === '/connexion' });
    return (
      <form className={signinClass}>
        <h2 className="signin__title">Connexion</h2>
        <Email inputId="signin-email" />
        <Password inputId="signin-password" />
        <div className="signin__button--down">
          {errorList.length > 0 && errorList.map(error => <ErrorForm key={uuid()} error={error} />)}
          {loading && <Loader />}
          <button type="button" className="signin__button" onClick={this.submitSignin}>
            Connexion
          </button>
        </div>
      </form>
    );
  }
}

// Export
export default Signin;
