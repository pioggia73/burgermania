import React, { Component } from 'react';
import './App.css';
// ***** components ***** //
import Layout from './components/Layout/Layout';

// ***** containers *****//
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    )
  }
}

export default App;
