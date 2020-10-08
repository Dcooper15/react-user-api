import React, { Component } from "react";
import RandomUser from "./components/RandomUser";
import './App.css';

class App extends Component {
  state = {
    userData: [],
   
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    return data;
};

  handleCLick = async () => {
    const userData = await this.loadData();
    
    this.setState({
      userData: userData.results,
    });
  };


  async componentDidMount() {
    const userData = await this.loadData();
   
    this.setState({
      userData: userData.results
    });
  }
  
  render() {
    const { userData } = this.state;
    return (
    <div className="App">
      <header className="App-header">
    
        <h1>Random User!</h1>
      </header>
      <button onClick={this.handleClick}>Load more users</button>
      {this.state.userData.length ? (
      <RandomUser userData={userData} />
      ) : (
      <p>No User Data Loaded</p>
      )}
    </div>
  ); 
}
}
export default App;
