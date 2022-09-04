import React from "react";

import "./Results.css";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <Meaning meaning={props.results.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
