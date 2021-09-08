import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h2 className="sub-heading">{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="meaning">
              {definition.definition}
              <br />
              <em>e.g. "{definition.example}"</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
