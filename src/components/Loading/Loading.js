import React, { Component } from 'react';

import './loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-container">
          <div className="loading-icon"></div>
          <div className="loading-icon"></div>
          <div className="loading-icon"></div>
        </div>

        <span>Loading...</span>
      </div>
    );
  }
}
