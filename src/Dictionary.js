import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    return alert(`Searching for ${word}`);
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
