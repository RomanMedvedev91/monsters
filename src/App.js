import React, { Component } from "react";
import "./App.css";
import { CartList } from "./components/Cart-list";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monster'
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CartList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;