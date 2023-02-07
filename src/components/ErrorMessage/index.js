import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './errorMessage.scss';

function ErrorMessage({ error, resetError }) {
  return (
    <div className="error">
      <div className="error-dialog">
        <FontAwesomeIcon icon={faExclamationCircle} />
        <div className="error-dialog__body">
          <h1 className="error-dialog__body-title">Something went wrong</h1>
          <p className="error-dialog__body-text">{error}</p>
        </div>
        <button className="button" onClick={resetError}>
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
