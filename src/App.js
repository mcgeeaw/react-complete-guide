import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Adam', age: 35},
        { name: 'Joey', age :25},
        { name: 'Jim', age : 23}
    ],
      otherState: 'something else'
  }

  switchNameHandler = () => {
    //console.log("CLICK");
     // NO this.state.persons[0].name = 'YOLO';
      this.setState({persons: [
              { name: 'Yolo', age: 35},
              { name: 'Joey', age :25},
              { name: 'Jim', age : 99}
          ]})
  }

  render() {
     return (
       <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is working JSX</p>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
           <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Swimming</Person>
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       </div>
     );
    //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));


  }
}

export default App;
