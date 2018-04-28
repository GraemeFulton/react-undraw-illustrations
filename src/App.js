import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UndrawTabs from './node_modules/components/UndrawTabs/UndrawTabs.js';
import UndrawDesigner from './node_modules/components/UndrawDesigner/UndrawDesigner.js';
import UndrawEverywhere from './node_modules/components/UndrawEverywhere/UndrawEverywhere.js';
import UndrawResponsive from './node_modules/components/UndrawResponsive/UndrawResponsive.js';
import UndrawBrowser from './node_modules/components/UndrawBrowser/UndrawBrowser.js';
import UndrawEatingTogether from './node_modules/components/UndrawEatingTogether/UndrawEatingTogether.js';
import UndrawSleeping from './node_modules/components/UndrawSleeping/UndrawSleeping.js';
import UndrawHealthyHabit from './node_modules/components/UndrawHealthyHabit/UndrawHealthyHabit.js';
import UndrawHouseSearching from './node_modules/components/UndrawHouseSearching/UndrawHouseSearching.js';
import UndrawGrowing from './node_modules/components/UndrawGrowing/UndrawGrowing.js';
import UndrawBroadcast from './node_modules/components/UndrawBroadcast/UndrawBroadcast.js';
import UndrawCelebration from './node_modules/components/UndrawCelebration/UndrawCelebration.js';
import UndrawCreditCard from './node_modules/components/UndrawCreditCard/UndrawCreditCard.js';
import UndrawBrainstorming from './node_modules/components/UndrawBrainstorming/UndrawBrainstorming.js';
import UndrawCalendar from './node_modules/components/UndrawCalendar/UndrawCalendar.js';
import UndrawMindfulness from './node_modules/components/UndrawMindfulness/UndrawMindfulness.js';


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
          <div style={containerStyle}>
            <UndrawEatingTogether skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          <div style={containerStyle}>
            <UndrawSleeping skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          <div style={containerStyle}>
            <UndrawHealthyHabit skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          <div style={containerStyle}>
            <UndrawHouseSearching  primaryColor="red" accentColor="blue" secondaryColor="purple"/>
          </div>
          <div style={containerStyle}>
            <UndrawGrowing  primaryColor="red" accentColor="blue" secondaryColor="purple"/>
          </div>
          <div style={containerStyle}>
            <UndrawBroadcast  primaryColor="red"/>
          </div>
          <div style={containerStyle}>
            <UndrawCelebration  skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          <div style={containerStyle}>
            <UndrawCreditCard  skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          <div style={containerStyle}>
            <UndrawBrainstorming  skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          <div style={containerStyle}>
            <UndrawCalendar  skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          <div style={containerStyle}>
            <UndrawMindfulness  skinColor="orange" primaryColor="red" accentColor="blue"/>
          </div>
          
        </p>
      </div>
    );
  }
}

export default App;
