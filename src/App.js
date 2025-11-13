import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const App = () => {
  interface GroceryItem {
    category: string;
    name: string;
    unit: string;
    qty: number;
    imageUrl: string;
  }
  const grocery: GroceryItem[] = [
    {
      category: "vegetables",
      name: "carrot",
      unit: "kg",
      qty: 1,
      imageUrl: "./GroceryCatelog/carrots.png",
    },
    {
      category: "vegetables",
      name: "bringle",
      unit: "kg",
      qty: 1,
      imageUrl: "./GroceryCatelog/bringle2.png",
    },
    {
      category: "vegetables",
      name: "tomato",
      unit: "kg",
      qty: 1,
      imageUrl: "./GroceryCatelog/tomato.png",
    },
    {
      category: "vegetables",
      name: "potato",
      unit: "kg",
      qty: 1,
      imageUrl: "./GroceryCatelog/potato.png",
    },
    {
      category: "fruits",
      name: "apple",
      unit: "kg",
      qty: 1,
      imageUrl: "./GroceryCatelog/shimla-mirch.png",
    },
  ];
  return (
    <div>
      <Typography variant="h4" sx={{ padding: "20px" }}>
        Grocery List
      </Typography>

      <div>
        {grocery.map((item, index) => (
          <Card sx={{ maxWidth: 245 }} key={index}>
            <CardMedia
              sx={{ height: 100 }}
              title={item.category}
              image={item.imageUrl}
              alt={item.name}
            />
            <CardContent>
              {/* Category shown visibly */}
              <Typography variant="subtitle2" color="text.secondary">
                {item.category}
              </Typography>

              {/* Item name */}
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>

              {/* Optional quantity/unit info */}
              <Typography variant="body2" color="text.secondary">
                {item.qty} {item.unit}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add+</Button>
              <Button size="small">Del-</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default App;
