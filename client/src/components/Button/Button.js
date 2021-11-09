import React from "react";
import "./Button.scss";


export default function Button(props) {
    console.log(props);
  return (
    <button className="button" src={props.icon} type={props.type} id={props.id} onClick={() => {props.handleAlert && props.handleAlert()}}>
      <img className="button-icon" src={props.icon} alt="button icon" />
      <h2 className="button-text">{props.text}</h2>
    </button>
  );
}
