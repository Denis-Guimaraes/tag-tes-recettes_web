// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

// Components import

// Styles import
import './modal.scss';

// Code
const Modal = ({ userMessage, closeModal }) => (
  <div className="modal-wrapper">
    <div className="modal">
      {userMessage.map(message => <span key={uuid()} className="modal__message">{message}</span>)}
      <button type="button" className="modal__button" onClick={closeModal}>Fermer</button>
    </div>
  </div>
);

Modal.propTypes = {
  userMessage: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  closeModal: PropTypes.func.isRequired,
};

// Export
export default Modal;
