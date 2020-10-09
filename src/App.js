import React, { Component } from "react";

import "bulma/css/bulma.css"
import './App.css';
import { Container } from "bloomer";
import { Button } from "bloomer";
import { Progress } from "bloomer";
import { Notification } from "bloomer";
import { Delete } from "bloomer";
import { Pagination } from "bloomer";
import { PageControl } from "bloomer";
import { PageList } from "bloomer";
import { PageLink } from "bloomer";
import { PageEllipsis } from "bloomer";
import { Page } from "bloomer";
import RandomUser from "./components/RandomUser";


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
      <Container isFluid>
        <header className="App-header">
    
        <h1>Random User!</h1>
        </header>
        <Button isColor='info' isOutlined onClick={this.handleClick}>Load more users</Button>
      {this.state.userData.length ? (
        <RandomUser userData={userData} />
        ) : (
        <p>No User Data Loaded</p>
        )}
        <Progress isSize='medium' isColor="info" value={75} max={100} />
        <Notification isColor='info'>
        <Delete />
          These are random users being generated. Aren't they great?
      </Notification>
    </Container>
    <br>
    </br>
    <Pagination>
    <PageControl isSize="small">Previous</PageControl>
    <PageControl isNext>Next</PageControl>
    <PageList>
        <Page><PageLink>1</PageLink></Page>
        <Page><PageEllipsis /></Page>
        <Page><PageLink>2</PageLink></Page>
        <Page><PageLink isCurrent>3</PageLink></Page>
        <Page><PageEllipsis /></Page>
    </PageList>
</Pagination>
    </div>
  ); 
}
}
export default App;
