import React, { Component } from "react";
import currentVideo from "../../components/CurrentVideo/CurrentVideo";
// import About from "../About/About";
// import CommentArea from "../CommentArea/CommentArea";
// import CommentForm from "../CommentForm/CommentForm";
// import VideoList from "../VideoList/VideoList";
import axios from "axios";

const apiURL = "https://project-2-api.herokuapp.com";
const apiKEY = "ad2060b7-137d-4ee7-af25-4099ca3a2f9f";

export default class Home extends Component {
  state = {
    currentVideo: [],
    // sideVideos: [],
  };


  componentDidMount() {
    axios
    .get(`${apiURL}/videos?api_key=${apiKEY}`)
    .then((response) => {
        console.log(response);
//       const sideVideos = response.data;
//       this.setState({ sideVideos });
//       axios.get(`${api__url}/videos/1af0jruup5gu?api_key=${api__key}`)
//       .then((topVideoResponse) => {
//           const topVideo = topVideoResponse.data;
//           this.setState({ topVideo });
//         });
//     });
  })
}

//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.match.params.id !== prevProps.match.params.id) {
//       axios.get(
//           `${api__url}/videos/${this.props.match.params.id}?api_key=${api__key}`)
//           .then((newVideo) => {
//           const topVideo = newVideo.data;
//           this.setState({ topVideo });
//         });
//   }


render() {
    return (
        <main className="Home">

        </main>
    );
  }
}
 
