import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UndrawTabs from './node_modules/components/undraw-tabs/UndrawTabs.js';
import UndrawDesigner from './node_modules/components/undraw-designer/UndrawDesigner.js';
import UndrawEverywhere from './node_modules/components/undraw-everywhere/UndrawEverywhere.js';
import UndrawResponsive from './node_modules/components/undraw-responsive/UndrawResponsive.js';
import UndrawBrowser from './node_modules/components/undraw-browser/UndrawBrowser.js';


class App extends Component {
  render() {
    const containerStyle={
      width:'400px',height:'400px', float:'left', padding:'25px'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Undraw Illustrations as React Components</h1>
        </header>
        <p className="App-intro">
          <div style={containerStyle}>
            <UndrawBrowser/>
          </div>
          <div style={containerStyle}>
            <UndrawDesigner/>
          </div>
          <div style={containerStyle}>
            <UndrawEverywhere/>
          </div>
          <div style={containerStyle}>
            <UndrawResponsive/>
          </div>
          <div style={containerStyle}>
            <UndrawTabs/>
          </div>
          
        </p>
      </div>
    );
  }
}

export default App;
