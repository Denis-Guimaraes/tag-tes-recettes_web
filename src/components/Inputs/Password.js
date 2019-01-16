// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import

// Styles
import './input.scss';

// Code
class Password extends React.Component {
  static propTypes = {
    password: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (evt) => {
    const { onChange } = this.props;
    const { value } = evt.target;
    const fieldName = evt.target.name;
    onChange(fieldName, value);
  }


  checkPassword = (password) => {
    if (password === '') {
      return 'input__text';
    }
    if (password.length >= 8) {
      return 'input__text input__text--good';
    }
    return 'input__text input__text--bad';
  }

  render() {
    const { password, inputId } = this.props;
    return (
      <div className="input">
        <label htmlFor={inputId} className="input__label">Mot de passe</label>
        <input
          className={this.checkPassword(password)}
          type="password"
          id={inputId}
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Mot de passe"
        />
      </div>
    );
  }
}

// Export
export default Password;
