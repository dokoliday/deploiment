import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { items: [] };

  async componentDidMount() {
    const response = await fetch('/api/items');
    const { items } = await response.json();
    this.setState({ items });
  }

  render() {
    if (this.state.items.length === 0) {
      return <p>no data</p>
    } else {
      return (
        <div className="App">
          <ul>
            {this.state.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;