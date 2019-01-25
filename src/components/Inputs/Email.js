// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import

// Styles
import './input.scss';

// Code
class Email extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (evt) => {
    const { onChange } = this.props;
    const { value } = evt.target;
    const fieldName = evt.target.name;
    onChange(fieldName, value.trim());
  }


  checkEmail = (email) => {
    if (email === '') {
      return 'input__text';
    }
    if (email.indexOf('@') > 0) {
      return 'input__text input__text--good';
    }
    return 'input__text input__text--bad';
  }

  render() {
    const { email, inputId } = this.props;
    return (
      <div className="input">
        <label htmlFor={inputId} className="input__label">E-mail</label>
        <input
          className={this.checkEmail(email)}
          type="email"
          id={inputId}
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="E-mail"
        />
      </div>
    );
  }
}

// Export
export default Email;
