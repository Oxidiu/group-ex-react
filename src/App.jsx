import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        onChange={(ev) => {
          let text = ev.target.value;
          setInputText(text);
        }}
        type="text"
      />
      <button
        onClick={() => {
          let itemsNew = [...items, inputText];
          setItems(itemsNew);
        }}
      >
        Add Item
      </button>
      {items.map((item) => (
        <CardComponent content={item}></CardComponent>
      ))}
    </div>
  );
}

export default App;
