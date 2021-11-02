// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentSection from "./components/CommentSection/CommentSection";
import Sidebar from "./components/Sidebar/Sidebar";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import VideoDescription from "./components/Video Description/VideoDescription";
import data from "./data/video-details.json";
import data2 from "./data/videos.json";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/VideoUpload/VideoUpload";
import Home from "./pages/Home/Home";

export default class App extends Component {
  state = {
    videoData: data,
    shown: data[0],
    nextVideoData: data2,
  };
  handleClick = (vid) => {
    let video = [...this.state.videoData];
    console.log(video);
    console.log(vid);
    let i = video.findIndex((index) => {
      console.log(index);
      console.log(vid);
      if (index.id === vid.id) {
        return index.id;
      }
    });
    console.log(i);
    this.setState({ shown: video[i] });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          
            <CurrentVideo data={this.state.shown} />
            <div className="main">
              <div className="content">
                <VideoDescription data={this.state.shown} />
                <article className="comments" id="comments">
                  <h1 className="comments__header">3 comments</h1>
                  <CommentForm />
                  <CommentSection data={this.state.shown} />
                </article>
              </div>
              <Sidebar
                data={this.state.videoData}
                shown={this.state.shown}
                handleClick={this.handleClick}
              />
            </div>
            <Switch>
            <Route path="/upload" component={Upload} />
            <Route path="/videos/:id" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
