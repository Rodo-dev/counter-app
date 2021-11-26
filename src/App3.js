import './App.css';
import React from 'react';

class Child1 extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue : 0
        }
    }

    handleInputFieldChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render(){
        return (
            <div>
              <input type="number" value={this.state.inputValue} onChange={(e)=>this.handleInputFieldChange(e)}></input>
              
              <select value={this.state.inputValue} onChange={(e)=>{
                  this.handleInputFieldChange(e);
                  this.props.changeRandomNumber(e.target.value)
                  }}>

                  {
                    this.props.names.map((name,index)=><option value={index} key={index}>{name}</option>)
                  }

              </select>

              <button onClick={()=>this.props.changeRandomNumber(this.state.inputValue)}>Click-Here</button> <span>selectedNameNumber: {this.props.randomNumber}</span>
            </div>
        )

    }
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
  
  changeRandomNumber = (value) => {
    this.setState({
      randomNumber: value
    });
  }
  
  render() {
    return (
      <>
        <div className='Titulo'>
          Ejemplo de Forms. 
        </div>
        <ol>
          {
            this.state.names.map((name,index) => <li key={index}>{name}</li>) // Every child in a list should have a unique key prop
          }
        </ol>
        <Child1 
          names={this.state.names}
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