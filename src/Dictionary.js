import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState(" ");

  function handleResponse(response) {
    console.log(response.data);
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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word"
          className="form-control"
          onChange={changeWord}
        />
      </form>
    </div>
  );
}
