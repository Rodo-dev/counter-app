import './App.css';
import React from 'react';

function Child1(props) {
  return (
    <div>
      <button onClick={()=>props.changeRandomNumber()}>Click-Here</button> <span>selectedNameNumber: {props.randomNumber}</span>
    </div>
  )
}

function Child2(props) {
    return (
        <div>
            <h2>
                  I am a functional component: Owned by {props.ownedBy}
            </h2>
        </div>
    )
}

class App extends React.Component {
  constructor(){
    super();
    this.state={
      names: ["Joselyn", "AnaPaula", "Chikis", "Concepcion", "Angelica", "Julio"],
      randomNumber: 0
    }
  }

  generateRandomNumber = (maximum=this.state.names.length-1, minimum=0)=> Math.floor(Math.random() * (maximum - minimum +1)) + minimum;
  
  changeRandomNumber = () => {
    this.setState({
      randomNumber: this.generateRandomNumber()
    });
  }
  
  render() {
    return (
      <>
        <div className='Titulo'>
          Ejemplo de Child to Child. 
        </div>
        <ul>
          {
            this.state.names.map((name,index) => <li key={index}>{name}</li>) // Every child in a list should have a unique key prop
          }
        </ul>
        <Child1 
          changeRandomNumber = {this.changeRandomNumber}
          randomNumber={this.state.randomNumber}
        />
        <Child2
          ownedBy={this.state.names[this.state.randomNumber]} 
        />
      </>
    )
  }
}

export default App;