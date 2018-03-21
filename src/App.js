import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UndrawBrowser from './components/undraw-illustrations/undraw-browser/undraw-browser.js';
import UndrawDesigner from './components/undraw-illustrations/undraw-designer/undraw-designer.js';
import UndrawEverywhere from './components/undraw-illustrations/undraw-everywhere/undraw-everywhere.js';
import UndrawResponsive from './components/undraw-illustrations/undraw-responsive/undraw-responsive.js';
import UndrawTabs from './components/undraw-illustrations/undraw-tabs/undraw-tabs.js';


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
