import React from "react";
import "./Input.css";

export const Input = props => (
  <div className="input calulatorRow">
    <div>{props.input}</div>
    <div>{props.result ? props.result : ''}</div>
  </div>
);