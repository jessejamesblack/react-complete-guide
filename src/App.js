import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Jesse', age: 27 },
      { name: 'Meredyth', age: 31 },
      { name: 'Midnyte', age: 11 },
      { name: 'Olive', age: 3 },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Jesse', age: 27 },
        { name: newName, age: 27 },
        { name: 'Midnyte', age: 11 },
        { name: 'Olive', age: 3 },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jesse', age: 27 },
        { name: 'Meredyth', age: 31 },
        { name: 'Midnyte', age: 11 },
        { name: event.target.value, age: 3 },
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I'm a react dev </h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Abdul!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Abdul')}> I'm a Human! </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Durick')}> I'm a Human! </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Michael')}> I'm a cat! </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          click={this.switchNameHandler.bind(this, 'Abdul!')}
          changed={this.nameChangedHandler}> I'm a cat! </Person>
      </div>
    );
  }
}

export default App;
