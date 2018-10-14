import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import FacebookGroupsList from './Components/FacebookGroupsList';
import PodcastList from './PodcastList';
import ReduxForm from './Components/ReduxForm';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const {loading, msg} = this.state;

    return <p>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
      <span>{msg}</span>
    </p>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path="/lambda" component={LambdaDemo} />
        <Route path="/facebook/rentalgroups/sf" component={FacebookGroupsList} />
        <Route path="/reduxform" component={ReduxForm} />
      </div>
    );
  }
}

export default App;
