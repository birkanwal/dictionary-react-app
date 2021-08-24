import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchBox">
        <input
          type="search"
          placeholder="Type a word"
          className="form-control"
          onChange={changeWord}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
