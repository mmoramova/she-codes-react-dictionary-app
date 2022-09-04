import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning[0].partOfSpeech}</h3>
      <p>
        <div className="definition">
          {props.meaning[0].definitions[0].definition}
        </div>
        <br />
        <div className="example">{props.meaning[0].definitions[0].example}</div>
      </p>
    </div>
  );
}
