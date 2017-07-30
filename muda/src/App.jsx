import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  updateDeadline() {
    // You may wan to clean this data before you set it man!
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return(
      <div className="App">
        <div className="App-title"> Count The Remaining MUDA </div>
        <div className="App-time-span"> From Now to {this.state.deadline} </div>
        <Clock
          deadline={this.state.deadline}
         />
        <Form inline>
          <FormControl
            className='New-date'
            placeholder='new date'
            onChange={event => this.setState({newDeadline:event.target.value})}
           />
          <Button onClick={() => this.updateDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }

}

export default App;
