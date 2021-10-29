// import logo from './logo.svg';
import React, { Component } from "react";
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CommentForm from "./components/CommentForm/CommentForm";
import CommentSection from './components/CommentSection/CommentSection';
import Sidebar from "./components/Sidebar/Sidebar";
import data from './data/video-details.json';
import data2 from './data/videos.json';


export default class App extends Component {
  state = {
      videoData: data,
      shown: data[0],
      nextVideoData: data2,
  }



  render(){
  return (
    <div className="App">
      <Header />
      <Hero data={this.state.shown} />
      <div className="main">
 
              <CommentForm/>
              <CommentSection data={this.state.shown}/>
        
          <Sidebar data={this.state.nextVideoData}/>
      </div>
    </div>
    );
  }
}




