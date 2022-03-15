import { useState, useEffect } from "react";
import { CartList } from "./components/Cart-list";
import { SearchBox } from "./components/search-box/Search-box";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
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

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1 className='app-title'>Moster Roldex</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search monster'
        handleChange={onSearchChange}
      />
      <CartList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   handleChange = (e) => {
//     this.setState({ searchField: e.target.value });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div className='App'>
//         <h1>Moster Roldex</h1>
//         <SearchBox
//           placeholder='search monster'
//           handleChange={this.handleChange}
//         />
//         <CartList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
