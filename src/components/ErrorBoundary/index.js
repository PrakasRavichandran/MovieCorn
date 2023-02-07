import React from 'react';
import ErrorMessage from '../ErrorMessage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  resetError = () => {
    this.setState({ hasError: false, errorMessage: null });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorMessage error={this.state.errorMessage} resetError={this.resetError}></ErrorMessage>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
