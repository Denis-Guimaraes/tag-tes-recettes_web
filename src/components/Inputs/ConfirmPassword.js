// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import

// Styles
import './input.scss';

// Code
class ConfirmPassword extends React.Component {
  static propTypes = {
    confirmPassword: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (evt) => {
    const { onChange } = this.props;
    const { value } = evt.target;
    const fieldName = evt.target.name;
    onChange(fieldName, value);
  }


  checkPassword = (confirmPassword) => {
    if (confirmPassword === '') {
      return 'input__text';
    }
    if (confirmPassword.length >= 8) {
      return 'input__text input__text--good';
    }
    return 'input__text input__text--bad';
  }

  render() {
    const { confirmPassword, inputId } = this.props;
    return (
      <div className="input">
        <label htmlFor={inputId} className="input__label">Confirmer mot de passe</label>
        <input
          className={this.checkPassword(confirmPassword)}
          type="password"
          id={inputId}
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange}
          placeholder="Confirmer mot de passe"
        />
      </div>
    );
  }
}

// Export
export default ConfirmPassword;
