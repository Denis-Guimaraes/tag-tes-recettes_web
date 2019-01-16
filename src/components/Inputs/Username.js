// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Local import

// Styles
import './input.scss';

// Code
class Username extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (evt) => {
    const { onChange } = this.props;
    const { value } = evt.target;
    const fieldName = evt.target.name;
    onChange(fieldName, value);
  }


  checkUsername = (username) => {
    if (username === '') {
      return 'input__text';
    }
    if (username.length >= 2) {
      return 'input__text input__text--good';
    }
    return 'input__text input__text--bad';
  }

  render() {
    const { username } = this.props;
    return (
      <div className="input">
        <label htmlFor="username" className="input__label">Nom d'utilisateur</label>
        <input
          className={this.checkUsername(username)}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={this.handleChange}
          placeholder="Nom d'utilisateur"
        />
      </div>
    );
  }
}

// Export
export default Username;
