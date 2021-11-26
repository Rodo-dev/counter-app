import './App.css';
import React from 'react';

function Increment(props) {
  return (
    <div>
      <button onClick={()=>props.incrementCounter()}>Increment</button>
    </div>
  )
}

function Decrement(props) {
  return (
    <div>
      <button onClick={()=>props.decrementCounter()}>Decrement</button>
    </div>
  )
}

function Reset(props) {
  return (
    <div>
      <button onClick={()=>props.resetCounter()}>Reset</button>
    </div>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state={
      counter: 0
    }
  }

  resetCounter = () => {
    this.setState({
      counter: 0
    });
  }

  incrementCounter = () => {
    this.setState({
      counter: parseInt(this.state.counter) + 1 
    });
  }
  
  decrementCounter = () => {
    this.setState({
      counter: parseInt(this.state.counter) - 1 
    });
  }

  render() {
    return (
      <>
        <div className='Titulo'>
          Assign Statement
        </div>
        <div>
          Counter: {this.state.counter}
        </div>
        <Increment
          incrementCounter = {this.incrementCounter}
        />
        <Decrement
          decrementCounter = {this.decrementCounter}
        />
        <Reset
          resetCounter = {this.resetCounter}
        />
      </>
    )
  }
}

export default App;
