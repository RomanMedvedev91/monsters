import { useState, useEffect, ChangeEvent } from "react";
import { CartList } from "./components/Cart-list";
import { SearchBox } from "./components/search-box/Search-box";
import "./App.css";

import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("Monsters");
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
        onChangeHandler={onSearchChange}
      />
      <br />
      <SearchBox
        className='title-search-box'
        placeholder='Title'
        onChangeHandler={onTitleChange}
      />
      <CartList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
