// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid/v4';

// Local import
import Username from 'src/containers/Inputs/Username';
import Email from 'src/containers/Inputs/Email';
import Password from 'src/containers/Inputs/Password';
import ConfirmPassword from 'src/containers/Inputs/ConfirmPassword';
import ErrorForm from 'src/components/ErrorForm';
import Loader from 'src/components/Loader';

// Styles
import './signup.scss';

// Code
class Signup extends React.Component {
  state = {
    errorList: [],
    loading: false,
  }

  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
    submitSignup: PropTypes.func.isRequired,
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
    const { email, password, confirmPassword } = this.props;
    if (email.indexOf('@') <= 0) {
      errorList.push('Email : mauvais format d\'email');
    }
    if (password.length < 6) {
      errorList.push('Mot de passe : minimum 6 caractères');
    }
    if (password !== confirmPassword) {
      errorList.push('Erreur confirmation mot de passe');
    }
    return errorList;
  }

  submitSignup = (evt) => {
    evt.preventDefault();
    const validateData = this.validateData();
    const { submitSignup } = this.props;
    if (validateData.length === 0) {
      submitSignup();
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
    const signupClass = classNames('signup', {
      'signup--show': location.pathname === '/inscription',
    });
    return (
      <>
        <form className={signupClass} onSubmit={this.submitSignup}>
          <h2 className="signup__title">Inscription</h2>
          <Username inputId="signup-username" />
          <Email inputId="signup-email" />
          <Password inputId="signup-password" />
          <ConfirmPassword inputId="signup-confirm_password" />
          {errorList.length > 0 && errorList.map(error => <ErrorForm key={uuid()} error={error} />)}
          {loading && <Loader />}
          <button type="submit" className="signup__button">Inscription</button>
        </form>
      </>
    );
  }
}

// Export
export default Signup;
