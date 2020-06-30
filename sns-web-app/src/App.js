import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      flaskReturned: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  isNumeric(value) {
    return /^-{0,1}\d+$/.test(value);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({inputValue: value});

    if (!this.isNumeric(value)) {
      this.setState({flaskReturned: 'INVALID INPUT'});
    }
    else {
      fetch('http://localhost:5000/multi/' + value)
        .then(res => res.json())
        .then(result => this.setState({flaskReturned: result['result']}))
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            sns index prototype.
          </p>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
          <h3>flask app returns: {this.state.flaskReturned}</h3>
        </header>
      </div>
    );
  }
}

export default App;
