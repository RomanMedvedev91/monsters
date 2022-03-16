import { useState, useEffect } from "react";
import { CartList } from "./components/Cart-list";
import { SearchBox } from "./components/search-box/Search-box";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("Monsters");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search monster'
        handleChange={onSearchChange}
      />
      <br />
      <SearchBox
        className='title-search-box'
        placeholder='Title'
        handleChange={onTitleChange}
      />
      <CartList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
