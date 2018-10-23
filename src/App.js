import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Table from './components/Table'

class App extends Component {

  constructor(){
    super();
    this.state = {
      allData: []
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
         this.setState({
             allData: response.data.allData
         })
        });
  }

  render() {
    let table = <Table data = {this.state.allData}/>;
    return (
      <div className="App">
          {table}
      </div>
    );
  }
}

export default App;
