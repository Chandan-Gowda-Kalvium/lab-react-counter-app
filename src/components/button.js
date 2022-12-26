import React from "react";
import "../App.css"

export default function Button(props) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}