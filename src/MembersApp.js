import React, { useState, useEffect } from "react";
import "./App.css";
import ItemCard from "./ItemCard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const App = () => {
  // const [item, setItem] = useState("");
  const [item, setItem] = useState({ name: "", city: "" });
  const [list, setList] = useState([]);

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

  const addItem = () => {
    // if (item.trim() === "") return;
    if (item.name.length < 2 || item.city.length < 2) return;
    // setData([...data, item]); //adds already having list + item
    const newItem = {
      name: item.name,
      address: { city: item.city },
    };
    // setItem("");
    setData([...data, newItem]);
    setItem({ name: "", city: "" });
  };

  const deleteItem = (index) => {
    setData(data.filter((_, id) => id !== index)); // filtering list's keys not equal to index
  };
  // const addItem = () => {
  //   if (item.trim() === "") return;
  //   setList([...list, item]); //adds already having list + item
  //   setItem("");
  // };

  // const deleteItem = (index) => {
  //   setList(list.filter((_, id) => id !== index)); // filtering list's keys not equal to index
  // };

  return (
    <div className="App">
      <div>
        <Typography variant="h4" sx={{ padding: "20px" }}>
          Member List
        </Typography>
        <TextField
          variant="outlined"
          placeholder="...add new item name"
          value={item.name}
          // onChange={(e) => setItem(e.target.value)}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          size="small"
          background-color="#ffffff"
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          placeholder="...add new item city"
          value={item.city}
          // onChange={(e) => setItem(e.target.value)}
          onChange={(e) => setItem({ ...item, city: e.target.value })}
          size="small"
          background-color="#ffffff"
        />{" "}
        <br />
        <br />
        <Button
          sx={{ marginLeft: "32px", textAlign: "center" }}
          variant="contained"
          onClick={addItem}
        >
          Add
        </Button>
      </div>
      <br />
      <br />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          padding: 2,
          background: "#FFE6E6",
        }}
      >
        {data.map((_itemToDisplay, index) => (
          <ItemCard
            key={index}
            name={_itemToDisplay.name}
            city={_itemToDisplay.address?.city || "N/A"}
            deleteFunction={() => deleteItem(index)}
          />
        ))}
      </Box>
    </div>
  );
};

export default App;
