import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Adam', age: 35},
            {name: 'Joey', age: 25},
            {name: 'Jim', age: 23}
        ],
        otherState: 'something else',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        //console.log("CLICK");
        // NO this.state.persons[0].name = 'YOLO';
        this.setState({
            persons: [
                {name: newName, age: 35},
                {name: 'Joey', age: 25},
                {name: 'Jim', age: 99}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Adam', age: 35},
                {name: event.target.value, age: 25},
                {name: 'Jim', age: 99}
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

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
                <h1>Hi, I'm a React App</h1>
                <p>This is working JSX</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {
                    this.state.showPersons === true ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}/>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'FSD')}
                            changed={this.nameChangedHandler}>My Hobbies: Swimming</Person>

                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}/>
                    </div> : null
                }
            </div>
        );
        //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));


    }
}

export default App;
