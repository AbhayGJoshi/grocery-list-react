import React, { useState, useEffect } from "react";
import "./App.css";
import ItemCard from "./ItemCard";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

const App = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() === "") return;
    setList([...list, item]); //adds already having list + item
    setItem("");
  };

  const deleteItem = (index) => {
    setList(list.filter((_, id) => id !== index)); // filtering list's keys not equal to index
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("http://localhost:53000/users")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        Date Lenght = {data.length}
        Roll no= {data.rollno}
        Name= {data.name}
        City= {data.city}
        Age= {data.age}
      </Typography> */}

      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        Grocery List
      </Typography>
      <Input
        className="input"
        type="text"
        placeholder="...add new item"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      ></Input>
      <Button style={{ margin: "32px" }} variant="contained" onClick={addItem}>
        Add
      </Button>

      {/* <ol className="grocery-list">
        {list.map((_itemToDisplay, index) => (
          <li key={index}>
            <ItemCard
              item={_itemToDisplay}
              description={"description for " + _itemToDisplay}
              deleteFunction={() => deleteItem(index)}
            />
          </li>
        ))}
      </ol>  */}

      <ol className="grocery-list">
        {data.map((_itemToDisplay, index) => (
          <li key={index}>
            <ItemCard
              name={_itemToDisplay.name}
              city={_itemToDisplay.address.city}
              deleteFunction={() => deleteItem(index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
