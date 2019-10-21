import React from "react";

import "./App.css";
import HomePage from "./compenents/Homepage.js";
import NavBar from "./compenents/NavBar.js"
import SearchForm from "./compenents/SearchForm.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<NavBar/>
        <HomePage />
        <SearchForm/>
      </header>
    </div>
  );
}

export default App;
