// NPM import
import React from 'react';
import PropTypes from 'prop-types';

// Components import

// Styles
import './errorForm.scss';

// Code
const ErrorForm = ({ error }) => (
  <span className="error-form">{error}</span>
);

ErrorForm.propTypes = {
  error: PropTypes.string.isRequired,
};

// Export
export default ErrorForm;
