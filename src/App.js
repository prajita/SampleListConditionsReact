import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation'
import CharComp from './CharComponent/CharComp'

class App extends Component {
  state = {
    lengthOfText: 0,
    text: [],
    value: ""
  }
  textchangeHandler = (event)=>{
    this.setState({
      lengthOfText: event.target.value.length,
      value: event.target.value,
      text: event.target.value.split('')
    })
  }
  clickHandler =(numberIndex)=>{
    const textUpdated = [...this.state.text]
    textUpdated.splice(numberIndex,1)
    const valueUpdated = textUpdated.join('')
    this.setState({text: textUpdated, value: valueUpdated})


  }
  render() {
    let inputText = null
    inputText=(
            <div>
               {this.state.text.map((number,index)=>{
                 return <CharComp click={()=>this.clickHandler(index)} numberVal={number} ></CharComp>
               })}
            </div>
            )

    return (
      <div>
        <h1 className="h1Color">let's have some fun</h1>
      <div className="App">
        <p>Enter some text</p>
        <input type="text" value={this.state.value} onChange={this.textchangeHandler}></input>
      </div>
      <div>
        <Validation lengthText={this.state.lengthOfText}></Validation>
        {inputText}
      </div>
      </div>
    );
  }
}

export default App;
