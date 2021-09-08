import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.keyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function changeWord(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="searchBox">
          <input
            type="search"
            placeholder="Type a word"
            className="form-control"
            onChange={changeWord}
            defaultValue={props.keyword}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
