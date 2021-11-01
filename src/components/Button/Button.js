import React from "react";
import "./Button.scss";


export default function Button(props) {
    
  return (
    <button className="button" src={props.icon} type={props.type} id={props.id}>
      <img className="button-icon" src={props.icon} />
      <h2 className="button-text">{props.text}</h2>
    </button>
  );
}
