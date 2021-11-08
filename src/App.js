// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Upload from "./pages/VideoUpload/VideoUpload";
import Home from "./pages/Home/Home";

export default class App extends Component {
  

  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/upload" component={Upload} />
            <Route path="/videos/:id" 
            render={(reactRouterDomProps) =>{
              return (
                <Home
                {...reactRouterDomProps}
                />
              )
            }}>
            </Route>
          </Switch>
      </div>
    );
  }
}
