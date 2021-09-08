import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <Dictionary keyword="word" />
        <hr />
        <footer>Coded by Bir Kanwal Kaur Randhawa</footer>
      </div>
    </div>
  );
}

export default App;
