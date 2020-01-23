import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component2 from './Component2';

class App extends React.Component{

constructor(){
  super()
  this.state = {
    firstname : "",
    lastname : "",
    flag: false
  }
}

setName=(e) => {
  this.setState({[e.target.name]: e.target.value})

}
submit=()=>{
  this.setState({flag:!this.state.flag})
}



  render(){
    return(
      <div>
        <Component2 s = {this.state} setname = {this.setName} submit={this.submit}/>
      </div>
    )
  }
}

export default App;
